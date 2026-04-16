export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tools: string[];
  link?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  organization: string;
  duration: string;
  contributions: string[];
}

export interface Skill {
  name: string;
  icon: string;
}
