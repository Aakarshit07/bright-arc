import type { IBlog, IBlogCategory } from "@/types/shared.types";

export const blogCategories: IBlogCategory[] = [
  { name: "All", value: "all", count: 42 },
  { name: "Mentorship", value: "mentorship", count: 15 },
  { name: "Consulting", value: "consulting", count: 12 },
  { name: "Thought Leadership", value: "thought-leadership", count: 15 },
];

export const blogData: IBlog[] = [
  {
    id: "1",
    title: "From Beginner to Pro Coding Masterclass",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    author: "John Smith",
    date: "Dec 15, 2024",
    category: "mentorship",
    featured: true,
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "2",
    title: "What makes Startups so fun in summer?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    author: "Sarah Johnson",
    date: "Dec 12, 2024",
    category: "consulting",
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "3",
    title: "Learn how to Trade in 2025",
    description:
      "Discover the fundamentals of trading in the modern market. Learn strategies, risk management, and the mindset needed to succeed in trading.",
    author: "Mike Davis",
    date: "Dec 10, 2024",
    category: "thought-leadership",
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "4",
    title: "Building with digital technology",
    description:
      "Explore how digital transformation is reshaping industries and learn how to leverage technology for business growth and innovation.",
    author: "Emily Chen",
    date: "Dec 8, 2024",
    category: "consulting",
    featured: true,
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "5",
    title: "Mastering Leadership Skills",
    description:
      "Essential leadership principles that every professional should know. Learn how to inspire teams and drive organizational success.",
    author: "Robert Wilson",
    date: "Dec 5, 2024",
    category: "mentorship",
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "6",
    title: "The Future of Remote Work",
    description:
      "Analyzing trends and predictions for the future of remote work. How companies are adapting to the new normal of distributed teams.",
    author: "Lisa Anderson",
    date: "Dec 3, 2024",
    category: "thought-leadership",
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "7",
    title: "Startup Funding Strategies",
    description:
      "A comprehensive guide to securing funding for your startup. From seed rounds to Series A, learn what investors look for.",
    author: "David Brown",
    date: "Dec 1, 2024",
    category: "consulting",
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "8",
    title: "Personal Branding for Professionals",
    description:
      "Build a strong personal brand that opens doors to new opportunities. Learn strategies for online presence and networking.",
    author: "Jennifer Lee",
    date: "Nov 28, 2024",
    category: "mentorship",
    featured: true,
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "9",
    title: "AI and Machine Learning Trends",
    description:
      "Stay ahead of the curve with the latest AI and ML trends. Understanding how artificial intelligence is transforming industries.",
    author: "Alex Thompson",
    date: "Nov 25, 2024",
    category: "thought-leadership",
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "10",
    title: "Effective Team Management",
    description:
      "Learn proven strategies for managing high-performing teams. From communication to conflict resolution and performance optimization.",
    author: "Maria Garcia",
    date: "Nov 22, 2024",
    category: "mentorship",
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "11",
    title: "Digital Marketing Mastery",
    description:
      "Master the art of digital marketing with proven strategies for social media, content marketing, and customer acquisition.",
    author: "Kevin Park",
    date: "Nov 20, 2024",
    category: "consulting",
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "12",
    title: "Innovation in Healthcare",
    description:
      "Exploring breakthrough innovations in healthcare technology and how they're improving patient outcomes and operational efficiency.",
    author: "Dr. Amanda White",
    date: "Nov 18, 2024",
    category: "thought-leadership",
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "13",
    title: "Sustainable Business Practices",
    description:
      "How companies are integrating sustainability into their core business strategies and the impact on long-term success.",
    author: "Green Business Expert",
    date: "Nov 15, 2024",
    category: "consulting",
    imageUrl: "/placeholder_image.jpg",
  },
  {
    id: "14",
    title: "Career Transition Guide",
    description:
      "Navigate career changes successfully with expert advice on skill development, networking, and strategic planning.",
    author: "Career Coach Pro",
    date: "Nov 12, 2024",
    category: "mentorship",
    imageUrl: "/placeholder_image.jpg",
  },
];
