"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/training", label: "Training" },
  { href: "/statistics", label: "Statistics" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Training Tracker
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {links.map((link) => (
                <Button
                  key={link.href}
                  variant={pathname === link.href ? "default" : "ghost"}
                  asChild
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;