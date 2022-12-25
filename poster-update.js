/* eslint-disable no-console */
const inquirer = require("inquirer");
const fs = require("fs");
const prettier = require("prettier");
const { join } = require("path");
const matter = require("gray-matter");

const postsDirectory = join(process.cwd(), "_posts");
const args = process.argv;
const slugInput = args[2];

async function getPostBySlug(slug, fields) {
  if (!!slug && typeof slug === "string") {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    let item = {};

    for (const prop in data) {
      if (fields.includes(prop)) {
        item = { ...item, [prop]: data[prop] };
      }
    }

    if (fields.includes("content")) {
      item = { ...item, content: content };
    }

    return item;
  }

  return null;
}

async function PosterUpdate() {
  try {
    const currentData = await getPostBySlug(slugInput, [
      "title",
      "author",
      "preview",
      "date",
      "content",
    ]);

    const TITLE = "Post title";
    const AUTHOR = "Post author";
    const ASK_PREVIEW_UPDATE = "Update the preview?";
    const ASK_DATE_UPDATE = "Update the date?";
    const PREVIEW = "Post preview";
    const DATE = "Post date (YYYY-MM-DD)";
    const answer = await inquirer.prompt([
      { type: "input", name: TITLE, default: currentData.title },
      { type: "input", name: AUTHOR, default: currentData.author },
      { type: "confirm", name: ASK_PREVIEW_UPDATE, default: false },
      {
        type: "input",
        name: PREVIEW,
        when: (current) => {
          return current[ASK_PREVIEW_UPDATE];
        },
        default: currentData.preview,
      },
      { type: "confirm", name: ASK_DATE_UPDATE, default: false },
      {
        type: "input",
        name: DATE,
        when: (current) => {
          return current[ASK_DATE_UPDATE];
        },
        default: currentData.date,
      },
    ]);

    const title = answer[TITLE];
    const author = answer[AUTHOR];
    const preview = answer[PREVIEW] ?? currentData.preview ?? "";
    const rawDate = answer[DATE] ?? currentData.date;
    const date = rawDate
      ? new Date(rawDate).toISOString()
      : new Date().toISOString();

    const slug = title
      .replace(/\s/g, "-")
      .replace(/[^a-z0-9-]/gi, "_")
      .toLowerCase();
    const git = `https://github.com/masbossun/masbossun-next/blob/main/_posts/${slug}.mdx`;
    const currentContent = currentData.content;

    const content = `---\ntitle: ${title}\ndate: "${date}"\nslug: ${slug}\nauthor: ${author}\ngit: ${git}\npreview: ${preview}\n---\n\n${currentContent}`;

    const contentPretty = prettier.format(content, { parser: "markdown" });

    fs.writeFile(`_posts/${slug}.mdx`, contentPretty, "utf8", (err) => {
      if (err) throw err;
      console.log(`"${title}" has been modified`);
    });

    console.log({ title, author, slug, date, git, preview });
  } catch (error) {
    console.log({ error });
  }
}

PosterUpdate();
