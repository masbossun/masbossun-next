import type { GetStaticProps, NextPage } from "next";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHTML";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

interface Props {
  post: {
    title?: string;
    date?: string;
    slug?: string;
    author?: string;
    content?: string;
  };
  morePosts: any;
  preview: any;
}

const Page: NextPage<Props> = ({ post, morePosts, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <main>
      <div
        // className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
      />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug, ["title", "slug", "content"]);
  const content = await markdownToHtml(post?.content ?? "");

  return { props: { post: { ...post, content } } };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts(["slug"]);

  return {
    paths: posts.map((S) => ({ params: { slug: S?.slug ?? "lost" } })),
    fallback: false,
  };
};

export default Page;
