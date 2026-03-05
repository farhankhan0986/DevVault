import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
import Header from "./components/Header";
import ChatWidget from "./components/ChatWidget";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Farhan Abid | Full-Stack Developer",
  description:
    "Full-Stack Web Developer specializing in backend architecture, API design, and production-ready systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <Header />
          {children}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
