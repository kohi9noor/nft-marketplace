import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar, Footer } from "@/components/";

const geistSans = Poppins({
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "nft marketplace",
  description: "a marketplace where you can buy and sell nfts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$ ${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" dark:bg-zinc-800 bg-white min-h-screen dark:text-white text-black">
            <Navbar />
            <div>{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
