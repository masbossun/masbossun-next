const Link: React.FC<{ href: string }> = (props) => {
  return (
    <a
      href={props.href}
      className="font-body text-lg underline text-black-primary dark:text-white-primary"
    >
      {props.children}
    </a>
  );
};

export const Footer = () => {
  return (
    <>
      <div className="h-0.5 w-full bg-white-secondary dark:bg-black-secondary" />
      <footer className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <div className="py-4">
              <span className="font-monospace italic text-xs text-black-primary dark:text-white-primary opacity-50">
                Contacts
              </span>
            </div>
            <Link href="mailto:setiagi.ryan@gmail.com">email</Link>
            <Link href="https://linkedin.com/in/ryan-setiagi">linkedin</Link>
          </div>
          <div className="flex flex-col">
            <div className="py-4">
              <span className="font-monospace italic text-xs text-black-primary dark:text-white-primary opacity-50">
                Socials
              </span>
            </div>
            <Link href="https://twitter.com/masbossun">twitter</Link>
            <Link href="https://instagram.com/masbossun">instagram</Link>
          </div>
          <div className="flex flex-col">
            <div className="py-4">
              <span className="font-monospace italic text-xs text-black-primary dark:text-white-primary opacity-50">
                Others
              </span>
            </div>
            <Link href="https://github.com/masbossun">github</Link>
            <Link href="https://stackoverflow.com/cv/masbossun">
              stackoverflow
            </Link>
            <Link href="https://dribbble.com/masbossun">dribbble</Link>
          </div>
        </div>

        <div className="h-24" />
        <span className="flex flex-1 text-black-primary dark:text-white-primary font-monospace text-xs text-center">
          proudly made by ryan
        </span>
      </footer>
    </>
  );
};
