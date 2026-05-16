import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
import Header from "./components/Header";
import ChatWidget from "./components/ChatWidget";
import { Analytics } from "@vercel/analytics/next"
import CustomCursor from "./components/CustomCursor";
import PointerEffects from "./components/PointerEffects";

export const metadata = {
  title: "Farhan Abid | Software Developer",
  description: "Full-stack software engineer specializing in backend systems, AI agents, and scalable web applications. Explore my projects, experience, and technical writing.",
  keywords: ["Farhan Abid", "Software Developer", "Full-Stack Developer", "AI Developer", "Next.js", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Farhan Abid", url: "https://github.com/farhankhan0986" }],
  creator: "Farhan Abid",
  openGraph: {
    title: "Farhan Abid | Software Developer",
    description: "Full-stack software engineer specializing in backend systems, AI agents, and scalable web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Farhan Abid Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Abid | Software Developer",
    description: "Full-stack software engineer specializing in backend systems, AI agents, and scalable web applications.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning={true}>
        <ThemeProvider>
          <Header />
          {children}
          <Analytics />
          <ChatWidget />
          <PointerEffects />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
