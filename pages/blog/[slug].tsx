import type { GetStaticProps, NextPage } from "next";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHTML";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import { format, parseISO } from "date-fns";
import { Footer } from "../../components/footer";
import Head from "next/head";

interface Props {
  post: {
    title?: string;
    date?: string;
    slug?: string;
    author?: string;
    content?: string;
    git?: string;
  };
  morePosts: any;
  preview: any;
}

const Page: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{post.title} - masbossun</title>
      </Head>
      <Navbar />
      <h1 className="text-black-primary dark:text-white-primary my-20 max-w-page-title">
        {post.title}
      </h1>
      <span className="text-black-primary dark:text-white-primary font-monospace font-medium text-xs opacity-50">
        {format(post.date ? parseISO(post.date) : new Date(), "d/M/yyyy")} by{" "}
        {post.author}
      </span>
      <article
        className="prose md:prose-lg dark:prose-dark max-w-none my-8"
        dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
      />
      <h3 className="text-black-primary dark:text-white-primary my-6 p-6 text-center">
        ***
      </h3>
      <section className="bg-white-secondary dark:bg-black-secondary p-6 -mx-6 md:mx-0 mb-20">
        <p className="text-black-primary dark:text-white-primary font-body">
          If you find any misleading information or grammar issue, feel free to
          make corrections <a href={post.git}>here</a>.
        </p>
      </section>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug, [
    "title",
    "slug",
    "content",
    "author",
    "git",
  ]);
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
