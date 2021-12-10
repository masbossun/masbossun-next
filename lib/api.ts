import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const postsDirectory = join(process.cwd(), "_posts");
const worksDirectory = join(process.cwd(), "_works");

type Fields =
  | "slug"
  | "content"
  | "date"
  | "author"
  | "title"
  | "preview"
  | "git";

type WorkFields = "slug" | "content" | "title" | "category";

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(
  slug: string | string[] | undefined,
  fields: Fields[]
) {
  if (!!slug && typeof slug === "string") {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content, {
      mdxOptions: { remarkPlugins: [require("remark-prism")] },
    });

    let item: { [K in Fields]?: string } = {};

    for (const prop in data) {
      if (fields.includes(prop as Fields)) {
        item = { ...item, [prop]: data[prop] };
      }
    }

    if (fields.includes("content")) {
      item = { ...item, content: mdxSource as any };
    }

    if (fields.includes("preview")) {
      item = { ...item, preview: data.preview ?? content };
    }

    return item;
  }

  // TODO: handle undefined and string[]
  return null;
}

export async function getAllPosts(fields: Fields[]) {
  const slugs = getPostSlugs();
  const postsAsync = slugs.map(
    async (slug) => await getPostBySlug(slug, fields)
  );
  const posts = await Promise.all(postsAsync);
  const results = posts.sort((post1, post2) =>
    post1?.date! > post2?.date! ? -1 : 1
  );
  return results;
}

export function getWorkSlugs() {
  return fs.readdirSync(worksDirectory);
}

export async function getWorksBySlug(
  slug: string | string[] | undefined,
  fields: WorkFields[]
) {
  if (!!slug && typeof slug === "string") {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(worksDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content, {
      mdxOptions: { remarkPlugins: [require("remark-prism")] },
    });

    let item: { [K in WorkFields]?: string } = {};

    for (const prop in data) {
      if (fields.includes(prop as WorkFields)) {
        item = { ...item, [prop]: data[prop] };
      }
    }

    if (fields.includes("content")) {
      item = { ...item, content: mdxSource as any };
    }

    return item;
  }

  // TOOD: handle undefined and string[]
  return null;
}

export async function getAllWorks(fields: WorkFields[]) {
  const slugs = getWorkSlugs();
  const works = slugs.map(async (slug) => await getWorksBySlug(slug, fields));
  const result = await Promise.all(works);
  return result;
}
