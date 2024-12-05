import type {
  NavigationLinkType,
  FooterSocial,
  SelectInfoType,
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
          files: ["sport", "hiking", "food", "partizan"],
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
