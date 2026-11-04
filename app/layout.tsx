import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import NeuralBackground from "@/components/NeuralBackground";
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
  title: "Pranav Sunil Raja | Database Engineer @ SymphonyAI",
  description:
    "Database Engineer Apprentice at SymphonyAI. Building enterprise database infrastructure, distributed data pipelines, and machine learning systems.",
  keywords: [
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
    title: "Pranav Sunil Raja | Database Engineer @ SymphonyAI",
    description:
      "Database Engineer Apprentice at SymphonyAI. Building enterprise database infrastructure, distributed data pipelines, and machine learning systems.",
    type: "website",
    url: "https://pranavsraja.com",
    siteName: "Pranav Sunil Raja Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Sunil Raja | Database Engineer @ SymphonyAI",
    description: "Database Engineer Apprentice at SymphonyAI. Building enterprise data & AI systems.",
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
        className={`${inter.className} ${outfit.variable} overflow-y-scroll overflow-x-hidden bg-[#07080a] text-[#f8fafc]`}
      >
        <LoadingScreen />
        <SmoothScroll>
          <Navbar />
          <NeuralBackground />
          <div className="z-10 relative">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
