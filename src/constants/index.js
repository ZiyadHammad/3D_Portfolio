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
  hubgroup,
  intuit,
  ga,
  tmlsstudios,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Three JS",
    icon: threejs,
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
    title: "Software Consultant",
    company_name: "Intuit",
    icon: intuit,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - Nov 2021",
    points: [
      "Analyze clients' business requirements and identify software solutions to address their financial needs.",
      "Implement, configure and customize financial software applications to meet clients' specific requirements.",
      "Conduct user training sessions and provide ongoing support to ensure clients can fully utilize the software's features and functionalities.",
      "Collaborate with cross-functional teams, including software developers and project managers, to deliver high-quality solutions that meet clients' expectations and requirements.",
    ],
  },
  {
    title: "Instructor Lead",
    company_name: "General Assembly",
    icon: ga,
    iconBg: "#383E56",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Develop and deliver engaging lessons and materials utilizing GA curriculum content.",
      "Collaborate with GA staff and teaching team to identify and address the unique needs and learning styles of students.",
      "Facilitate and teach complex topics to diverse student populations in a clear and concise manner.",
      "Guide students in creating impressive final projects that highlight their skills to potential employers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Hub Group",
    icon: hubgroup,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Led 2-week sprints to prioritize tasks and deliver high-quality results on time and within budget.",
      "Successfully onboarded clients by delivering comprehensive API documentation and conducting thorough testing to ensure seamless integration with company's software platform.",
      "Developed and implemented new work automations that streamlined processes and increased efficiency, as well as enhanced existing automations to improve performance and user experience.",
      "Collaborated on the development of an internal app used to efficiently scan and track shipments upon delivery, resulting in increased accuracy and timeliness of data entry.",
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
    name: "TMLS Studios",
    description:
      "Web-based platform that enables users to explore a diverse range of services and make purchases or request a quote for the desired service.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tmlsstudios,
    source_code_link: "https://tmlsstudios.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };