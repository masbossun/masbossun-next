import Head from "next/head";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>contacts — masbossun.dev</title>
      </Head>
      <header>
        <Navbar />
      </header>

      <main style={{ minHeight: "50vh" }}>
        <h1 className="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
          Keep in touch
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <span>email: setiagi.ryan@gmail.com</span>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contacts;
