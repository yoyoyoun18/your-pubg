// app/components/Profile.tsx

"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && session.user) {
      console.log(session.user);
    }
  }, [session]);

  if (session && session.user) {
    return (
      <div className="flex items-center space-x-4">
        <p>안녕하세요, {session.user.name}님!</p>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white py-2 px-4 rounded font-SBAggro"
        >
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => router.push("/api/auth/signin")}
      className="bg-[#424254] text-white py-2 px-4 rounded font-SBAggro"
    >
      로그인
    </button>
  );
}
