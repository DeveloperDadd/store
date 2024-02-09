import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1 className="home-text text-6xl py-8 text-center">A Lexington Tradition Since 1969</h1>
    <iframe className="text-center m-auto mt-5" src="https://player.vimeo.com/video/324319542?h=b6006dd76b" width="840" height="460" allow="autoplay; fullscreen; picture-in-picture"></iframe>
<p><a href="https://vimeo.com/324319542"></a></p>
    <h2 className="home-text text-4xl py-8 text-center">See what our customers have to say!</h2>
    <h2 className="home-text text-2xl py-8 text-center">Located on Southland Drive, you can't miss us! </h2>
    <iframe className="m-auto" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12573.064103718376!2d-84.527052!3d38.0175772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8842440c8c1d0943%3A0x4e0b29a510e43268!2sCritchfield%20Meats%20Family%20Market!5e0!3m2!1sen!2sus!4v1707514132796!5m2!1sen!2sus" width="400" height="400" loading="lazy"></iframe>
    </>
  );
}
