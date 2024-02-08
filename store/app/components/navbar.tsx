import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
        <>
        <Image className="logo" src="/logo.webp" width={200} height={200} priority={true} alt="Critchfield Family Market Logo"
        />
      <nav>
        <ul>
          <li>
            <Link href="/shop">Shop</Link> {/* Inside here put beef, pork, chicken, grocery, specials, bundles, cart functionality, and checkout 
            at checkout give the user the option to have the item delivered if within a reasonable distance, if under a certain amount, add a delivery fee  */}
          </li>
          <li>
            <Link href="/about">About us</Link> {/* Put the description about how the business started, pictures of the Critchfields and Larry */}
          </li>
          <li>
            <Link href="/wholesale">Wholesale</Link> {/* Just put a description here about how to get signed up here for the  */}
          </li>
          <li>
            <Link href="/newsletter">Newsletter</Link> {/* Give users a form to fill out to get signed up for weekly email list */}
          </li>
        </ul>
    </nav>
        </>
    )
    
}