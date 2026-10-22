import {
  mobile,
  backend,
  creator,
  web,
  ai,
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
  tripguide,
  threejs,
  ravi,
  mirza,
  JarkLogo,
  TurnKeyLogo,
  ribbon,
  openai,
  python,
  langchain,
  admet,
  drugdiscovery,
  analytics
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
    title: "React Component Development",
    icon: web,
  },
  {
    title: "AI/ML Integration & LLM APIs",
    icon: ai,
  },
  {
    title: "Generative AI Development",
    icon: creator,
  },
  {
    title: "AI & Data Visualization",
    icon: backend,
  },
  {
    title: "State Management (Redux, Mobx)",
    icon: mobile,
  },
  {
    title: "Next.js & Three.js",
    icon: threejs,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: figma,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "OpenAI / LLMs",
    icon: openai,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "LangChain / RAG",
    icon: langchain,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
   {
    title: "Frontend Software Engineer",
    company_name: "Turnkey Learning, Hyderabad",
    icon: TurnKeyLogo,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Present",
    points: [
        "Currently leading front-end development for an AI-driven drug discovery platform, enabling researchers to explore protein structures and interactions through an interactive web interface.",
        "Built and maintained a fully responsive web application using React.js, integrated with Python-based AI services over WebSockets to support real-time communication with an intelligent agent that answers scientific questions about proteins.",
        "Designed and implemented 3D molecular visualization modules for rendering complex protein structures directly in the browser, leveraging modern WebGL libraries to deliver smooth, high-performance interaction.",
        "Collaborated with backend and AI teams to deploy scalable services on AWS, ensuring low-latency data streaming and secure handling of large biological datasets.",
        "Contributed to the development of a novel AI agent for protein research, bridging advanced computational biology with a user-friendly visualization layer."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Jark, Pune (Remote)",
    icon: JarkLogo,
    iconBg: "#E6DEDD",
    date: "March 2025 - Aug 2025",
    points: [
        "Built and styled responsive UI components with Material UI, maintaining a consistent design system for customer behavior analytics, trend forecasting, and revenue leakage detection.",
        "Developed high-performance client-side and server-side rendering with Next.js, improving SEO and load times for marketing and platform pages.",
        "Integrated GraphQL APIs for efficient querying and real-time data updates related to customer intent, merchant scoring, and revenue optimization metrics.",
        "Implemented Redis-based caching strategies for frequently accessed behavioral insights, improving dashboard performance and reducing latency."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Inventrax, Hyderabad",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Feb 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern (FrontEnd Developer)",
    company_name: "Uppertrust Technology Private Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Sept 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Yusuf has been fantastic; their expertise and attention to detail have been key in creating an innovative and seamless web application.",
    name: "Ravi Kumar Tyadi",
    designation: "Software Developer at",
    company: "TCS",
    image: ravi,
  },
  {
    testimonial:
      "Yusuf's exceptional skills and commitment have played a crucial role in crafting an innovative web application, consistently driving our project's success.",
    name: "Sharjeel Khan",
    designation: "Sr. Business Analyst at",
    company: "Inventrax",
    image: meta,
  },
  {
    testimonial:
      "After optimizing our website, traffic jumped 50%. Their expertise greatly enhanced our online presence, and we're extremely grateful!",
    name: "Mirza Baig",
    designation: "",
    company: "Mirza Caterers & Catering Services",
    image: mirza,
  },
];

const projects = [
  {
    name: "AI Drug Discovery Platform",
    description:
      "An AI-driven platform for protein research featuring real-time chat with an intelligent agent, 3D molecular visualization, and WebSocket-based communication with Python AI services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "websockets",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "yellow-text-gradient",
      },
    ],
    image: drugdiscovery,
    source_code_link: "https://github.com/AlfaYusuf",
  },
  {
    name: "AI-Powered Analytics Dashboard",
    description:
      "Enterprise dashboard with AI-driven insights for customer behavior analytics, trend forecasting, and revenue optimization using LLM-powered data analysis and visualization.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "yellow-text-gradient",
      },
    ],
    image: analytics,
    source_code_link: "https://dev.payments.looquplab.com/talktodata",
  },
  {
    name: "Intelligent Chatbot Assistant",
    description:
      "A conversational AI assistant built with LangChain and OpenAI APIs, featuring RAG pipelines for context-aware responses, memory management, and seamless integration with enterprise systems.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "vector-db",
        color: "yellow-text-gradient",
      },
    ],
    image: ribbon,
    source_code_link: "https://github.com/AlfaYusuf",
  },
  {
    name: "SKUBIQ WMS",
    description:
      "SAAS-based Warehouse Management System that optimizes and streamlines warehouse order activities with effective tracking and tracing for enterprise logistics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://wms.skubiq.com/",
  },
  {
    name: "FALCON OMS",
    description:
      "Order Management System that optimizes warehouse activities with effective tracking and tracing, boosting efficiency and accuracy in order fulfillment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mobx",
        color: "green-text-gradient",
      },
      {
        name: "antd",
        color: "pink-text-gradient",
      },
      {
        name: "asp.net",
        color: "yellow-text-gradient",
      },
    ],
    image: ribbon,
    source_code_link: "https://myoms.nilkamal.online/",
  },
];

export { services, technologies, experiences, testimonials, projects };
