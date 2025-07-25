"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import bright_logo from "../../../public/logo_main.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="flex h-16 items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={bright_logo || "/placeholder.svg"}
            alt="bright arc"
            width={100}
            height={34}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4 bg-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/about-us">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className=" bg-white">
                  <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/our-services"
                        >
                          <div className="text-lg font-medium">
                            Our Services
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Comprehensive digital solutions tailored to you
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/our-services#mentorship"
                      title="Mentorship"
                    />
                    <ListItem
                      href="/our-services#leadership"
                      title="Leadership"
                    />
                    <ListItem
                      href="/our-services#consulting"
                      title="Consulting"
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Blogs & Insights</NavigationMenuTrigger>
                <NavigationMenuContent className=" bg-white">
                  <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/blogs"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Latest Insights
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Stay updated with the latest trends and insights.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/blogs" title="Mentorship" />
                    <ListItem href="/blogs" title="Consulting" />
                    <ListItem href="/blogs" title="Thought Leadership" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/success-stories">Success Stories</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/contact-us">Contact Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <div role="button" className="lg:hidden">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Open Menu</span>
              </div>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:max-w-sm">
              <SheetHeader className="pb-4 mb-4">
                <SheetTitle className="flex items-center">
                  <Image
                    src={bright_logo || "/placeholder.svg"}
                    alt="bright arc"
                    width={100}
                    height={34}
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                <Link
                  href="/about-us"
                  className="px-2 py-1 text-lg font-medium hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <div className="px-2 py-1">
                  <div className="flex items-center justify-between text-lg font-medium">
                    <Link
                      href="/our-services"
                      className="hover:text-primary-600 transition-colors"
                    >
                      Services
                    </Link>
                  </div>
                </div>
                <div className="px-2 py-1">
                  <div className="flex items-center justify-between text-lg font-medium">
                    <Link
                      href="/blogs"
                      className="hover:text-primary-600 transition-colors"
                    >
                      Blogs & Insights
                    </Link>
                  </div>
                </div>
                <Link
                  href="/success-stories"
                  className="px-2 py-1 text-lg font-medium hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  href="/contact-us"
                  className="px-2 py-1 text-lg font-medium hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
