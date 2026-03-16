import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { ContactEmail } from "@/components/ContactEmail";

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.email().max(190),
  message: z.string().min(1).max(2000)
});

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL;
const toEmail = process.env.CONTACT_TO_EMAIL;

export async function POST(request: Request) {
  if (!resendApiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { success: false, error: "Email configuration is missing on the server." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid input.", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(resendApiKey);

  try {
    const created = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message
      }
    });

    const { data, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New portfolio contact from ${name}`,
      reply_to: email,
      react: <ContactEmail name={name} email={email} message={message} />,
    });

    if (resendError) {
      console.error("Resend API error:", resendError);
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please check server logs." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}

