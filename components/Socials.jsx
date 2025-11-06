import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/cyprian-c" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/cyprian-ocharo" },
    { icon: <FaTwitter />, path: "https://x.com/cyprianocharo" },
    { icon: <FaInstagram />, path: "https://instagram.com/_ocharo"},

]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;