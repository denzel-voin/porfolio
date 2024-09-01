import Link from "next/link";
import { ILink } from "../../../types/types";

export const NavLinks: ILink[] = [
  {
    title: "Обо мне",
    href: "#about",
  },
  {
    title: "Проекты",
    href: "#projects",
  },
  {
    title: "Контакты",
    href: "#contacts",
  },
];

export const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};
