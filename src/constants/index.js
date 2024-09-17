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
  ravi,
  mirza,
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
    title: "React Hooks & Context API",
    icon: mobile,
  },
  {
    title: "State Management (Redux, Mobx)",
    icon: backend,
  },
  {
    title: "Next.js Three.js",
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
    name: "Next JS",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: docker,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgre SQL",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  
  
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Inventrax, Hyderabad",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Career Break",
  //   company_name: "",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Feb 2019 - Aug 2021",
  //   points: [
  //     "Focused on preparing for the GATE entrance exam.",
  //     "Simultaneously enhancing my web development skills through dedicated projects and coursework.",
  //   ],
  // },
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
      "After optimizing our website, traffic jumped 50%. Their expertise greatly enhanced our online presence, and we’re extremely grateful!",
    name: "Mirza Baig",
    designation: "",
    company: "Mirza Caterers & Catering Services",
    image: mirza,
  },
];

const projects = [
  {
    name: "SKUBIQ",
    description:
      "This SAAS-based Warehouse Management System optimizes and streamlines warehouse order activities with effective tracking and tracing.",
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
        name: "material UI",
        color: "pink-text-gradient",
      },
      {
        name: "postgre",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://wms.skubiq.com/",
  },
  {
    name: "FALCON",
    description:
      "The Order Management System optimizes warehouse activities with effective tracking and tracing, boosting efficiency and accuracy in order fulfillment.",
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
    image: jobit,
    source_code_link: "https://myoms.nilkamal.online/",
  },
  {
    name: "CR Portal",
    description:
      "CR, a Customer Request Management app, simplifies project and customer request tracking with a user-friendly interface and a clear data visualization dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: ".net core",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "yellow-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://csp.inventrax.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
