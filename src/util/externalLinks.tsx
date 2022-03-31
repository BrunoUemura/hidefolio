import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import cv from "../assets/documents/CV-PT-Bruno-Uemura.pdf";

export const externalLinks = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/bruno-uemura/",
    icon: <FaLinkedin />,
  },
  {
    name: "github",
    href: "https://github.com/BrunoUemura",
    icon: <FaGithub />,
  },
  {
    name: "curriculum",
    href: cv,
    icon: <IoDocumentText />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/uemurabruno/",
    icon: <RiInstagramFill />,
  },
];
