import Icon from "./icon";

const Socials = () => {
  return (
    <div className="flex justify-center">
      <a
        href="https://linkedin.com/in/ryan-setiagi"
        className="mr-2 text-black-primary dark:text-white-primary"
      >
        <Icon icon="linkedin_solid" className="h-6 w-6" />
      </a>
      <a
        href="https://github.com/masbossun"
        className="mr-2 text-black-primary dark:text-white-primary"
      >
        <Icon icon="github_solid" className="h-6 w-6" />
      </a>
      <a
        href="https://twitter.com/masbossun"
        className="mr-2 text-black-primary dark:text-white-primary"
      >
        <Icon icon="twitter_solid" className="h-6 w-6" />
      </a>
      <a
        href="http://instagram.com/masbossun"
        className="text-black-primary dark:text-white-primary"
      >
        <Icon icon="instagram_alt_solid" className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Socials;
