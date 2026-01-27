import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Farhan Abid | Portfolio",
  description: "Full-Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <Header />
        {children}
      </body>
    </html>
  );
}
