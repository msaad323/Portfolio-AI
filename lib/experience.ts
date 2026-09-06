/**
 * Single source of truth for "years of experience" shown across the site.
 * Career start: June 2021.
 *
 * All arithmetic is done in UTC so the server render and the client hydration
 * always agree, regardless of the visitor's timezone.
 */
const CAREER_START = new Date(Date.UTC(2021, 5, 1)); // 2021-06-01

export function getYearsOfExperience(now: Date = new Date()): number {
  let years = now.getUTCFullYear() - CAREER_START.getUTCFullYear();

  const monthDiff = now.getUTCMonth() - CAREER_START.getUTCMonth();
  const beforeAnniversary =
    monthDiff < 0 ||
    (monthDiff === 0 && now.getUTCDate() < CAREER_START.getUTCDate());

  if (beforeAnniversary) {
    years -= 1;
  }

  return Math.max(years, 0);
}
