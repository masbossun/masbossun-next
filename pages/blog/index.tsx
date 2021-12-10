import { format, parseISO } from "date-fns";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { FC } from "react";
import { Footer } from "../../components/footer";
import Navbar from "../../components/navbar";
import Tags from "../../components/tags";
import { getAllPosts } from "../../lib/api";
import markdownToPreview from "../../lib/markdownToPreview";

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
      <Head>
        <title>blog - masbossun.dev</title>
        <Tags
          desciption="ryan usually write something here"
          image={"/images/banner_bossun.jpeg"}
          title={`blog - masbossun.dev`}
          url={`https://www.masbossun.dev/blog/`}
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
          Ryan usually wrote something here, blog, article, etc, you name it
        </h1>
        <ol>
          {posts.map((S, I) => (
            <div key={S?.slug}>
              <BlogPost
                title={S?.title}
                author={S?.author}
                date={S?.date}
                href={`/blog/${S?.slug}`}
                preview={S?.preview}
              />
              {I !== posts.length - 1 ? (
                <div className="h-0.5 w-full bg-white-secondary dark:bg-black-secondary" />
              ) : null}
            </div>
          ))}
        </ol>
      </main>
      <div className="h-24" />
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
      <span className="text-black-primary dark:text-white-primary font-monospace font-medium text-xs opacity-50">
        {format(date ? parseISO(date) : new Date(), "d/M/yyyy")} by {author}
      </span>
      <div className="h-2" />
      <a
        href={href ?? "#"}
        className="text-black-primary dark:text-white-primary"
      >
        <h3>{title}</h3>
      </a>
      <div className="h-6" />
      <p className="text-black-primary dark:text-white-primary max-w-prose line-clamp-2 leading-8">
        {preview}
      </p>
      <div className="h-6" />
      <a href={href ?? "#"}>
        <div className="inline-flex bg-accent-primary dark:bg-accent-secondary text-white-secondary dark:text-white-primary py-3 px-4 rounded-none font-monospace font-medium italic text-sm">
          read more
        </div>
      </a>
    </li>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postsAsync = await getAllPosts([
    "slug",
    "title",
    "date",
    "author",
    "preview",
  ]);
  const posts = await Promise.all(
    postsAsync.map(async (S) => ({
      ...S,
      preview: await markdownToPreview(S?.preview ?? ""),
    }))
  );

  return { props: { posts } };
};

export default Page;
