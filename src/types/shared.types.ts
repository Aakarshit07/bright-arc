export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  imageUrl: string;
}

export interface IStep {
  id: string;
  number: string;
  title: string;
  heading: string;
  description: string;
  image: string;
}

export interface IStepsProps {
  steps?: IStep[];
  autoAdvanceInterval?: number;
  initialActiveStep?: string;
}

export interface IUseStepsReturn {
  activeStep: string;
  setActiveStep: (stepId: string) => void;
}

export interface IBlog {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  featured?: boolean;
  imageUrl?: string;
}

export interface IBlogCategory {
  name: string;
  value: string;
  count: number;
}
