import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

type Fields = "slug" | "content" | "date" | "author" | "title";

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(
  slug: string | string[] | undefined,
  fields: Fields[]
) {
  if (!!slug && typeof slug === "string") {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    let item: { [K in Fields]?: string } = {};

    for (const prop in data) {
      if (fields.includes(prop as Fields)) {
        item = { ...item, [prop]: data[prop] };
      }
    }

    if (fields.includes("content")) {
      item = { ...item, content };
    }

    return item;
  }

  // TOOD: handle undefined and string[]
  return null;
}

export function getAllPosts(fields: Fields[]) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1?.date! > post2?.date! ? -1 : 1));
  return posts;
}
