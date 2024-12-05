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
