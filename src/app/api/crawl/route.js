import puppeteer from "puppeteer";

export async function GET(request) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.pubg.com/ko/news/7494?category=patch_notes", {
    waitUntil: "networkidle2",
  });

  const content = await page.evaluate(() => {
    const article = document.querySelector(
      "article.content-template.normalize.news-detail__content-template"
    );
    return article ? article.innerHTML : "";
  });

  await browser.close();

  return new Response(JSON.stringify({ content }), {
    headers: { "Content-Type": "application/json" },
  });
}
