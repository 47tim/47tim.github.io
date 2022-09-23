import condorImg from "../imgs/condor_white.png";
export function Navbar({
  title,
  titleImg = condorImg,
  navbarLinks,
}: {
  title: string;
  titleImg?: string;
  navbarLinks?: {
    text: string;
    href: string;
  }[];
}) {
  return (
    <div className="flex flex-row items-center mt-10 py-2 gap-x-2 px-3 mx-10 ml-10 bg-gray-100 h-20 rounded-lg">
      <img
        className="h-full rounded-lg"
        src={titleImg}
        alt="Project Condor Logo"
      />
      <span className="hidden md:flex whitespace-nowrap text-3xl font-bold ml-6">
        {title}
      </span>
      <div className="flex flex-row w-full justify-end">
        {navbarLinks &&
          navbarLinks.map((linkInfo) => {
            return <NavbarLink linkInfo={linkInfo} />;
          })}
      </div>
    </div>
  );
}
export function NavbarLink({
  linkInfo,
}: {
  linkInfo: {
    text: string;
    href: string;
  };
}) {
  const { text, href } = linkInfo;
  return (
    <a className="text-2xl" href={href}>
      {text}
    </a>
  );
}
