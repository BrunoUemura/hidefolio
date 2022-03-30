import bancoOriginal from "../assets/logos/bco-logo.jpg";
import icaroTech from "../assets/logos/icaro-logo.jpg";
import uplBrazil from "../assets/logos/upl-logo.jpg";

export const jobs = [
  {
    image: bancoOriginal,
    companyName: "Banco Original",
    startDate: "2022-02-01",
    endDate: null,
    title: "Backend Developer",
    description: [
      `Participated in (Favored Users for Pix) project definition, solution design and database modeling. A project with influence in thousands of users payment routine.
      Technologies: Java, Spring Boot, Microservices.`,
      `Refactoring and development of AWS Lambda functions for BaaS (Bank as a Service) Pix functionality.
      Technologies: Node.js, AWS, AWS API Gateway, AWS Lambda, DynamoDB, MySQL, Jenkins.`,
    ],
  },
  {
    image: icaroTech,
    companyName: "Icaro Tech",
    startDate: "2020-10-05",
    endDate: "2022-01-28",
    title: "System Analyst",
    description: [
      `Development of Node.js APIs for environment analysis project for a data center company through integrations with external APIs. Additionally created automated tests and used code quality analyzer for best practices.`,
      `Developed systems automation scripts for Windows Server environment in order to, collect environment information and also for task automation.`,
      `Requirements gathering meetings with the clients to understand their needs and suggest solutions.`,
      `Technologies: Node.js, Express, Jest, Python, Docker, Kubernetes, RabbitMQ, PostgreSQL, MySQL, SQL Server, MongoDB, Unix, Git, GitLab, SonarQube, Powershell.`,
    ],
  },
  {
    image: uplBrazil,
    companyName: "UPL Brazil",
    startDate: "2019-08-13",
    endDate: "2020-10-01",
    title: "SAP System Analyst Assistant",
    description: [
      `Management and implementation of internal process improvement projects, and participation in global SAP projects with the support of the India team.`,
      `Support to the internal employees in the use of SAP system and related systems. Focal point in Brazil responsible for SD, MM and Basis module.`,
    ],
  },
  {
    image: uplBrazil,
    companyName: "UPL Brazil",
    startDate: "2018-07-01",
    endDate: "2019-08-12",
    title: "SAP System Analyst Intern",
    description: [
      `Support to the internal employees in the use of SAP system and related systems.`,
      `Resolution of level 1 and level 2 support tickets within the SLA.`,
    ],
  },
];
