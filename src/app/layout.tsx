import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduFlex | College, Course & Exam Discovery Portal",
  description: "Discover top Engineering, MBA, Medical, Law & Design colleges in India. Compare verified NIRF rankings, cutoff trends, fee structures, and calculate admission probabilities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
