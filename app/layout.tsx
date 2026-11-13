import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import BackgroundLoader from "@/components/BackgroundLoader";
import BackToTop from "@/components/BackToTop";
import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  // Makes the generated preview image / icon URLs absolute when shared.
  metadataBase: new URL("https://pranavsraja.com"),
  title: "Pranav Sunil Raja — Data & AI",
  description:
    "MSc Data Science graduate working across data science, analytics, data engineering and ML/AI. Currently at SymphonyAI; industry dissertation at SAGE.",
  keywords: [
    "Data Scientist",
    "Data Analyst",
    "Data Engineer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Database Engineer",
    "SymphonyAI",
    "Database Engineering",
    "Data Engineering",
    "AI Systems",
    "Machine Learning",
    "SQL",
    "Python",
    "Data Science",
    "ETL Pipelines",
    "Databricks",
    "PostgreSQL",
    "PyTorch",
  ],
  authors: [{ name: "Pranav Sunil Raja" }],
  openGraph: {
    title: "Pranav Sunil Raja — Data & AI",
    description:
      "MSc Data Science graduate working across data science, analytics, data engineering and ML/AI. Currently at SymphonyAI; industry dissertation at SAGE.",
    type: "website",
    url: "https://pranavsraja.com",
    siteName: "Pranav Sunil Raja Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Sunil Raja — Data & AI",
    description: "Data science, analytics, data engineering and ML/AI. Currently at SymphonyAI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${outfit.variable} bg-[#07080a] text-[#f8fafc]`}
      >
        <MotionProvider>
          <LoadingScreen />
          <SmoothScroll>
            <Navbar />
            <BackgroundLoader />
            <div className="z-10 relative">{children}</div>
            <BackToTop />
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
