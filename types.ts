
export interface Syllabus {
  physics: string[];
  chemistry: string[];
  biology: string[];
  math: string[];
}

export interface Course {
  id: string;
  grade: string;
  title: string;
  description: string;
  detailedDescription: string;
  subjects: string[];
  features: string[];
  duration: string;
  image: string;
  batches: string[];
  eligibility: string[];
  syllabus: Syllabus;
  learningOutcomes: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  grade: string;
  achievement: string;
  content: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}
