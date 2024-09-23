
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './navlink.scss'

const NavLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
  const path = usePathname();

  // Check if the current pathname ends with the href to determine if the link is active
  const isActive = path.endsWith(href);

  return (
    <Link href={href} className={` navlink ${isActive ? 'nav-active' : ''}`}>
      {children}
    </Link>
  );
};

export default NavLink;
