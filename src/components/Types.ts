import { type } from 'os';

export type NavItem = {
  name: string;
  icons: {
    twitter: unknown | any;
    whatsap: unknown | any;
    github: unknown | any;
    instagram: unknown | any;
  };
};

export type NavDataArray = Array<NavItem>;

// SKILLS TYPES

export interface SkillsItem {
  skill: string;
  years: string;
}

export type SkillsArray = Array<SkillsItem>;

// PROJECTS

export type ProjectItems = {
  image: string | any;
  heading: string;
  link: string;
  frontEndcode: string;
  // backEndcode: string;
  language: string[];
};

export type ProjectArray = Array<ProjectItems>;

export interface RoleInterface {
  role: string;
}

export interface ExperienceInterface {
  company: string;
  worked_as: string;
  language: string;
  role: Array<RoleInterface>;
}

export type ExperienceType = Array<ExperienceInterface>;
