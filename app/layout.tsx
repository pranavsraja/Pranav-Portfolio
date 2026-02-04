import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";
import LoadingScreen from "@/components/ui/LoadingScreen"; // Import LoadingScreen

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"], variable: '--font-outfit' }); // Configure Outfit

export const metadata: Metadata = {
  title: "Pranav Sunil Raja | Data & AI Systems Engineer",
  description: "Building data and AI systems that drive real decisions. Designed to ship, scale, and evolve with the product.",
  keywords: ["Data Engineering", "AI Systems", "Machine Learning", "Python", "Data Science", "ETL Pipelines", "Data Analyst","AWS", "DataBricks", "PostgreSQL", "PyTorch", "TensorFlow"],
  authors: [{ name: "Pranav Sunil Raja" }],
  openGraph: {
    title: "Pranav Sunil Raja | Data & AI Systems Engineer",
    description: "Building data and AI systems that drive real decisions. Designed to ship, scale, and evolve with the product.",
    type: "website",
    url: "https://pranavsraja.com",
    siteName: "Pranav Sunil Raja Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Sunil Raja | Data & AI Systems Engineer",
    description: "Building data and driven AI solutions.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${outfit.variable} overflow-y-scroll overflow-x-hidden`}>
        <LoadingScreen /> {/* Cinematic Loader */}
        <div className="film-grain" /> {/* Film Grain Overlay */}
        <SmoothScroll>
          <ThemeToggle />
          <StarBackground />
          <div className="z-10 relative">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
