// app/components/Navbar.tsx

"use client";

import Link from "next/link";
import Profile from "./Profile";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-[#1c1c1f] h-11 w-full items-center px-4">
      <ul className="flex flex-row space-x-4 items-center font-SBAggro">
        <li className="p-4 font-bold">
          <Link href="/">YOUR.PUBG</Link>
        </li>
        <li>
          <Link href="/patch">패치 노트</Link>
        </li>
        <li>
          <Link href="/map">맵</Link>
        </li>
        <li>
          <Link href="/item">아이템 정보</Link>
        </li>
      </ul>
      <div className="ml-auto flex">
        <Profile />
      </div>
    </nav>
  );
}
