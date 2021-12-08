import type { GetStaticProps, NextPage } from "next";
import { getAllWorks, getWorksBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHTML";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import { Footer } from "../../components/footer";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import Tags from "../../components/tags";

interface Props {
  post: {
    title?: string;
    slug?: string;
    content?: string;
    category?: string;
    mdxSource?: any;
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
        <title>{post.title} - masbossun.dev</title>
        <Tags
          desciption="the work that ryan has been doing lately"
          image={"/images/banner_bossun.jpeg"}
          title={`${post.title} - masbossun.dev`}
          url={`https://www.masbossun.dev/work/${post.slug}`}
        />
      </Head>
      <Navbar />
      <h1 className="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
        {post.title}
      </h1>
      <span className="text-black-primary dark:text-white-primary font-monospace font-medium text-xs opacity-50">
        {post?.category}
      </span>
      <div className="prose md:prose-lg dark:prose-dark max-w-none my-8">
        <MDXRemote {...post.mdxSource} />
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const work = await getWorksBySlug(params?.slug, [
    "title",
    "slug",
    "content",
    "category",
  ]);
  const content = await markdownToHtml(work?.content ?? "");

  return { props: { post: { ...work, content } } };
};

export const getStaticPaths = async () => {
  const works = await getAllWorks(["slug"]);

  return {
    paths: works.map((S) => ({ params: { slug: S?.slug ?? "lost" } })),
    fallback: false,
  };
};

export default Page;
