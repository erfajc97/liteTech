import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Lite-tech",
  description: "Lite-tech",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" >
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        <Providers>
          <header className="bg-black/85">
            <Header />
          </header>
          <main className="container max-w-screen-2xl mx-auto mt-5">{children}</main>
          <footer className="pb-5 px-5 lg:pb-7 lg:px-10 ">
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
