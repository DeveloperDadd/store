import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex justify-center items-center flex-col">
        <Image className="logo mb-5 drop-shadow-2xl" src="/logo.webp" width={300} height={300} priority={true} alt="Critchfield Family Market Logo"
        />
      <div>
        <ul className="flex flex-row ">
          <li className="px-4 py-1 text-3xl bg-red-500 text-white rounded-xl shadow-xl">
            <Link href="/shop">Shop</Link> {/* Inside here put beef, pork, chicken, grocery, specials, bundles, cart functionality, and checkout 
            at checkout give the user the option to have the item delivered if within a reasonable distance, if under a certain amount, add a delivery fee  */}
          </li>
          <li className="px-4 py-1 text-3xl">
            <Link href="/about">About us</Link> {/* Put the description about how the business started, pictures of the Critchfields and Larry */}
          </li>
          <li className="px-4 py-1 text-3xl">
            <Link href="/wholesale">Wholesale</Link> {/* Just put a description here about how to get signed up here for the  */}
          </li>
          <li className="px-4 py-1 text-3xl">
            <Link href="/newsletter">Newsletter</Link> {/* Give users a form to fill out to get signed up for weekly email list */}
          </li>
        </ul>
    </div>
        </nav>
    )
    
}