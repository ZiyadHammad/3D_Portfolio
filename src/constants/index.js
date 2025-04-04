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
  worldstrides,
  rapidsum,
  threejs,
  pumpfolio,
  interviewiq,
  startup
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#projects",
    title: "Projects",
  },
  {
    id: "#contact",
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
    title: "Full Stack Developer",
    company_name: "Stealth Startup",
    icon: startup,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    points: [
      "Engineered scalable and efficient RESTful API’s using Node.js and Express.js",
      "Simplified and optimized database schemas for better data storage and retrieval",
      "Developed unit and integration tests using Jest.js to enhance code quality and reliability through automated testing",
      "Worked with frontend team to help create and develop the user interface using Vue.js and Tailwind",
      "Maintained detailed documentation for system architecture, workflows, and processes using Confluence"
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Hub Group",
    icon: hubgroup,
    iconBg: "#E6DEDD",
    date: "May 2022 - Feb 2024",
    points: [
      "Engineered webhooks, RESTful APIs, and automations using Workato to synchronize data and optimize workflows",
      "Developed a Vue.js application to improve internal shipment processes, enhancing data entry accuracy and efficiency",
      "Leveraged SQL and Python to extract, transform, and format large datasets for business analytics and reporting",
      "Designed and built dynamic business reports and invoices using Crystal Reports software",
      "Managed database administration tasks, including data loads, quality control, and system maintenance",
      "Worked in testing and production environments to facilitate application infrastructure and deployment",
      "Efficiently resolved support tickets related to internal systems and client-facing services",
      "Utilized Git, GitHub, Teams, Jira, and Confluence for collaborative development and project management"
    ],
  },
  {
    title: "Software Consultant",
    company_name: "Intuit",
    icon: intuit,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Feb 2022",
    points: [
      "Managed sales lifecycle and customer support for QuickBooks software, handling inbound inquiries from SMB",
      "Facilitated consultative sales conversations and in-depth product demonstrations",
      "Strategically cross-sold complementary Intuit products, including payroll, payments, and accounting software",
      "Executed client onboarding and data migrations to ensure a seamless transition with minimal disruption",
      "Provided technical support for QuickBooks, efficiently troubleshooting and resolving client-reported issues"
    ],
  }
];

const projects = [
  {
    name: "InterviewIQ",
    description:
      "AI-powered mock interview app that customizes questions based on your role, difficulty level, and interview type. Get real-time voice interviews powered by Vapi and Gemini.",
    tags: [
      {
        name: "Gemini",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: interviewiq,
    source_code_link: "https://interview-iq-ten.vercel.app/",
  },
  {
    name: "Pumpfolio",
    description:
      "Easy-to-use app that lets you explore a wide range of exercises, filter by muscle group or exercise type, and find similar exercises based on your choices. It’s designed to make your workout routine more effective and varied.",
    tags: [
      {
        name: "React",
        color: "amethyst-text-gradient",
      },
      {
        name: "JavaScript",
        color: "sunset-text-gradient",
      },
      {
        name: "Tailwind",
        color: "ocean-breeze-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "cherry-blossom-text-gradient",
      }
    ],
    image: pumpfolio,
    source_code_link: "https://pumpfolio.onrender.com/",
  },
  {
    name: "RapidSum",
    description:
      "Article summarizer designed to condense lengthy articles into clear and concise summaries. Copy the URL of a article page, paste, and let Chat-GPT do the rest.",
    tags: [
      {
        name: "Chat GPT-4",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: rapidsum,
    source_code_link: "https://rapid-sum-ecru.vercel.app/",
  }
];

export { services, technologies, experiences, projects };