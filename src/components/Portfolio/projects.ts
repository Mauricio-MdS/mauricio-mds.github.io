import { PortfolioType } from "./PortfolioType";
import portfolioImg from "./assets/portfolio.avif";
import messageBoardImg from "./assets/messageboard.avif"

export const projects: PortfolioType[] = [
  {
    description: "A message board. Please, leave your message.",
    image: messageBoardImg,
    liveLink: "https://msgboard.fly.dev/",
    sourceLink: "https://github.com/Mauricio-MdS/message-board",
    technologies: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "Javascript",
      "EJS",
      "Docker",
    ],
    title: "Message Board",
  },
  {
    description: "Check the source code of this page.",
    image: portfolioImg,
    sourceLink: "https://github.com/mauricio-mds",
    technologies: ["React", "Typescript", "Material UI", "Github"],
    title: "Portfolio",
  },
];
