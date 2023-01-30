import Link from "next/link";
import Button from "./Button";

const LINKS = [
  {
    name: "אודות",
    link: "/about",
  },
  {
    name: "עגלות קפה",
    link: "/food-truck",
  },
  {
    name: "מפה",
    link: "/map",
  },
  {
    name: "בית",
    link: "/",
  },
];
export default function Navbar() {
  return (
    <header className="bg-background">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex items-center mb-4 md:mb-0">
          <span>LOGO HERE</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {LINKS.map((link) => (
            <Link
              className="mr-5 text-text-title hover:text-text-brown font-semibold"
              href={link.link}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Button text="הוספת עגלת קפה" showArrow />
      </div>
    </header>
  );
}
