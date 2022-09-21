import condorImg from "../imgs/condor_white.png";
export function Navbar({
  children,
  title,
  titleImg = condorImg,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  titleImg?: string;
}) {
  return (
    <div className="flex flex-row items-center mt-10 py-2 gap-x-2 px-3 mx-10 ml-10 text-5xl bg-gray-100 h-20 rounded-lg">
      <img
        className="h-full rounded-lg"
        src={condorImg}
        alt="Project Condor Logo"
      />
      <span>{title}</span>
    </div>
  );
}
