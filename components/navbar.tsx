import { FC, useState } from "react";

const Navbar = () => {
  const [isMenuShow, setMenuShow] = useState(false);

  return (
    <nav className="flex flex-row items-center py-4 relative">
      <NavLogo />
      <NavMenuButton
        onClick={() => setMenuShow((e) => !e)}
        isMenuShow={isMenuShow}
      />
      {isMenuShow ? <NavMenu /> : null}
    </nav>
  );
};

const NavLogo = () => {
  return (
    <a href="/">
      <div className="bg-black-primary dark:bg-white-secondary py-3 px-4">
        <span className="font-monospace font-medium text-base leading-4 text-white-primary dark:text-black-primary">
          masbossun
        </span>
      </div>
    </a>
  );
};

const NavMenuButton: FC<{ onClick: () => void; isMenuShow: boolean }> = ({
  onClick,
  isMenuShow,
}) => {
  return (
    <button
      type="button"
      className="text-black-primary dark:text-white-primary appearance-none absolute -right-2 p-2 rounded-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 z-10"
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
  return (
    <div className="bg-white-primary dark:bg-black-primary fixed inset-0">
      <section className="flex flex-col h-screen justify-center px-6">
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
          href="/contacts"
          className="focus:outline-none focus:underline text-black-primary dark:text-white-primary"
        >
          <h1>contacts</h1>
        </a>
      </section>
    </div>
  );
};

export default Navbar;
