"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import Link from "next/link";
import bright_logo from "../../../public/logo_main.svg";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={bright_logo}
                alt="bright arc"
                width={168}
                height={68}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/service-1"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Service 1</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/service-2"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Service 2</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Blogs & Insights
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/blogs/blog-1"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Blog 1</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/blogs/blog-2"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Blog 2</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/success-stories" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Success Stories
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Tablet CTA Buttons */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Button
              variant="outline"
              className="text-primary-600 border-primary-600 hover:bg-primary-50"
            >
              Get a demo
            </Button>
            <Button className="bg-primary-600 hover:bg-primary-700 text-white">
              Start your free trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold text-sm">B</span>
                    </div>
                    <SheetTitle className="text-xl font-semibold text-gray-900">
                      Bright Arc
                    </SheetTitle>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </SheetHeader>

                <div className="flex flex-col space-y-4 mt-6">
                  {/* Mobile Navigation Links */}
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-900 hover:text-primary-600"
                      asChild
                    >
                      <Link href="/about">About Us</Link>
                    </Button>

                    <Collapsible
                      open={servicesOpen}
                      onOpenChange={setServicesOpen}
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-gray-700 hover:text-primary-600"
                        >
                          Services
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              servicesOpen && "rotate-180"
                            )}
                          />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 ml-4">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm text-gray-600"
                          asChild
                        >
                          <Link href="/services/service-1">Service 1</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm text-gray-600"
                          asChild
                        >
                          <Link href="/services/service-2">Service 2</Link>
                        </Button>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible open={blogsOpen} onOpenChange={setBlogsOpen}>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-gray-700 hover:text-primary-600"
                        >
                          Blogs & Insights
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              blogsOpen && "rotate-180"
                            )}
                          />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 ml-4">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm text-gray-600"
                          asChild
                        >
                          <Link href="/blogs/blog-1">Blog 1</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm text-gray-600"
                          asChild
                        >
                          <Link href="/blogs/blog-2">Blog 2</Link>
                        </Button>
                      </CollapsibleContent>
                    </Collapsible>

                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-700 hover:text-primary-600"
                      asChild
                    >
                      <Link href="/success-stories">Success Stories</Link>
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-700 hover:text-primary-600"
                      asChild
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="flex space-x-4 pt-4 border-t">
                    <Button
                      variant="outline"
                      className="flex-1 text-primary-600 border-primary-600"
                    >
                      Get a demo
                    </Button>
                    <Button className="flex-1 bg-primary-600 text-white">
                      Start your free trial
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
