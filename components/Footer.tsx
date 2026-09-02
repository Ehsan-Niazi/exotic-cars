import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const navigation = [
  {
    title: "Explore",
    links: [
      { label: "Browse Cars", href: "/shop" },
      { label: "Brand New Cars", href: "/shop?condition=New" },
      { label: "SUVs", href: "/shop?bodyType=SUV" },
      { label: "Electric Cars", href: "/shop?fuel=Electric" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Buying Guide", href: "/articles?category=Buying%20Guides" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact", href: "/about-us#visit" },
    ],
  },
  {
    title: "Services",
    links: [{ label: "Sell Your Car", href: "/sell" }],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="border-t-2 bg-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 sm:gap-14 sm:py-16 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-20">
          <div className="flex flex-col justify-between">
            <div>
              <Link href="/" className="group inline-block">
                <div className="flex items-baseline tracking-[-0.04em]">
                  <span className="text-[20px] sm:text-[23px] font-semibold">EXOTIC</span>

                  <span className="ml-2 text-[20px] sm:text-[23px] font-light">CARS</span>

                  <span className="ml-2 text-[20px] sm:text-[23px] font-semibold">HUB</span>
                </div>

                <div className="mt-1 h-px w-20 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>

              <p className="mt-7 max-w-xs text-[13px] leading-6">
                A refined destination for discovering exceptional cars, trusted
                sellers, and remarkable driving experiences.
              </p>

              <Link
                href="/shop"
                className="
                  group mt-8 inline-flex items-center gap-2
                  text-sm font-medium
                  transition-colors
                  hover:text-primary
                "
              >
                <Search className="h-4 w-4" />

                <span>Explore our collection</span>

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full
                      border border-border
                      transition-all duration-300
                      hover:border-primary
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-12">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.18em] text-foreground">
                  {section.title}
                </h3>

                <ul className="mt-6 space-y-3.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="
                          text-[13px]
                          transition-colors duration-200
                          hover:text-primary
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-y flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium">
              Have something exceptional to sell?
            </p>

            <p className="mt-1.5 text-xs">
              List your vehicle and connect with qualified buyers.
            </p>
          </div>

          <Link
            href="/sell"
            className="
                group inline-flex items-center gap-2
                text-sm font-medium
                transition-colors
                hover:text-primary
              "
          >
            Sell your car
            <ArrowRight
              className="
                  h-4 w-4
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
            />
          </Link>
        </div>

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px]">
            © {new Date().getFullYear()} Exotic Cars Hub. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="
                text-[11px]
                transition-colors
                hover:text-primary
              "
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="
                text-[11px]
                transition-colors
                hover:text-primary
              "
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="
                text-[11px]
                transition-colors
                hover:text-primary
              "
            >
              Cookies
            </Link>

            <Link
              href="/accessibility"
              className="
                text-[11px]
                transition-colors
                hover:text-primary
              "
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
