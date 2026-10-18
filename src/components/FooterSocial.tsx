import Facebook from "../assets/Facebook-icon.png";
import Linkedin from "../assets/LinkedIn-icon.png";
import Twitter from "../assets/Twitter-icon.png";
import Youtube from "../assets/Youtube-icon.png";
import Instagram from "../assets/Instagram-icon.png";
import { Link } from "react-router";
import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";

function FooterSocial() {
  const { lang } = useContext(dataContext);

  type imageType = {
    id: string;
    to: string;
    src: string;
    alt: string;
  };

  const socialData: imageType[] = [
    { id: "1", to: "/", src: Facebook, alt: "facebookImage" },
    { id: "2", to: "/", src: Linkedin, alt: "linkedinImage" },
    { id: "3", to: "/", src: Twitter, alt: "twitterImage" },
    { id: "4", to: "/", src: Youtube, alt: "youtubeImage" },
    { id: "5", to: "/", src: Instagram, alt: "instagramImage" },
  ];

  return (
    <section className="w-[75%] m-[0_auto]">
      <h3 className="mb-2.5">
        {lang === "en" ? "Follow us" : "Ακολούθησέ μας"}
      </h3>
      <div className="flex gap-3 mb-7.5">
        {socialData.map((item) => (
          <Link key={item.id} to="/">
            <img
              className="w-5 h-5 cursor-pointer"
              src={item.src}
              alt={item.alt}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FooterSocial;
