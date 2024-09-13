import { ProjectCard } from "@/app/components/ProjectCard";
import { IProject } from "../../../types/types";

const projectsData: IProject[] = [
  {
    id: 1,
    title: "AniHub",
    description:
      "AniHub — это веб-приложение для поиска, просмотра и отслеживания аниме. Проект создан с использованием React, TypeScript и Tailwind CSS.",
    image: "/images/projects/anihub.png",
    gitUrl: "https://github.com/denzel-voin/anihub",
    previewUrl: "https://denzel-voin.github.io/anihub/",
  },
    {
        id: 2,
        title: "Cryptowave",
        description: "CryptoWave - по криптовалютам, созданный с использованием React и TypeScript. Сайт позволяет пользователям просматривать информацию о криптовалютах, а также получать последние новости.",
        image: "/images/projects/cryptowave.PNG",
        gitUrl: "https://github.com/denzel-voin/Cryptowave",
        previewUrl: "https://denzel-voin.github.io/Cryptowave/",
    }
];

export const ProjectsSection = () => {
  return (
    <>
      <h2 id='projects' className="text-4xl font-bold mb-8 text-white">Мои проекты</h2>
      <div className='flex gap-3 flex-wrap justify-center'>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            imgURL={project.image}
          />
        ))}
      </div>
    </>
  );
};
