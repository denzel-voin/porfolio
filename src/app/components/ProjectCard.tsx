import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import { IProjectCard } from "../../../types/types";

export const ProjectCard = ({
  imgURL,
  title,
  description,
  gitUrl,
  previewUrl,
}: IProjectCard) => {
  return (
    <div className='w-[500px]'>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] hidden group-hover:opacity-80 group-hover:flex transition-opacity duration-500 items-center justify-center">
          <Link
            target="_blank"
            href={gitUrl}
            className="mr-2 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white"></CodeBracketIcon>
          </Link>
          <Link
            target="_blank"
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white"></EyeIcon>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};
