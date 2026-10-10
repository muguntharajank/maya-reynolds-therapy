import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif-src" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans-src" });

const title = "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA";
const description =
  "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, burnout, perfectionism, and stress, with in-person and secure telehealth sessions throughout California.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "Dr. Maya Reynolds, PsyD" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Dr. Maya Reynolds, PsyD",
              description,
              address: { "@type": "PostalAddress", streetAddress: "123th Street 45 W", addressLocality: "Santa Monica", addressRegion: "CA", postalCode: "90401", addressCountry: "US" },
              areaServed: ["Santa Monica", "California"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
