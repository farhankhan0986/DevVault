import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
import Header from "./components/Header";
import ChatWidget from "./components/ChatWidget";
import { Analytics } from "@vercel/analytics/next"

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
          {/* 
            ChatWidget is rendered at the ROOT layout level.
            
            WHY HERE and not inside a specific page?
            → It needs to be available on EVERY page
            → It's position:fixed so it doesn't affect page layout
            → Rendering once at root = no re-mounting when navigating
          */}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
