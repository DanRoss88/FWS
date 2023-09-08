import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fremen Web Solutions",
  description: "Your friends in the desert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="dark text-foreground bg-background">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
