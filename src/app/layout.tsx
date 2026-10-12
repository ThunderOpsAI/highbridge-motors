import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Highbridge Motors | Beechworth Mechanical Workshop & Roadworthy (RWC) Centre",
  description: "Certified automotive mechanics in Beechworth. VicRoads Licensed Roadworthy Inspections (RWC), manufacturer logbook servicing, brakes, clutches and diagnostics at 4/26 Crawford St. Call (03) 5728 1335.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-surface-950 text-surface-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
