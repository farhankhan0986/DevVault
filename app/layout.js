import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Farhan Abid | Portfolio",
  description: "Full-Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning={true}>
        <ThemeProvider>
          <Header />
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
