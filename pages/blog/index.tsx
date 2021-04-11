import { GetStaticProps, NextPage } from "next";
import Navbar from "../../components/navbar";
import Socials from "../../components/socials";
import { getAllPosts } from "../../lib/api";

interface Props {
  posts: ({ slug?: string; title?: string } | null)[];
}

const Page: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="text-black-primary dark:text-white-primary">
          Ryan usually wrote something here, blog, article, etc, you name it
        </h1>
        <ol>
          {posts.map((S) => (
            <li key={S?.slug}>
              <a href={`/blog/${S?.slug}`}>{S?.title}</a>
            </li>
          ))}
        </ol>
      </main>
      <footer>
        <Socials />
        <div className="h-6" />
        <span className="flex flex-1 justify-center text-black-primary dark:text-white-primary font-monospace text-xs text-center">
          proudly made by ryan
        </span>
      </footer>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPosts(["slug", "title"]);

  return { props: { posts } };
};

export default Page;
