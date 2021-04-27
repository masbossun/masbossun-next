import { FC } from "react";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="text-black-primary dark:text-white-primary my-20 max-w-page-title">
          As a software developer, ryan does his works with passion
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WorkImages>
            <img
              src="/images/works/works-rekber.png"
              alt="rekber"
              srcSet="/images/works/works-rekber.png, /images/works/works-rekber@2x.png 2x, /images/works/works-rekber@3x.png 3x"
            />
          </WorkImages>
          <WorkImages>
            <img
              src="/images/works/works-winsen.png"
              alt="winsen"
              srcSet="/images/works/works-winsen.png, /images/works/works-winsen@2x.png 2x, /images/works/works-winsen@3x.png 3x"
            />
          </WorkImages>
          <WorkImages>
            <img
              src="/images/works/works-bukom-digital.png"
              alt="bukom-digital"
              srcSet="/images/works/works-bukom-digital.png, /images/works/works-bukom-digital@2x.png 2x, /images/works/works-bukom-digital@3x.png 3x"
            />
          </WorkImages>
          <WorkImages>
            <img
              src="/images/works/works-hijrah.png"
              alt="hijrah"
              srcSet="/images/works/works-hijrah.png, /images/works/works-hijrah@2x.png 2x, /images/works/works-hijrah@3x.png 3x"
            />
          </WorkImages>
        </div>
        <div className="my-20 prose md:prose-lg dark:prose-dark max-w-none">
          <p>
            His name is Ryan Setiagi, he currently working as a fulltime mobile
            developer at <a href="https://rukita.co">rukita</a>. basically he
            does frontend development for web and also for mobile app. he quite
            familiar with react environment such as{" "}
            <a href="https://reactjs.org">react js</a> and{" "}
            <a href="https://reactnative.dev">react native</a>. not tied to
            exact same development or environment, he can explore another
            frameworks and works with it if needed.
          </p>
          <p>
            He has been falling in love with programming since he was at
            college, and coding is how he express his feelings. In the mean
            time, he wrote some stuff on his blog. Just to keep his memory
            sharp, in case he need it in the future. he has a great interests to
            learning and building something new. If you intersted, feel free to
            contact him.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

const WorkImages: FC = ({ children }) => {
  return (
    <div className="aspect-w-1 aspect-h-1 bg-white-secondary dark:bg-black-secondary">
      {children}
    </div>
  );
};
