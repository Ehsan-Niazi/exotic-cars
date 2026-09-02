"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import AuthButton from "./auth/AuthButton";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    {
      path: "/shop",
      label: "Shop",
      dropdown: [
        { path: "/shop?condition=New", label: "New Cars" },
        { path: "/shop?condition=Used", label: "Used Cars" },
        { path: "/shop?condition=Certified", label: "Certified Cars" },
      ],
    },
    { path: "/articles", label: "Articles" },
    { path: "/about-us", label: "About Us" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  useEffect(() => {
    setMobileOpen(false);
    setMobileShopOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-50">
      <nav className="bg-white text-foreground shadow-sm h-19">
        <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0" aria-label="Exotic Cars Hub home">
            <Image
              src="/logoMain.jpg"
              alt="Exotic Cars Hub logo"
              width={250}
              height={140}
              className="h-auto w-40 sm:w-48 lg:w-52"
              loading="eager"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
              >
                <Link
                  href={item.path}
                  className={`relative flex items-center gap-1 py-3 text-base font-normal transition-colors hover:text-red-700 ${
                    isActive(item.path) ? "font-extrabold text-red-700" : ""
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {item.dropdown && isDropdownOpen && (
                  <div className="absolute left-0 top-full z-50 min-w-52 rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        href={dropdownItem.path}
                        className={`block px-4 py-2.5 text-sm transition-colors hover:bg-red-50 hover:text-red-700 ${
                          isActive(dropdownItem.path)
                            ? "bg-red-50 font-bold text-red-700"
                            : ""
                        }`}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <AuthButton />
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-foreground/10 bg-white px-4 pb-5 pt-2 sm:px-6"
          >
            <div className="mx-auto max-w-7xl">
              <div className="space-y-1">
                {navItems.map((item) => {
                  if (!item.dropdown) {
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`block rounded-xl px-3 py-3 text-base transition-colors ${
                          isActive(item.path)
                            ? "bg-red-50 font-semibold text-red-700"
                            : "hover:bg-foreground/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={item.path} className="rounded-xl">
                      <div className="flex items-center">
                        <Link
                          href={item.path}
                          className={`flex-1 rounded-l-xl px-3 py-3 text-base transition-colors ${
                            isActive(item.path)
                              ? "font-semibold text-red-700"
                              : "hover:bg-foreground/5"
                          }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileShopOpen((open) => !open)}
                          aria-expanded={mobileShopOpen}
                          aria-label="Toggle Shop menu"
                          className="rounded-r-xl px-4 py-3 hover:bg-foreground/5"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${mobileShopOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>

                      {mobileShopOpen && (
                        <div className="mb-1 ml-3 border-l border-foreground/10 pl-3">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              href={dropdownItem.path}
                              className="block rounded-lg px-3 py-2.5 text-sm text-foreground/70 hover:bg-foreground/5 hover:text-primary"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-foreground/10 pt-4">
                <AuthButton />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
