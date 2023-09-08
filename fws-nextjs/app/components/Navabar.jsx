"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { FWSIcon } from "./FWSIcon";
import Image from "next/image";

export default function Navabar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Web Services",
    "Clients Feedback",
    "Successful Projects",
    "Get a quote",
    "Tech Stack",
    "FAQ Web Services",
    "Why choose FWS",
    "Contact us",
    "What happens next?",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#features">Features</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#customers" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#integrations">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent style={{ position: 'relative', zIndex: 100 }} justify="end">
  
        <FWSIcon />
    
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
