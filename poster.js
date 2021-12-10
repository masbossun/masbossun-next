/* eslint-disable no-console */
const inquirer = require("inquirer");
const fs = require("fs");
const prettier = require("prettier");

async function Poster() {
  try {
    const TITLE = "Post title";
    const AUTHOR = "Post author";
    const ASK_PREVIEW = "Write a preview?";
    const PREVIEW = "Post preview";
    const answer = await inquirer.prompt([
      { type: "input", name: TITLE },
      { type: "input", name: AUTHOR },
      { type: "confirm", name: ASK_PREVIEW, default: false },
      {
        type: "input",
        name: PREVIEW,
        when: (current) => {
          return current[ASK_PREVIEW];
        },
      },
    ]);

    const title = answer[TITLE];
    const author = answer[AUTHOR];
    const preview = answer[PREVIEW] ?? "";

    const slug = title.replace(/\s/g, "-").toLowerCase();
    const date = new Date().toISOString();
    const git = `https://github.com/masbossun/masbossun-next/blob/main/_posts/${slug}.mdx`;

    const content = `---\ntitle: ${title}\ndate: "${date}"\nslug: ${slug}\nauthor: ${author}\ngit: ${git}\npreview: ${preview}\n---`;

    const contentPretty = prettier.format(content, { parser: "markdown" });

    fs.writeFile(`_posts/${slug}.mdx`, contentPretty, "utf8", (err) => {
      if (err) throw err;
      console.log(`"${title}" already created`);
    });

    console.log({ title, author, slug, date, git, preview });
  } catch (error) {
    console.log({ error });
  }
}

Poster();
