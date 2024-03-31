"use client";

import MenuContent from "@/constants/Menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <header className="flex justify-between px-8 h-16 items-center fixed inset-x-0 top-0 bg-white">
      <Link href="/" className="flex gap-2">
        <Image src="/image/logo.png" width={40} height={30} alt="" />
        <h1 className="text-xl font-extrabold text-ewhagreen">EWHA-CHAIN</h1>
      </Link>
      <nav className="flex font-medium gap-8">
        {MenuContent.map((menu) => (
          <Link key={menu.page} href={menu.link} className="">
            {path === menu.link ? (
              <h5 className="font-bold">{menu.page}</h5>
            ) : (
              <h5>{menu.page}</h5>
            )}
          </Link>
        ))}
      </nav>
    </header>
  );
}
