"use client";

import React, { useEffect, useState } from "react";

function Page() {
  const [articleContent, setArticleContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/api/crawl");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticleContent(data.content);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start bg-[#EAEAEA] h-auto p-8 w-auto ">
      <div className="h-auto bg-white text-black w-[480px] md:w-[680px] mr-0 lg:mr-4 shadow-md mb-4 lg:mb-0 p-4 lg:w-[1028px] overflow-hidden font-SBAggro">
        <div dangerouslySetInnerHTML={{ __html: articleContent }} />
      </div>
    </div>
  );
}

export default Page;
