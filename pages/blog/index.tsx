import { format, parseISO } from "date-fns";
import { GetStaticProps, NextPage } from "next";
import { FC } from "react";
import { Footer } from "../../components/footer";
import Navbar from "../../components/navbar";
import { getAllPosts } from "../../lib/api";
import markdownToText from "../../lib/markdownToText";

interface Props {
  posts: ({
    slug?: string;
    title?: string;
    author?: string;
    date?: string;
    preview?: string;
  } | null)[];
}

const Page: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
          Ryan usually wrote something here, blog, article, etc, you name it
        </h1>
        <ol>
          {posts.map((S) => (
            <div key={S?.slug}>
              <BlogPost
                title={S?.title}
                author={S?.author}
                date={S?.date}
                href={`/blog/${S?.slug}`}
                preview={S?.preview}
              />
              <div className="h-0.5 w-full bg-white-secondary dark:bg-black-secondary" />
            </div>
          ))}
        </ol>
      </main>
      <div className="h-16" />
      <Footer />
    </>
  );
};

const BlogPost: FC<{
  href: Maybe<string>;
  title: Maybe<string>;
  author: Maybe<string>;
  date: Maybe<string>;
  preview: Maybe<string>;
}> = ({ href, title, author, date, preview }) => {
  return (
    <li className="py-10">
      <a
        href={href ?? "#"}
        className="text-black-primary dark:text-white-primary"
      >
        <h3>{title}</h3>
      </a>
      <div className="h-2" />
      <span className="text-black-primary dark:text-white-primary font-monospace font-medium text-xs opacity-50">
        {format(date ? parseISO(date) : new Date(), "d/M/yyyy")} by {author}
      </span>
      <div className="h-6" />
      <p className="text-black-primary dark:text-white-primary max-w-prose line-clamp-6">
        {preview}
      </p>
      <div className="h-6" />
      <a href={href ?? "#"}>
        <div className="inline-flex bg-accent-primary dark:bg-accent-secondary text-black-primary dark:text-white-primary py-3 px-4 rounded-none font-monospace font-medium text-sm">
          read more
        </div>
      </a>
    </li>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await Promise.all(
    getAllPosts(["slug", "title", "date", "author", "preview"]).map(
      async (S) => ({
        ...S,
        preview: await markdownToText(S?.preview ?? ""),
      })
    )
  );

  return { props: { posts } };
};

export default Page;
