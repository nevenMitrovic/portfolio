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
    | "sport"
    | "hiking"
    | "food"
    | "partizan"
    | "high-school"
    | "university"
    | "resume";
  data: string;
}
