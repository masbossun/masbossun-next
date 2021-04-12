import Socials from "./socials";

export const Footer = () => {
  return (
    <footer className="py-6">
      <Socials />
      <div className="h-6" />
      <span className="flex flex-1 justify-center text-black-primary dark:text-white-primary font-monospace text-xs text-center">
        proudly made by ryan
      </span>
    </footer>
  );
};
