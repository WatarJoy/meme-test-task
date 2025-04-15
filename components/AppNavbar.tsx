"use client";

import { Link } from "@heroui/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { siteConfig } from "@/config/site";
export const AppNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>Memes</NavbarBrand>
      <NavbarContent>
        <ul className="flex items-center justify-between px-4 py-2 gap-[15px]">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
    </Navbar>
  );
};
