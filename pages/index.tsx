import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <main>
        <h1 className="text-black-primary dark:text-white-primary max-w-page-title">
          As a software developer, ryan does his works with passion
        </h1>
      </main>

      <footer></footer>
    </>
  );
}
