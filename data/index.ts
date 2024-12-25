import type {
  NavigationLinkType,
  FooterSocial,
  SelectInfoType,
  FileDataType,
  CodeSnippetType,
  FilterDataType,
  ProjectCardType,
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
  {
    id: "sport",
    data: "I have been involved in sports since the age of six. Over the years, I trained and played football for FK Jedinstvo Ub, Radnički Obrenovac, Bask Beograd and Radnik Ub. In addition to football, I also trained in kickboxing, competing for Soko Ub. I hold the title of Junior Vice-Champion of Serbia in the under-75kg category. I love all sports, but apart from football, I particularly enjoy following basketball and handball.",
  },
  {
    id: "hiking",
    data: "I enjoy discovering new trails, challenging myself with diverse terrains, and embracing the tranquility of the outdoors. Hiking not only keeps me physically active but also serves as a source of mental clarity and inspiration. Whether it’s a short walk in nature or a multi-day trek, hiking fuels my passion for adventure and personal growth.",
  },
  {
    id: "food",
    data: "Like most people from the Balkans, I'm a big food lover! :) I have a special love for traditional Serbian food. My favorite food? Roasted pork and lamb—absolute perfection! :)",
  },
  {
    id: "partizan",
    data: "I'm a Partizan fan, of course! In Serbia, this passion is traditionally passed down from generation to generation, especially among us Partizan supporters. It's not always easy, but it's always worth it!",
  },
  {
    id: "books",
    data: "I love reading whenever my schedule allows me to find the time. My favorite author is Dejan Stojiljković, and I wholeheartedly recommend every book he's written. Among all his works, my absolute favorite is Long Nights and Black Flags.",
  },
  {
    id: "movies",
    data: "In my free time, I also enjoy watching movies. My all-time favorite? Gladiator.",
  },
  {
    id: "high-school",
    data: "I completed my high school education at Gymnasium Branislav Petronijević in Ub, with an average grade of 4.00.",
  },
  {
    id: "university",
    data: "As someone who has been involved in sports from an early age, it was only natural for me to continue my education in that direction. :) In 2015, I started my studies at the University of Sport and Physical Education in Belgrade.",
  },
  {
    id: "resume",
    data: "From June 2021 to July 2023, I worked as a live betting operator at Exefeed Doo. My responsibilities included monitoring betting markets from the source, comparing them with other bookmakers, and addressing any discrepancies in the markets. Since February 2024, I have been involved in developing the Osiguraj Lako web application for online insurance services as a Frontend Developer.",
  },
];

export const useAxiosExample: CodeSnippetType = {
  code: `export function useAxios(): AxiosInstance {
  const axiosInstance: AxiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL
  });
  axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
          return config;
      },
      (error: any) => {
         Promise.reject(error);
      }
  );
  axiosInstance.interceptors.response.use(
      async (config: AxiosResponse): Promise<AxiosResponse> => {
          return config;
      },
      (error: any) => {
          Promise.reject(error);
      }
  )
  return axiosInstance;
}`,
  details:
    "This is a code snippet from my project named Who Brings, created 7 months ago. It includes a custom composable called useAxios.",
  time: "5 months ago",
};

export const filterData: FilterDataType[] = [
  { id: "react", icon: "ri:reactjs-line" },
  { id: "vue", icon: "ri:vuejs-line" },
  { id: "nuxt", icon: "ri:vuejs-line" },
  { id: "express", icon: "ri:nodejs-line" },
  { id: "nest", icon: "ri:nodejs-line" },
];

export const projectCardsData: ProjectCardType[] = [
  {
    id: "who-brings",
    tags: [
      { id: "express", color: "node_green", icon: "ri:nodejs-line" },
      { id: "vue", color: "vue_green", icon: "ri:vuejs-line" },
    ],
    img: "./whobrings.png",
    description: "Fullstack application for creating and managing events.",
    link: "https://github.com/nevenMitrovic/whobrings",
  },
  {
    id: "employees-app",
    tags: [
      { id: "nest", color: "node_green", icon: "ri:nodejs-line" },
      { id: "react", color: "react_blue", icon: "ri:reactjs-line" },
    ],
    img: "./employee.png",
    description: "Fullstack application for manage employee data.",
    link: "https://github.com/nevenMitrovic/employees-app",
  },
  {
    id: "weather-app",
    tags: [{ id: "vue", color: "vue_green", icon: "ri:vuejs-line" }],
    img: "./weather.png",
    description: "Application provides weather data for selected locations.",
    link: "https://github.com/nevenMitrovic/weather-app",
  },
  {
    id: "portfolio",
    tags: [{ id: "nuxt", color: "vue_green", icon: "ri:vuejs-line" }],
    img: "./portfolio.png",
    description: "My official website to showcase my skills and contact me.",
    link: "https://github.com/nevenMitrovic/portfolio",
  },
];

export const formExample: CodeSnippetType = {
  code: `const button = document.querySelector<HTMLButtonElement>('#sendBtn');

if (button) {
  const message = {
    name: "Neven Mitrovic",
    email: "nevenmitrovic4@gmail.com",
    message: "Hey! Just checked your website and it looks awesome! Thanks!",
    date: "Thu 21 Apr"
  };

  button.addEventListener('click', () => {
    form.send(message);
  });
} else {
  console.error('Button with id #sendBtn not found.');
}

declare const form: {
  send: (message: {
    name: string;
    email: string;
    message: string;
    date: string;
  }) => void;
};`,
  details:
    "This code snippet demonstrates how to send a form using TypeScript.",
  time: "2 months ago",
};
