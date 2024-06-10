"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { parseFullName } from "parse-full-name";
import React from "react";
import { SiBuymeacoffee } from "react-icons/si";
import Image from "next/image";

const Header = ({ session }: { session: Session | null }) => {
  const name = session?.user?.name;
  const { first } = parseFullName(name as string);
  const tempUsername = session?.user?.email;
  return (
    <header className="bg-white">
      <div className="max-w-2xl flex justify-between items-center mx-auto px-4 py-4">
        <Link href={"/"} className="inline-flex items-center gap-1">
          <SiBuymeacoffee size={25} />
          <span className="mt-1">Buy me a coffee</span>
        </Link>
        <nav className="flex gap-6 items-center mt-1">
          <Link href={"/about"}>About</Link>
          <Link href={"/about"}>FAQ</Link>
          <Link href={"/about"}>Contact</Link>
          <div className="flex gap-2">
            {session && (
              <div className="">
                {" "}
                <Link
                  href={"/profile/" + tempUsername}
                  className="flex items-center gap-2 rounded-full p-1 pr-6 bg-yellow-300  hover:bg-yellow-400"
                >
                  <Image
                    src={session?.user?.image as string}
                    alt="avatar"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />{" "}
                  {first}
                </Link>{" "}
              </div>
            )}
            {!session && (
              <>
                <button
                  className="border-2 rounded-full px-4 py-2 ml-2"
                  onClick={() => signIn("google")}
                >
                  Login
                </button>
                <button className="bg-yellow-300 rounded-full px-4 py-2 hover:opacity-80">
                  Sign up
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
