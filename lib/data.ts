export const stats = [
  { value: "10K+", label: "Professionals Trained For Exceptional Career Success" },
  { value: "200+", label: "Sessions Delivered With Unmatched Learning Excellence" },
  { value: "5K+", label: "Active Learners Engaged In Dynamic Courses" },
];
export const partners = ["Reliance Industries Limited", "HCL", "IBM", "CRIF", "ADP", "Bayer"];
export type EdgeItem = {
  title: string;
  detail: string;
};
export const edgeItems: EdgeItem[] = [
  { title: "Tailored Solutions", detail: "Programs customized to your organization's goals and challenges." },
  { title: "Expert Guidance", detail: "Learn from industry leaders with real-world success." },
  { title: "Innovative Framework", detail: "Proprietary methods for impactful, application-driven results." },
  { title: "Advanced Technology", detail: "State-of-the-art LMS for seamless learning experiences." },
  { title: "Diverse Offerings", detail: "Courses across industries, skill levels, and emerging fields." },
  { title: "Proven Impact", detail: "Trusted by leading organizations for measurable ROI." },
  { title: "Flexible Delivery", detail: "Online and offline options tailored to your needs." },
];
export type Domain = {
  name: string;
};
export const domains: Domain[] = [
  { name: "Product & Innovation Hub" },
  { name: "Gen-AI Mastery" },
  { name: "Leadership Elevation" },
  { name: "Tech & Data Insights" },
  { name: "Operations Excellence" },
  { name: "Digital Enterprise" },
  { name: "Fintech Innovation Lab" },
];
export type Segment = {
  title: string;
  detail: string;
};
export const segments: Segment[] = [
  { title: "Program Specific", detail: "Certificate, Executive, Post Graduate Certificate" },
  { title: "Industry Specific", detail: "IT, Healthcare, Retail, Finance, Education, Manufacturing" },
  { title: "Topic Specific", detail: "Machine Learning, Design, Analytics, Cybersecurity, Cloud" },
  { title: "Level Specific", detail: "Senior Leadership, Mid-Career Professionals, Freshers" },
];
export type Persona = {
  title: string;
  detail: string;
  eligible: boolean;
};
export const personas: Persona[] = [
  { title: "Tech Professionals", detail: "Enhance expertise, embrace tech, drive innovation.", eligible: true },
  { title: "Non-Tech Professionals", detail: "Adapt digitally, collaborate in tech environments.", eligible: false },
  { title: "Emerging Professionals", detail: "Develop powerful skills for rapid career growth.", eligible: true },
  { title: "Senior Professionals", detail: "Strengthen leadership, enhance strategic decisions.", eligible: true },
];
export const catFramework = [
  { title: "Concept", detail: "Foundational knowledge for deep subject understanding." },
  { title: "Application", detail: "Practical implementation through real-world scenarios." },
  { title: "Tools", detail: "Resources and techniques for effective skill mastery." },
];
export const deliverySteps = [
  { title: "Skill Gap Analysis", detail: "Assess team skill gaps and developmental needs." },
  { title: "Customized Training Plan", detail: "Create a tailored roadmap addressing organizational goals." },
  { title: "Flexible Program Delivery", detail: "Deliver adaptable programs aligned with industry and organizational needs." },
];
export type FAQItem = {
  question: string;
  answer: string;
  category: "About the Course" | "About the Delivery" | "Miscellaneous";
};
export const faqs: FAQItem[] = [
  {
    question: "What types of corporate training programs does Accredian offer?",
    answer:
      "We offer cohort-based programs across Product & Innovation, Gen-AI, Leadership, Tech & Data, Operations, Digital Enterprise, and Fintech — each customizable to your organization's goals.",
    category: "About the Course",
  },
  {
    question: "What domain specializations are available?",
    answer:
      "Programs span Product & Innovation Hub, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab.",
    category: "About the Course",
  },
  {
    question: "Do you offer online and offline delivery?",
    answer:
      "Yes — programs can be delivered fully online, offline, or in a hybrid format depending on what works for your team.",
    category: "About the Delivery",
  },
  {
    question: "How is training customized to our organization?",
    answer:
      "We start with a skill gap analysis, then build a tailored training plan mapped to your organization's goals before delivery.",
    category: "About the Delivery",
  },
  {
    question: "Who can enroll in enterprise programs?",
    answer:
      "Programs are designed for tech professionals, non-tech professionals, emerging professionals, and senior professionals alike.",
    category: "Miscellaneous",
  },
];
export const testimonials = [
  {
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    partner: "ADP",
  },
  {
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    partner: "Bayer",
  },
];

