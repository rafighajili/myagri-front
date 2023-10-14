"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClickAway, useToggle, useWindowSize } from "@uidotdev/usehooks";
import { IconButton } from "#/lib";
import { Menu2, Moon, Sun, X } from "tabler-icons-react";
import { useTheme } from "next-themes";

const navLinks: { name: string; link: string }[] = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Prediction",
    link: "prediction",
  },
  {
    name: "Soil",
    link: "soil",
  },
  {
    name: "Devices",
    link: "devices",
  },
  {
    name: "Elqa",
    link: "elqa",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { width } = useWindowSize();
  const isLargeScreen = !!width && width > 1024;
  const [isNavOpen, toggleNav] = useToggle();
  const ref: any = useClickAway(() => toggleNav(false));
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  return (
    <nav ref={ref} className="sticky inset-x-0 top-0 bg-dual">
      <div className="container relative flex h-16 items-center gap-x-2 lg:gap-x-4">
        <span className="font-bold text-xl text-primary-500 mr-auto">
          MyAgri
        </span>

        <ul
          className={`flex items-center ${
            isLargeScreen
              ? "gap-x-8"
              : `absolute right-4 top-[calc(100%+1rem)] flex-col w-48 gap-y-4 rounded-lg p-4 bg-dual duration-200 ${
                  !isNavOpen
                    ? "pointer-events-none -translate-x-16 opacity-0"
                    : ""
                }`
          }`}
        >
          {navLinks.map(({ name, link }) => (
            <li key={name}>
              <Link
                href={"/" + link}
                onClick={() => toggleNav(false)}
                className={`
                  text-sm font-medium duration-200 ${
                    pathname.replace("/", "") === link
                      ? "text-primary-500"
                      : "hover:text-secondary-500"
                  }
                `}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <IconButton
          variant="ghost"
          color="black-white"
          fullRounded
          onPress={() => setTheme(isDarkTheme ? "light" : "dark")}
        >
          {isDarkTheme ? <Moon /> : <Sun />}
        </IconButton>

        {!isLargeScreen && (
          <IconButton variant="outlined" onPress={() => toggleNav()}>
            {isNavOpen ? <X /> : <Menu2 />}
          </IconButton>
        )}
      </div>
    </nav>
  );
}
