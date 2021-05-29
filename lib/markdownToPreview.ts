import remark from "remark";
import html from "remark-html";
const strip = require("remark-strip-html");

export default async function markdownToPreview(markdown: string) {
  const result = await remark().use(html).process(markdown);
  const preview = result.toString().match(/<p>(.*?)<\/p>/g);
  const strips = await remark()
    .use(strip)
    .process(preview?.join("") ?? "");
  return String(strips).substring(0, 1000);
}
