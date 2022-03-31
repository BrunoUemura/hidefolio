import hidefolioImage from "../assets/images/hidefolio-image.png";
import pokedexImage from "../assets/images/pokedex-image.png";
import todoappImage from "../assets/images/todoapp-image.png";
import geeklistImage from "../assets/images/geeklist-image.png";

export const projects = [
  {
    name: "HideFolio",
    area: "FrontEnd",
    repo: "https://github.com/BrunoUemura/hidefolio",
    demo: "https://hidefolio.vercel.app/",
    image: hidefolioImage,
    tags: ["TypeScript", "React", "Vite.js", "SASS"],
  },
  {
    name: "Pokemon Zukan",
    area: "FrontEnd",
    repo: "https://github.com/BrunoUemura/pokedex",
    demo: "https://pokemonzukan.vercel.app/",
    image: pokedexImage,
    tags: ["TypeScript", "React", "Next.js", "TailwindCSS", "PokeAPI"],
  },
  {
    name: "TODO App",
    area: "Full Stack",
    repo: "https://github.com/BrunoUemura/todo-app",
    demo: "https://todo-app-dun-nine.vercel.app/",
    image: todoappImage,
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "SASS",
      "Prisma",
      "MongoDB",
      "Serverless",
    ],
  },
  {
    name: "Geek List",
    area: "Full Stack",
    repo: "https://github.chttps://github.com/stars/BrunoUemura/lists/geek-listom/BrunoUemura/todo-app",
    demo: "https://list-frontend-app.vercel.app/",
    image: geeklistImage,
    tags: [
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "React",
      "Next.js",
      "TailwindCSS",
    ],
  },
];
