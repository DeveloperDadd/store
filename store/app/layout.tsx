import Navbar from "./components/navbar";
import Footer from "./components/footer";

import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['600']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200','300','400','500','600','700','800','900']
})

export const metadata: Metadata = {
  title: "Critchfield Meats",
  description: "Critchfield Family Markets, Lexington's Finest Butcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gradient-to-r from-rose-50 via-white to-red-50">
      <body>
      <div className={playfair.className} >
        <Navbar/>
      </div>
      <div className={montserrat.className}>
      { children }
      </div>
      <Footer />
      </body>
    </html>
  );
}
