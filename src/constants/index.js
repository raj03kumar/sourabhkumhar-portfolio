import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  next,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  indivue,
  beatstore,
  myresumesite,
  notesapp,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "React.js/Next.js Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "Tailwind CSS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Indivue Technologies",
    icon: indivue,
    iconBg: "#383E56",
    date: "October 2022 - March 2023",
    points: [
      "Developing and maintaining frontend of web applications using React.js and MUI and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BeatStore",
    description:
      "Web-based platform that allows users to search, buy, and sell beats from various producers, providing a convenient and efficient solution for online beat selling/buying.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: beatstore,
    live_link: "https://beatstore.in/",
  },
  {
    name: "My Resume - Sourabh Kumhar",
    description:
      "Web application, created to showcase my personal details, skills and projects. It is my Web Resume and you can also dowload my pdf of resume.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: myresumesite,
    source_code_link: "https://github.com/sourabhkumhar/myResume",
    live_link: "https://sourabhkumhar.vercel.app",
  },
  {
    name: "Notes App",
    description:
      "A comprehensive notes saving platform that allows users to save notes securely with authentication and provide fast notes fetching.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: notesapp,
    source_code_link: "https://github.com/sourabhkumhar/iNotebook",
    live_link: "https://inotebook-coral.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
