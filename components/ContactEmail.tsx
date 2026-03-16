import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{
    fontFamily: 'sans-serif',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    color: '#333',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <h1 style={{ color: '#0070f3', borderBottom: '2px solid #0070f3', paddingBottom: '10px' }}>
      New Contact Message
    </h1>
    <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
      You received a new message from your portfolio contact form.
    </p>
    <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '4px', border: '1px solid #eee', marginBottom: '20px' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
    <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '4px', border: '1px solid #eee' }}>
      <p><strong>Message:</strong></p>
      <p style={{ whiteSpace: 'pre-wrap', fontStyle: 'italic', color: '#555' }}>
        {message}
      </p>
    </div>
    <footer style={{ marginTop: '20px', fontSize: '12px', color: '#888', textAlign: 'center' }}>
      Sent from your Portfolio AI contact form
    </footer>
  </div>
);
