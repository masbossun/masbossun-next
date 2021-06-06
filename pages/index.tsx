import Head from "next/head";
import { FC } from "react";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>masbossun.dev</title>
        <meta property="og:title" content="masbossun.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.masbossun.dev" />
        <meta property="og:description" content="ryan's personal website" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="@masbossun" />
        <meta property="twitter:title" content="masbossun.dev" />
        <meta
          property="twitter:description"
          content="ryan's personal website"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
          As a software developer, ryan does his works with passion
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WorkImages href="/work/winsen-xyz">
            <img
              src="/images/works/works-winsen.webp"
              alt="winsen"
              srcSet="/images/works/works-winsen.webp, /images/works/works-winsen@2x.webp 2x, /images/works/works-winsen@3x.webp 3x"
            />
          </WorkImages>
          <WorkImages href="/work/rekber-app">
            <img
              src="/images/works/works-rekber.webp"
              alt="rekber"
              srcSet="/images/works/works-rekber.webp, /images/works/works-rekber@2x.webp 2x, /images/works/works-rekber@3x.webp 3x"
            />
          </WorkImages>
          <WorkImages href="/work/waruung-app">
            <img
              src="/images/works/works-waruung.webp"
              alt="bukom-digital"
              srcSet="/images/works/works-waruung.webp, /images/works/works-waruung@2x.webp 2x, /images/works/works-waruung@3x.webp 3x"
            />
          </WorkImages>
          <WorkImages href="/work/quran-app">
            <img
              src="/images/works/works-hijrah.webp"
              alt="hijrah"
              srcSet="/images/works/works-hijrah.webp, /images/works/works-hijrah@2x.webp 2x, /images/works/works-hijrah@3x.webp 3x"
            />
          </WorkImages>
        </div>
        <div className="my-20 md:my-40 prose md:prose-lg dark:prose-dark max-w-none">
          <p>
            His name is Ryan Setiagi, he currently working as a full-time mobile
            developer at <a href="https://rukita.co">rukita</a>. basically, he
            does frontend development for the web and also for mobile app. Quite
            familiar with react environment such as{" "}
            <a href="https://reactjs.org">react js</a> and{" "}
            <a href="https://reactnative.dev">react native</a>. Not tied to
            exact same development or environment, he can explore another
            framework and works with it if needed.
          </p>
          <p>
            For him programming is how he expresses his feelings. In the
            meantime, he wrote some stuff on his <a href="/blog">blog</a>. Just
            to keep his memory sharp, in case he needs it in the future. He has
            a great interest in learning and building something new. If you are
            interested, feel free to <a href="/contacts">contact</a> him.
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
