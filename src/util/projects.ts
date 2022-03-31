import hidefolioImage from "../assets/images/hidefolio-image.png";
import pokedexImage from "../assets/images/pokedex-image.png";
import todoappImage from "../assets/images/todoapp-image.png";

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
    area: "FullStack",
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
      "React",
      "Next.js",
      "SASS",
      "Prisma",
      "MongoDB",
    ],
  },
];
