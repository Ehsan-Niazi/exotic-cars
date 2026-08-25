"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    {
      path: "/shop",
      label: "Shop",
      dropdown: [
        { path: "/shop/new-cars", label: "new cars" },
        { path: "/shop/used-cars", label: "used cars" },
        { path: "/shop/accessories", label: "Accessories" },
      ],
    },
    { path: "/articles", label: "Articles" },
    { path: "/about-us", label: "About Us" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header>
      <nav className="text-foreground bg-white pt-5 pb-5 shadow-sm">
        <ul className="flex flex-row justify-around h-8 items-center text-lg ml-auto mr-auto">
          <li className="mr-auto">
            <Link href={"/"}>
              <Image
                src="/logoMain.jpg"
                alt="exotic cars logo"
                width={250}
                height={100}
                className="w-3xs"
              />
            </Link>
          </li>
          {/* 
           
                height={150}
                className=" w-auto"
              />
            </Link>
          </li> */}
          {navItems.map((item) => (
            <li
              key={item.path}
              className="ml-auto mr-auto relative"
              onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
            >
              <Link
                href={item.path}
                className={`
                  relative  
                  font-normal
                  hover:text-red-700 
                  transition-colors
                  flex items-center gap-1
                  after:block 
                  after:content-[attr(data-text)] 
                  after:font-extrabold 
                  after:invisible 
                  after:h-0 
                  after:overflow-hidden
                  ${isActive(item.path) ? "text-red-700 font-extrabold" : ""}
                `}
                data-text={item.label}
              >
                {item.label}

                {/* Arrow for dropdown items */}
                {item.dropdown && (
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && isDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md min-w-50 py-2 z-50">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.path}
                      href={dropdownItem.path}
                      className={`
                        block px-4 py-2 hover:bg-red-50 hover:text-red-700 transition-colors
                        ${isActive(dropdownItem.path) ? "text-red-700 font-bold bg-red-50" : ""}
                      `}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}

          <li className="ml-auto mr-auto">
            <Link href={"#"} className="hover:text-red-700 transition-colors">
              Sign In / Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
