import React from "react";

function page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-200">
      <div className="absolute top-8 left-8 text-2xl font-bold">
        <span className="bg-white text-black p-1 rounded text-bold">
          YOUR.PUBG
        </span>
      </div>
      <div className="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-md shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-4">로그인</h2>
        <p className="text-center mb-6">
          모든 게이머들을 위한 OP.GG 멤버 커뮤니티에 오신 것을 환영합니다.
        </p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="이메일 주소"
              className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            이메일로 시작하기
          </button>
        </form>
        <div className="my-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            일회용 코드로 로그인하기
          </a>
        </div>
        <div className="text-center mb-4">OR</div>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full">
            <img src="/apple-icon.png" alt="Apple" className="w-6 h-6" />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full">
            <img src="/google-icon.png" alt="Google" className="w-6 h-6" />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full">
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full">
            <img src="/discord-icon.png" alt="Discord" className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-6 text-center">
          <p>
            아직 OP.GG Member가 아니신가요?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              회원가입
            </a>
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 text-center">
        <a href="#" className="text-sm text-gray-400 hover:underline mx-2">
          이용약관
        </a>
        <a href="#" className="text-sm text-gray-400 hover:underline mx-2">
          개인정보처리방침
        </a>
      </div>
    </div>
  );
}

export default page;
