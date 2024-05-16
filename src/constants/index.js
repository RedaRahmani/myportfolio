import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  arkx,
  alx,
  yosobox,
  esto,
  odex,
  C,
  cpp,
  python,
  pets,
  blog,
  weather,
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Devops Engineer",
    icon: mobile,
  },
  {
    title: "Junior Pentester",
    icon: backend,
  },
  {
    title: "Administrator of Systems and Networks",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: C,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Mern Developer (6 Month Bootcamp) ",
    company_name: "Ark x Talent Factory",
    icon: arkx,
    iconBg: "#383E56",
    date: "January 2024 - June 2024",
    points: [
      "Building full-stack web applications through an intensive MERN bootcamp",
      "Mastering MongoDB for scalable database design and management.",
      "Developing high-performance server-side applications with Express.js",
      "Creating interactive UI and responsive UX with React",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Building powerful back-end systems with Node.js for real-time data processing",
    ],
  },
  {
    title: "Software Engineer (12 Month Bootcamp)",
    company_name: "Alx africa",
    icon: alx,
    iconBg: "#E6DEDD",
    date: "February 2023 - April 2024",
    points: [
      "Developed full-stack web applications using HTML, CSS, JavaScript, React, Next.js, Node.js, and Express.js",
      "Built and deployed server-side applications with Python frameworks like Django and Flask.",
      "Designed and maintained relational databases using SQL, including schema design, query optimization, and performance tuning",
      "Implemented NoSQL databases to handle unstructured and semi-structured data.",
      "Developed frontend app that communicates with RESTful APIs to fetch and manipulate data. ",
      "Implemented GraphQL queries and mutations to optimize data fetching and management.",
      "Honed critical thinking, problem-solving, collaboration, communication, and independent learning skills",
    ],
  },
  {
    title: "Junior Pentester (Internship)",
    company_name: "YoSobox",
    icon: yosobox,
    iconBg: "#383E56",
    date: "April 2023 - July 2023",
    points: [
      "Conducted penetration tests and vulnerability scans to identify weaknesses in security infrastructure.",
      "I actively participated in a project focused on building an IPS/IDS.",
      "Implemented security best practices and recommended remediation measures based on findings from penetration tests and vulnerability assessments.",
    ],
  },
  {
    title: "Administrator of Systems and Networks (Internship)",
    company_name: "Higher school of technology Oujda",
    icon: esto,
    iconBg: "#E6DEDD",
    date: "April 2022 - June 2022",
    points: [
      "Configured thin clients and ensured they were updated with the latest security technologies, contributing to the organization's security posture and compliance with industry standards.",
      
    ],
  },
  {
    title: "Odoo Developer (Internship)",
    company_name: "Odex Sarl au",
    icon: odex,
    iconBg: "#E6DEDD",
    date: "June 2021 - August 2022",
    points: [
      "I spearheaded the creation of a school management website using Odoo, focusing on designing and optimizing its features to perfectly suit the institution's unique requirements.",
      "I got hands-on with Odoo modules, diving into database management."
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
    name: "Pets Marketplace",
    description:
      "Envision a vibrant online space dedicated to connecting pet lovers with their furry companions. This Pets Marketplace, built using Next.js and Tailwind CSS",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: pets,
    source_code_link: "https://github.com/RedaRahmani/pets_and_zoo",
  },
  {
    name: "Blog website",
    description:
      "This project demonstrates my full-stack development capabilities by building a dynamic and interactive blog website using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/A-mitaf/blogApp",
  },
  {
    name: "Weather and forecast website",
    description:
      "This project highlights my expertise in building data-driven web applications using Python and Django.      ",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/RedaRahmani/Winter_is_coming",
  },
];

export { services, technologies, experiences, testimonials, projects };
