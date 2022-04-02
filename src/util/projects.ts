import hidefolioImage from "../assets/images/hidefolio-image.png";
import pokedexImage from "../assets/images/pokedex-image.png";
import todoappImage from "../assets/images/todoapp-image.png";
import geeklistImage from "../assets/images/geeklist-image.png";

export const projects = [
  {
    name: "HideFolio",
    area: "Front-end",
    repo: "https://github.com/BrunoUemura/hidefolio",
    demo: "https://hidefolio.vercel.app/",
    image: hidefolioImage,
    status: "In Progress",
    technologies: {
      languages: ["TypeScript", "SCSS", "HTML"],
      tools: ["React", "Vite.js"],
    },
  },
  {
    name: "Pokemon Zukan",
    area: "Front-end",
    repo: "https://github.com/BrunoUemura/pokedex",
    demo: "https://pokemonzukan.vercel.app/",
    image: pokedexImage,
    status: "In Progress",
    technologies: {
      languages: ["TypeScript", "HTML"],
      tools: ["React", "Next.js", "TailwindCSS", "PokeAPI"],
    },
  },
  {
    name: "TODO App",
    area: "Full Stack",
    repo: "https://github.com/BrunoUemura/todo-app",
    demo: "https://todo-app-dun-nine.vercel.app/",
    image: todoappImage,
    status: "In Progress",
    technologies: {
      languages: ["TypeScript", "SCSS", "HTML"],
      tools: ["React", "Next.js", "Prisma", "MongoDB", "Serverless"],
    },
  },
  {
    name: "Geek List",
    area: "Full Stack",
    repo: "https://github.chttps://github.com/stars/BrunoUemura/lists/geek-listom/BrunoUemura/todo-app",
    demo: "https://list-frontend-app.vercel.app/",
    image: geeklistImage,
    status: "In Progress",
    technologies: {
      languages: ["Node.js", "TypeScript", "HTML"],
      tools: [
        "Express",
        "MongoDB",
        "Docker",
        "React",
        "Next.js",
        "TailwindCSS",
      ],
    },
  },
];
