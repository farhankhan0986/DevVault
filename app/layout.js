import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
import Header from "./components/Header";
import ChatWidget from "./components/ChatWidget";
import { Analytics } from "@vercel/analytics/next"
import CustomCursor from "./components/CustomCursor";
import PointerEffects from "./components/PointerEffects";

export const metadata = {
  title: "Farhan A. | Developer Portfolio",
  description: "Full-stack developer portfolio showcasing projects and skills.",
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
