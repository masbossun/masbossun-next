import { FC, useState } from "react";
import { useColorMode } from "../context/colorMode";
import useWindowSize from "../hooks/useWindowSize";
import Icon from "./icon";
import Socials from "./socials";

const Navbar = () => {
  const size = useWindowSize();
  const [isMenuShow, setMenuShow] = useState(false);

  return (
    <nav className="flex flex-row items-center justify-between py-4 relative">
      <NavLogo />
      {size ? (
        size.width >= 640 ? (
          <NavLinks />
        ) : (
          <NavMenuButton
            onClick={() => setMenuShow((e) => !e)}
            isMenuShow={isMenuShow}
          />
        )
      ) : null}
      {isMenuShow ? <NavMenu /> : null}
    </nav>
  );
};

const NavLogo = () => {
  return (
    <a href="/">
      <div className="bg-black-primary dark:bg-white-secondary px-4 py-2">
        <span className="font-monospace font-medium text-base text-white-primary dark:text-black-primary">
          masbossun
        </span>
      </div>
    </a>
  );
};

const NavLinks: FC = () => {
  const { colorMode, setColorMode } = useColorMode();

  const toggleColorMode = () => {
    if (colorMode === "dark") {
      return setColorMode("light");
    }
    return setColorMode("dark");
  };

  return (
    <div className="flex items-center">
      <nav className="py-3 px-4">
        <a
          href="/blog"
          className="font-monospace font-medium text-base leading-4 text-black-primary dark:text-white-primary"
        >
          blog
        </a>
      </nav>
      <nav className="py-3 px-4">
        <a
          href="/works"
          className="font-monospace font-medium text-base leading-4 text-black-primary dark:text-white-primary"
        >
          works
        </a>
      </nav>
      <nav className="py-3 px-4">
        <a
          href="/contacts"
          className="font-monospace font-medium text-base leading-4 text-black-primary dark:text-white-primary"
        >
          contacts
        </a>
      </nav>
      <button
        className=" text-black-primary dark:text-white-primary"
        onClick={toggleColorMode}
      >
        <Icon icon="moon" height={20} width={20} className="h-5 w-5" />
      </button>
    </div>
  );
};

const NavMenuButton: FC<{ onClick: () => void; isMenuShow: boolean }> = ({
  onClick,
  isMenuShow,
}) => {
  return (
    <button
      type="button"
      className="text-black-primary dark:text-white-primary appearance-none absolute -right-2 p-2 rounded-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 z-20"
      onClick={onClick}
    >
      <svg className="h-6 w-6 fill-current">
        <use
          xlinkHref={`/images/icons.svg${
            isMenuShow ? "#masbossun_times" : "#masbossun_menu"
          }`}
        />
      </svg>
    </button>
  );
};

const NavMenu = () => {
  const { colorMode, setColorMode } = useColorMode();

  const toggleColorMode = () => {
    if (colorMode === "dark") {
      return setColorMode("light");
    }
    return setColorMode("dark");
  };

  return (
    <div className="bg-white-primary dark:bg-black-primary fixed inset-0 z-10">
      <section className="flex flex-col h-screen justify-center px-6">
        <div className="flex flex-1 flex-col justify-center items-start">
          <a
            href="/"
            className="mb-4 focus:outline-none focus:underline text-black-primary dark:text-white-primary"
          >
            <h1>home</h1>
          </a>
          <a
            href="/blog"
            className="mb-4 focus:outline-none focus:underline text-black-primary dark:text-white-primary"
          >
            <h1>blog</h1>
          </a>
          <a
            href="/works"
            className="mb-4 focus:outline-none focus:underline text-black-primary dark:text-white-primary"
          >
            <h1>works</h1>
          </a>
          <a
            href="/contacts"
            className="mb-4 focus:outline-none focus:underline text-black-primary dark:text-white-primary"
          >
            <h1>contacts</h1>
          </a>
          <button
            className="text-black-primary dark:text-white-primary"
            onClick={toggleColorMode}
          >
            <h1>
              dark{" "}
              <span className="text-black-primary dark:text-accent-secondary">
                on
              </span>
              /
              <span className="text-accent-primary dark:text-white-primary">
                off
              </span>
            </h1>
          </button>
        </div>

        <div className="p-6">
          <Socials />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
