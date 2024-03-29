import Head from "next/head";
import { FC } from "react";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";
import Tags from "../components/tags";

export default function Home() {
  return (
    <>
      <Head>
        <title>masbossun dev</title>
        <Tags
          desciption="ryan's personal website"
          image={"/images/banner_bossun.jpeg"}
          title="masbossun dev"
          url="https://www.masbossun.dev"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
          As a software developer, ryan does his works with passion
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <WorkImages href="/work/winsen-xyz">
            <img
              src="/images/works/works-winsen.webp"
              alt="winsen"
              srcSet="/images/works/works-winsen.webp, /images/works/works-winsen@2x.webp 2x, /images/works/works-winsen@3x.webp 3x"
              className="h-full"
            />
          </WorkImages>
          <WorkImages href="/work/rekber-app">
            <img
              src="/images/works/works-rekber.webp"
              alt="rekber"
              srcSet="/images/works/works-rekber.webp, /images/works/works-rekber@2x.webp 2x, /images/works/works-rekber@3x.webp 3x"
              className="h-full"
            />
          </WorkImages>
          <WorkImages href="/work/waruung-app">
            <img
              src="/images/works/works-waruung.webp"
              alt="bukom-digital"
              srcSet="/images/works/works-waruung.webp, /images/works/works-waruung@2x.webp 2x, /images/works/works-waruung@3x.webp 3x"
              className="h-full"
            />
          </WorkImages>
          <WorkImages href="/work/hijrah-app">
            <img
              src="/images/works/works-hijrah.webp"
              alt="hijrah"
              srcSet="/images/works/works-hijrah.webp, /images/works/works-hijrah@2x.webp 2x, /images/works/works-hijrah@3x.webp 3x"
              className="h-full"
            />
          </WorkImages>
        </div>
        <div className="my-20 md:my-40 prose md:prose-lg dark:prose-dark max-w-none">
          <p>
            Ryan is a full-time mobile developer at{" "}
            <a href="https://rukita.co">rukita</a>, where he specializes in
            frontend development for the web and mobile app using{" "}
            <a href="https://reactjs.org">react js</a> and{" "}
            <a href="https://reactnative.dev">react native</a>. He is proficient
            in these frameworks and is also able to learn and work with other
            technologies as needed.
          </p>
          <p>
            In his spare time, Ryan maintains a <a href="/blog">blog</a> where
            he writes about various topics to keep his skills sharp. He is
            constantly seeking new opportunities to learn and build new things.
            If you have an interesting project or idea that you&apos;d like to
            discuss with him, don&apos;t hesitate to reach out to him.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

const WorkImages: FC<{ href: string }> = ({ children, href }) => {
  return (
    <a href={href} className="group">
      <div className="aspect-w-1 aspect-h-1 bg-white-secondary dark:bg-black-secondary overflow-hidden transition duration-700 ease-out group-hover:bg-accent-primary dark:group-hover:bg-accent-secondary">
        <div className="transform transition duration-1000 ease-out group-hover:scale-105 group-hover:translate-x-3 group-hover:-translate-y-1">
          {children}
        </div>
      </div>
    </a>
  );
};
