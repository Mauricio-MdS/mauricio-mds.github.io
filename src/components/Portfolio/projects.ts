import { PortfolioType } from "./PortfolioType";
import portfolioImg from "./assets/portfolio.avif";

export const projects: PortfolioType[] = [
  {
    description:
      "Check the source code of this page, which was developed using React and TypeScript. The design incorporates Material UI components. Deployed on GitHub Pages.",
    image: portfolioImg,
    sourceLink: "https://github.com/mauricio-mds",
    technologies: ["React", "Typescript", "Material UI", "Github"],
    title: "Portfolio",
  },
];
