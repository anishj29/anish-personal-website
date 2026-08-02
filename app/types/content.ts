export type AccentColor =
  | "blue"
  | "indigo"
  | "green"
  | "red"
  | "purple"
  | "yellow";

export type ProjectIcon = "web" | "pdf" | "money" | "psychology";

export interface ColorClasses {
  bg: string;
  text: string;
  textLight: string;
  border: string;
  bgLight: string;
  dot: string;
  shadow: string;
}

export interface EducationEntry {
  id: number;
  period: string;
  institution: string;
  degree: string;
  majors?: string[];
  minors?: string[];
  relevantCoursework: string[];
  awardsAndActivities?: string[];
  color: AccentColor;
}

export interface ExperienceEntry {
  id: number;
  period: string;
  company: string;
  position: string;
  description: string;
  additionalDescription?: string;
  thirdDescription?: string;
  fourthDescription?: string;
  fifthDescription?: string;
  sixthDescription?: string;
  color: AccentColor;
  category: string;
}

export interface ProjectEntry {
  name: string;
  description: string;
  techStack: string;
  url: string;
  icon: ProjectIcon;
}

export interface IntroLink {
  url: string;
  label: string;
}

export interface IntroResume extends IntroLink {
  filename: string;
}

export interface IntroSection {
  title: string;
  paragraphs: string[];
}

export interface IntroData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: IntroLink;
  github: IntroLink;
  resume: IntroResume;
  aboutMe: IntroSection;
  beyondTheCode: IntroSection;
}
