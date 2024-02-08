import type { Metadata } from "next";
import Image from "next/image";
import Link from 'next/link';
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400','500','600']
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
    <main className={playfair.className}>
      <Image
        src="/logo.webp"
        width={200}
        height={200}
        alt="Critchfield Family Market Logo"
      />
      <nav>
        <ul>
          <li>
            <Link href="#">Shop</Link> {/* Inside here put beef, pork, chicken, grocery, specials, bundles, cart functionality, and checkout 
            at checkout give the user the option to have the item delivered if within a reasonable distance, if under a certain amount, add a delivery fee  */}
          </li>
          <li>
            <Link href="#">About us</Link> {/* Put the description about how the business started, pictures of the Critchfields and Larry */}
          </li>
          <li>
            <Link href="#">Wholesale</Link> {/* Just put a description here about how to get signed up here for the  */}
          </li>
          <li>
            <Link href="#">Newsletter</Link> {/* Give users a form to fill out to get signed up for weekly email list */}
          </li>
        </ul>
    </nav>
    <footer>
      {/* Needs to have an address, telephone number, Link icons to social media accounts, FAQ questions */}
    </footer>
    </main>
  );
}
