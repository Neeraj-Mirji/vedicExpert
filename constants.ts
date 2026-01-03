
import { Course, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' }
];

export const COURSES: Course[] = [
  {
    id: '8-foundation',
    grade: 'Grade 8',
    title: 'Pinnacle Foundation',
    description: 'Empowering Young Minds for the Future through critical thinking and innovation.',
    detailedDescription: 'At Vedic Expert, we believe that early exposure to STEM (Science, Technology, Engineering, and Mathematics) fosters critical thinking, problem-solving, and innovation. Our Foundation Program is designed for academically driven Grade 8 students, providing them with a strong foundation in these subjects through hands-on learning and expert mentorship.',
    subjects: ['Advanced Mathematics', 'Conceptual Physics', 'Foundational Chemistry', 'Biological Sciences'],
    features: [
      'Engaging STEM Curriculum with hands-on applications',
      'Competitive Exam Preparation for future Olympiads & JEE',
      'Expert Faculty & Personalized Mentorship',
      'Critical Thinking & Problem-Solving through puzzles',
      'Comprehensive Study Materials & Digital Resources'
    ],
    duration: '250 Hours of Expert Instruction',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    batches: ['March 26, 2025 onwards', 'April 16, 2025 onwards', 'June 11, 2025 onwards'],
    eligibility: [
      'Grade 8 students with a passion for STEM subjects',
      'Students who have scored 75% or above in Mathematics and Science in their Board Exams'
    ],
    syllabus: {
      physics: ['About science', "Newton's First law of Motion and Inertia", 'Linear Motion', 'Newtons Second law and Pressure', 'Vibration and Waves', 'Sound', 'Optics – Reflection', 'Labs: Linear Motion'],
      chemistry: ['States of Matter and Energy', 'Metals and Non Metals', 'Chemical reactions and equation', 'Atomic Structure', 'Measurements in Chemistry', 'Mole Concept', 'Labs: Salt Analysis'],
      biology: ['Cell Structure and Functions', 'Cell Growth and Division', 'Classification', 'Kingdom Plante', 'Introduction to Animals', 'Organisms and their Environment'],
      math: ['Linear Expressions, Equations and Inequalities', 'Linear Functions and Graphs', 'Simultaneous Linear Equations', 'Expansion and factorisation', 'Special algebraic identities', 'Algebraic fractions', 'Direct and Inverse proportions', 'Congruence and Similarity', 'Pythagoras Theorem', 'Probability']
    },
    learningOutcomes: [
      'Consistent delivery of top results in competitive exams',
      'Innovative Learning Approach focusing on understanding',
      'Small batch sizes for one-on-one mentorship',
      'Exposure to real-world STEM applications'
    ]
  },
  {
    id: '9-foundation',
    grade: 'Grade 9',
    title: 'Zenith JEE/NEET Prep',
    description: 'Building a rock-solid conceptual base for professional competitive exams.',
    detailedDescription: 'The Grade 9 program is a high-intensity bridge to professional careers in Medicine and Engineering. We transition students from general school science to specialized domains, emphasizing the logic behind formulas rather than memorization.',
    subjects: ['Calculus Introduction', 'Mechanics', 'Atomic Structure', 'Human Physiology'],
    features: [
      'Bridge to Higher Secondary Science',
      'Advanced Problem Solving Techniques',
      'Weekly Test Series with National Ranking',
      'Direct interaction with IITian Faculty'
    ],
    duration: '300 Hours of Intensive Learning',
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&q=80&w=800',
    batches: ['April 05, 2025', 'May 10, 2025', 'June 20, 2025'],
    eligibility: [
      'Grade 9 students aiming for JEE/NEET',
      'Minimum 80% in previous grade Math/Science'
    ],
    syllabus: {
      physics: ['Units and Dimensions', 'Kinematics', 'Laws of Motion', 'Work, Power and Energy', 'Gravitation', 'Fluids'],
      chemistry: ['Is Matter Around Us Pure?', 'Atoms and Molecules', 'Structure of Atom', 'Chemical Arithmetic', 'Thermodynamics basics'],
      biology: ['The Fundamental Unit of Life', 'Tissues', 'Diversity in Living Organisms', 'Why do we fall ill?', 'Natural Resources'],
      math: ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables', 'Quadrilaterals', 'Circles', 'Surface Areas and Volumes']
    },
    learningOutcomes: ['Mental agility in solving complex mechanics', 'Strong foundation in atomic chemistry', 'Advanced NTSE/Olympiad readiness']
  },
  {
    id: '10-foundation',
    grade: 'Grade 10',
    title: 'Ultimate Cracker Series',
    description: 'The final foundational year aimed at mastering Boards and JEE/NEET basics simultaneously.',
    detailedDescription: 'Our Grade 10 series is a hybrid model that ensures top-tier performance in Board Exams while simultaneously preparing students for the rigors of 11th Grade competitive streams. It is the definitive program for high-achievers.',
    subjects: ['Board Mastery', 'JEE Physics', 'Organic Chemistry', 'Advanced Biology'],
    features: [
      'Board Exam Strategy Sessions',
      'Introduction to 11th Grade Syllabus',
      'Time Management & Exam Temperament Training',
      'Rank Improvement Modules'
    ],
    duration: '350 Hours Comprehensive Program',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    batches: ['March 15, 2025', 'April 12, 2025', 'June 01, 2025'],
    eligibility: [
      'Grade 10 students aiming for Tier-1 Institutes',
      'Consistent academic performance in 9th grade'
    ],
    syllabus: {
      physics: ['Light - Reflection and Refraction', 'The Human Eye', 'Electricity', 'Magnetic Effects of Current', 'Sources of Energy'],
      chemistry: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds', 'Periodic Classification'],
      biology: ['Life Processes', 'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity and Evolution', 'Our Environment'],
      math: ['Real Numbers', 'Polynomials', 'Pair of Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Trigonometry', 'Statistics']
    },
    learningOutcomes: ['Board Topper Preparation', 'Seamless transition to 11th Grade', 'Advanced speed solving with Vedic techniques']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aman Sharma",
    grade: "Class 10",
    achievement: "NTSE Scholar",
    content: "The Vedic methods taught here for calculations changed the way I look at Math. It's so much faster!",
    avatar: "https://i.pravatar.cc/150?u=aman"
  },
  {
    id: 2,
    name: "Priya Verma",
    grade: "Class 9",
    achievement: "Olympiad Gold",
    content: "Vedic Expert faculty doesn't just teach, they inspire. The physics labs are incredible.",
    avatar: "https://i.pravatar.cc/150?u=priya"
  }
];
