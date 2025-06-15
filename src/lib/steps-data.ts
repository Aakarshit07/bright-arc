import type { IStep } from "@/types/shared.types";

export const DEFAULT_STEPS: IStep[] = [
  {
    id: "mentorship",
    number: "1",
    title: "Mentorship - Admission Counselling",
    heading: "One-on-One Guidance from Industry Experts",
    description:
      "Connect with experienced mentors who've walked the path you're on. Whether you're starting out or seeking direction, we're here to help you grow, learn, and thrive.",
    image: "/placeholder.svg?height=300&width=400&text=Mentorship+Image",
  },
  {
    id: "thought-leadership",
    number: "2",
    title: "Thought leadership - Industry Insights and Academic Writing",
    heading: "Expert Industry Insights & Academic Excellence",
    description:
      "Gain access to cutting-edge industry knowledge and academic writing expertise. Our thought leaders share valuable insights to help you stay ahead in your field.",
    image:
      "/placeholder.svg?height=300&width=400&text=Thought+Leadership+Image",
  },
  {
    id: "consulting",
    number: "3",
    title: "Consulting - Content Strategy & Marketing",
    heading: "Strategic Content & Marketing Solutions",
    description:
      "Transform your brand with our comprehensive content strategy and marketing consulting. We help you create compelling narratives that resonate with your audience.",
    image: "/placeholder.svg?height=300&width=400&text=Consulting+Image",
  },
];

export const DEFAULT_AUTO_ADVANCE_INTERVAL = 20000; // 20 seconds
