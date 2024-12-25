import type { MonthIndex, Year } from "~/types";

export interface NavigationLinkType {
  title: string;
  path: string;
}

export interface FooterSocial {
  title: string;
  social: Social[];
}

interface Social {
  icon: string;
  path: string;
}

export interface SelectInfoType {
  sections: AboutSectionType[];
  contacts: ContactSectionType;
}

interface AboutSectionType {
  id: "personal" | "professional" | "contacts";
  title: string;
  folders: AboutFolderType[];
}

interface AboutFolderType {
  color: string;
  title: "bio" | "interests" | "education" | "resume";
  files: string[];
}

interface ContactSectionType {
  id: "contacts";
  contacts: string[];
}

export interface FileDataType {
  id:
    | "bio"
    | "sport"
    | "hiking"
    | "food"
    | "partizan"
    | "high-school"
    | "university"
    | "resume"
    | "books"
    | "movies";
  data: string;
}

export interface CodeSnippetType {
  code: string;
  details: string;
  time: { month: MonthIndex, year: Year };
}

export interface FilterDataType {
  id: string;
  icon: string;
}

export interface ProjectCardType {
  id: string;
  tags: TagType[];
  img: string;
  description: string;
  link: string;
}

interface TagType {
  id: string;
  color: string;
  icon: string;
}