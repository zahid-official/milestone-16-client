import React from "react";

import { useState } from "react";
import { BookOpen, Home, Library, Plus, Menu, ChartColumn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router";
import ModeToggler from "../themes/ModeToggler";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Library, label: "All Books", href: "/books" },
    { icon: Plus, label: "Add Book", href: "/create-book" },
    { icon: ChartColumn, label: "Borrow Summary", href: "/borrow-summary" },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-6">
      <div className="flex h-18 items-center justify-between">
        {/* logo */}
        <Link to={"/"}>
          <div className="flex items-center space-x-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-black hover:text-white cursor-pointer text-black dark:text-white dark:hover:bg-gray-400 dark:hover:text-black transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] border will-change-transform transform-gpu origin-center">
              <BookOpen className="h-7 w-7" />
            </div>
            <span className="font-bold text-3xl sm:inline-block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Shelfy
            </span>
          </div>
        </Link>

        {/* navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems?.map((item, index) => (
            <Link key={item.label} to={item.href}>
              <Button
                variant="ghost"
                size="default"
                className="relative h-10 cursor-pointer px-3 text-base font-medium transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-accent hover:text-accent-foreground hover:scale-105 group will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationDuration: "400ms",
                  animationFillMode: "both",
                }}
              >
                {React.createElement(item.icon, {
                  className:
                    "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110 will-change-transform transform-gpu origin-center",
                })}
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* right side */}
        <div className="flex items-center">
          {/* theme toggle */}
          <div className="cursor-pointer">
            <ModeToggler></ModeToggler>
          </div>

          {/* mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 md:hidden border text-7xl transition-all duration-300 hover:bg-accent hover:scale-110 active:scale-95"
              >
                <Menu className="h-10 w-10 transition-transform duration-300" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* content */}
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex px-4 items-center space-x-2 pb-6 border-b animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-3xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Shelfy
                  </span>
                </div>

                <div className="flex flex-col gap-3.5 px-4">
                  {navItems.map((item, index) => (
                    <Link to={item.href}>
                      <Button
                        key={item.label}
                        variant="ghost"
                        size="default"
                        className="relative w-full justify-start cursor-pointer px-4 text-base font-medium transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-accent hover:text-accent-foreground hover:scale-105 group will-change-transform transform-gpu animate-in fade-in slide-in-from-top-2 origin-center"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animationDuration: "400ms",
                          animationFillMode: "both",
                        }}
                      >
                        {React.createElement(item.icon, {
                          className:
                            "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110 will-change-transform transform-gpu origin-center",
                        })}
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
