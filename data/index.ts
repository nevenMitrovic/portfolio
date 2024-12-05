import type { NavigationLinkType, FooterSocial } from "@/interfaces/index";

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
