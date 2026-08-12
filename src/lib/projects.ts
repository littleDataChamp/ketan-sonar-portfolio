export interface Project {
  num: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  href: string;
  technologies: string[];
  challenge: string;
  approach: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    num: "01",
    slug: "national-freight",
    title: "NATIONAL FREIGHT ANALYTICS",
    subtitle: "Indian Railways Strategic Concept",
    category: "Data Science / Cloud",
    description:
      "Built a cloud-based data pipeline for large-scale railway logistics data and developed predictive models for commodity transport demand.",
    image: "/ketan-sonar-portfolio/images/project_cloud.png",
    href: "#",
    technologies: ["AWS", "Python", "SQL", "Power BI", "SageMaker"],
    challenge:
      "Indian Railways handles massive volumes of freight data across hundreds of routes. Understanding commodity transport demand patterns required processing and analysing large-scale logistics datasets.",
    approach:
      "Designed and built a cloud-based data pipeline on AWS for ingesting, cleaning and transforming railway logistics data. Developed predictive models to forecast commodity transport demand across routes.",
    outcome:
      "Delivered a scalable analytics pipeline and demand forecasting system for strategic freight planning.",
  },
  {
    num: "02",
    slug: "fire-detection",
    title: "MISSION-CRITICAL SAFETY",
    subtitle: "CNN-Based Fire Detection",
    category: "Computer Vision",
    description:
      "Achieved ~99% test accuracy in real-time visual threat detection systems.",
    image: "/ketan-sonar-portfolio/images/project_ml.png",
    href: "#",
    technologies: ["Python", "TensorFlow", "Computer Vision", "CNN"],
    challenge:
      "Traditional fire detection systems rely on sensors with limited coverage. A vision-based approach was needed for real-time detection across wider areas with higher accuracy.",
    approach:
      "Built a Convolutional Neural Network trained on visual fire/smoke datasets. Optimised the model for real-time inference to enable rapid threat identification.",
    outcome:
      "Achieved approximately 99% test accuracy in real-time visual threat detection.",
  },
  {
    num: "03",
    slug: "generative-ai",
    title: "LOCALIZED GENERATIVE AI",
    subtitle: "SLM Lead Generation Bot",
    category: "LLM / RAG",
    description:
      "Leveraging LLaMA-3 and RAG architectures for specialized real-estate interactions.",
    image: "/ketan-sonar-portfolio/images/project_llm.png",
    href: "#",
    technologies: ["LLaMA-3", "RAG", "Python", "LangChain", "Vector DB"],
    challenge:
      "Real-estate businesses needed localised, intelligent lead generation that could handle specialised property queries with domain-specific accuracy.",
    approach:
      "Leveraged LLaMA-3 with Retrieval-Augmented Generation (RAG) architecture to build a conversational bot specialised for real-estate interactions and lead qualification.",
    outcome:
      "Delivered a functional AI bot capable of specialised real-estate interactions and automated lead generation.",
  },
  {
    num: "04",
    slug: "biometric-vision",
    title: "SECURE COMPUTER VISION",
    subtitle: "Biometric Feature Detection",
    category: "Computer Vision",
    description:
      "High-accuracy biometric identification pipelines for secure environments.",
    image: "/ketan-sonar-portfolio/images/project_cv.png",
    href: "#",
    technologies: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
    challenge:
      "Secure environments require reliable biometric identification that works accurately under varying conditions including lighting and angle changes.",
    approach:
      "Developed a computer vision pipeline for biometric feature extraction and matching. Built robust preprocessing to handle real-world variation in input quality.",
    outcome:
      "Created a high-accuracy biometric identification system suitable for secure deployment.",
  },
  {
    num: "05",
    slug: "safark",
    title: "SAFARK",
    subtitle: "Private Couple Planner",
    category: "Full-Stack / Product",
    description: "A personal product built with modern web technologies.",
    image: "/ketan-sonar-portfolio/images/project_safark.png",
    href: "https://safark.lovable.app/",
    technologies: ["React", "TypeScript", "Full-Stack", "Product Design"],
    challenge:
      "Couples needed a private, elegant planning tool that felt personal rather than generic.",
    approach:
      "Designed and built a modern full-stack web application focused on privacy, usability and clean visual design.",
    outcome:
      "Shipped a live product available at safark.lovable.app.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}
