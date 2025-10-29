"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize font-medium transition-all duration-300 hover:text-accent ${
            pathname === link.path ? "text-accent" : "text-white/80"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
