import type { Metadata } from "next";
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
      <nav>
        <ul>
          <li>Welcome</li>
        </ul>
    </nav>
    <footer>

    </footer>
    </main>
  );
}
