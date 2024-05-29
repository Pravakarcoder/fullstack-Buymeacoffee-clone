import Link from "next/link";
import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

const Header = () => {
  return (
    <header className="mb-16">
      <div className="max-w-2xl flex justify-between items-center mx-auto px-4 py-4">
        <Link href={"/"} className="inline-flex items-center gap-1">
          <SiBuymeacoffee size={25} />
          <span className="mt-1">Buy me a coffce</span>
        </Link>
        <nav className="flex gap-6 items-center mt-1">
          <Link href={"/about"}>About</Link>
          <Link href={"/about"}>FAQ</Link>
          <Link href={"/about"}>Contact</Link>
          <div className="flex gap-2">
            <button className="border-2 rounded-full px-4 py-2 ml-2">
              Login
            </button>
            <button className="bg-yellow-300 rounded-full px-4 py-2">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
