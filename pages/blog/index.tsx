import { GetStaticProps, NextPage } from "next";
import { getAllPosts } from "../../lib/api";

interface Props {
  posts: ({ slug?: string; title?: string } | null)[];
}

const Page: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <ol>
        {posts.map((S) => (
          <li key={S?.slug}>
            <a href={`/blog/${S?.slug}`}>{S?.title}</a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const posts = getAllPosts(["slug", "title"]);

  return { props: { posts } };
};

export default Page;
