import type {
  NavigationLinkType,
  FooterSocial,
  SelectInfoType,
  FileDataType,
} from "@/interfaces/index";

export const navigationLinks: NavigationLinkType[] = [
  {
    title: "_hello",
    path: "/",
  },
  {
    title: "_about-me",
    path: "/about-me",
  },
  {
    title: "_projects",
    path: "/projects",
  },
  {
    title: "_contact-me",
    path: "/contact-me",
  },
];

export const footerData: FooterSocial = {
  title: "find me in:",
  social: [
    {
      icon: "ri:linkedin-box-fill",
      path: "https://www.linkedin.com/in/neven-mitrovic-1517b3217/",
    },
    { icon: "ri:github-fill", path: "https://github.com/nevenMitrovic" },
  ],
};

export const selectInfoData: SelectInfoType = {
  sections: [
    {
      id: "personal",
      title: "personal-info",
      folders: [
        { color: "portfolio-accent-peach", title: "bio", files: ["bio"] },
        {
          color: "portfolio-accent-green",
          title: "interests",
          files: ["sport", "hiking", "food", "partizan", "books", "movies"],
        },
        {
          color: "portfolio-secondary-purple",
          title: "education",
          files: ["high-school", "university"],
        },
      ],
    },
    {
      id: "professional",
      title: "professional-info",
      folders: [
        {
          color: "portfolio-accent-peach",
          title: "resume",
          files: ["resume"],
        },
      ],
    },
  ],
  contacts: {
    id: "contacts",
    contacts: ["+381656196083", "nevenmitrovic4@gmail.com"],
  },
};

export const filesData: FileDataType[] = [
  {
    id: "bio",
    data: "Frontend Developer with one year of professional experience, specializing in frameworks such as Vue, Nuxt, and React. Skilled in crafting visually appealing and responsive designs using TailwindCSS, complemented by a solid foundation in Bootstrap. Beyond the frontend, I have knowledge of backend technologies like Express.js and Nest.js, along with proficiency in working with MongoDB databases. Programming is my passion, and I am constantly driven to expand my knowledge and refine my skills. Ready to take on new challenges and contribute to impactful projects!",
  },
];
