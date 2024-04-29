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
    id: "#contact",
    title: "Contact",
  }
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
    company_name: "Hub Group",
    icon: hubgroup,
    iconBg: "#E6DEDD",
    date: "May 2022 - Feb 2024",
    points: [
      "Led and managed client business calls to facilitate customer integration, ensuring smooth onboarding onto our network through testing across development and QA environments",
      "Co-led integration project of third-party routing & scheduling application software for optimized order management",
      "Built Restful APIs for order management and tracking services",
      "Collaborated on widely used internal Vue.js PWA utilized by operations team for efficient shipment scanning and tracking, enhancing accuracy and timeliness of data entry",
      "Optimized backend DB2 operations by implementing and enhancing 20+ functions, triggers, and stored procedures, resulting in over 20% reduction in query execution time",
      "Ensured the prompt resolution of IT support tickets across various departments, guaranteeing uninterrupted operations and productivity"
    ],
  },
  {
    title: "Software Consultant",
    company_name: "Intuit",
    icon: intuit,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Feb 2022",
    points: [
      "Demonstrated expertise in identifying and addressing client needs across B2B & B2C markets by offering tailored SaaS solutions, encompassing Payroll, Accounting, & Merchant Services",
      "Conducted proactive follow-ups with existing clients, offering personalized support for renewals, exploring upgrade options, and discussing potential enhancements to their solutions",
      "Proficient in swiftly establishing rapport, addressing objections, and delivering compelling product demonstrations to effectively engage clients & drive sales",
      "Consistently exceeding both monthly & weekly sales quotas by engaging with over 500 contacts monthly, while maintaining an average conversion rate of 35%",
    ],
  },
  {
    title: "Admissions Advisor",
    company_name: "WorldStrides",
    icon: worldstrides,
    iconBg: "#383E56",
    date: "Dec 2019 - Dec 2020",
    points: [
      "Provided comprehensive counseling and guidance to students and families regarding educational opportunities, admission procedures, credit transfer, financial aid, and university policies, resulting in an increase in enrollment",
      "Maintained regular communication with families before, during, and after programs to ensure customer satisfaction, resulting in a notable increase in program retention and positive feedback",
      "Proficiently managed pipeline and conducted sales operations via Microsoft Dynamics 365 over the phone, with an average deal size of $10,000",
      "Consistently surpassed monthly sales quotas by over 100%, maintaining an average conversion rate of over 30%",
    ],
  }
  
];


const projects = [
  {
    name: "RapidSum",
    description:
      "Article summarizer designed to condense lengthy articles into clear and concise summaries. Copy the URL of a article page, paste,  Chat-GPT",
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