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

export const sampleBlogContent = {
  id: "startup-summer-fun",
  title: "What makes Startups so fun in Summer?",
  subtitle:
    "<strong>Exploring the unique energy and opportunities that summer brings to the startup ecosystem</strong><br />",
  author: "Sarah Johnson",
  authorImage: "/placeholder.svg?height=40&width=40&text=SJ",
  date: "June 15, 2024",
  readTime: "8 min read",
  heroImage: "/blog_main.jpeg",
  category: "Consulting",
  content: `
    <div class="blog-content">
      <p class="lead-paragraph">Summer has always held a special place in the startup world. There's something magical about the longer days, the relaxed atmosphere, and the sense of possibility that comes with the season. But what exactly makes startups so much more exciting during these warmer months?</p><br />

      <h2 id="energy-atmosphere"><strong>The Energy and Atmosphere</strong></h2><br />
      <p>The summer months bring a unique energy to startup environments that's hard to replicate during other times of the year. Office spaces become more vibrant, with natural light streaming through windows for longer periods, creating an atmosphere that naturally boosts creativity and productivity.</p><br />
      <p>Many startups take advantage of the season by organizing outdoor team meetings, rooftop brainstorming sessions, and al fresco lunch meetings. This change of scenery often leads to breakthrough ideas and innovative solutions that might not have emerged in traditional indoor settings.</p><br />
      <p>The relaxed dress codes that often accompany summer months also contribute to a more casual, approachable company culture. When everyone's in shorts and t-shirts, hierarchies feel less rigid, and communication flows more freely between team members at all levels.</p><br />

      <h2 id="networking-opportunities"><strong>Enhanced Networking Opportunities</strong></h2><br />
      <p>Summer is conference season in the tech world. From major industry events to smaller, niche gatherings, the warmer months are packed with opportunities to connect, learn, and grow. These events provide startups with invaluable chances to:</p><br />
      <ul>
        <li>Meet potential investors and partners<br /></li>
        <li>Learn from industry leaders and successful entrepreneurs<br /></li>
        <li>Showcase their products and services to a wider audience<br /></li>
        <li>Recruit top talent who might be more open to career changes during this period<br /></li>
      </ul><br />
      <p>The outdoor networking events, rooftop parties, and casual meetups that proliferate during summer create a more relaxed environment for building meaningful professional relationships. People are generally more approachable and open to new connections when they're enjoying good weather and a refreshing drink.</p><br />

      <h2 id="intern-programs"><strong>The Power of Summer Internship Programs</strong></h2><br />
      <p>One of the most significant factors that makes startups exciting during summer is the influx of talented interns. These bright, eager students bring fresh perspectives, cutting-edge knowledge from their academic programs, and an infectious enthusiasm that can revitalize entire teams.</p><br />
      <p>Summer interns often work on special projects that full-time employees might not have time for during the regular business cycle. This leads to innovation in unexpected areas and sometimes results in breakthrough products or features that become central to the company's success.</p><br />
      <p>The mentorship aspect also works both ways – while interns learn valuable real-world skills, full-time employees often find themselves energized by teaching and guiding the next generation of professionals. This dynamic creates a learning environment that benefits everyone involved.</p><br />

      <h2 id="flexibility-work-life"><strong>Increased Flexibility and Work-Life Integration</strong></h2><br />
      <p>Summer naturally lends itself to more flexible work arrangements. Many startups embrace this by offering:</p><br />
      <ul>
        <li>Flexible working hours to accommodate summer activities<br /></li>
        <li>Remote work options for employees who want to travel<br /></li>
        <li>Company-sponsored outdoor activities and team building events<br /></li>
        <li>Extended lunch breaks for outdoor activities<br /></li>
      </ul><br />
      <p>This flexibility doesn't just make employees happier – it often leads to increased productivity and creativity. When people feel trusted to manage their own schedules and work in ways that suit their personal lives, they tend to be more engaged and committed to their work.</p><br />

      <h2 id="community-engagement"><strong>Community and Social Responsibility</strong></h2><br />
      <p>Summer provides unique opportunities for startups to engage with their local communities. Many companies organize volunteer activities, sponsor local events, or participate in community festivals. This engagement serves multiple purposes:</p><br />
      <p>It builds brand awareness in the local market, creates positive associations with the company, and gives employees a sense of purpose beyond their daily work tasks. Team members often report feeling more connected to their company's mission when they see how their work contributes to the broader community.</p><br />
      <p>Environmental initiatives also tend to gain more traction during summer months. Startups might organize beach cleanups, tree planting events, or sustainability challenges that align with the season's focus on outdoor activities and environmental awareness.</p><br />

      <h2 id="product-development"><strong>Accelerated Product Development Cycles</strong></h2><br />
      <p>The combination of increased energy, fresh intern talent, and enhanced collaboration often leads to accelerated product development during summer months. Teams find themselves more willing to experiment with new ideas and take calculated risks.</p><br />
      <p>The "summer project" has become a staple in many tech companies, where teams are encouraged to work on passion projects or explore new technologies that might not fit into the regular product roadmap. Some of today's most successful products started as summer experiments.</p><br />
      <p>The relaxed atmosphere also tends to reduce the fear of failure, encouraging more innovative thinking and bold experimentation. When the stakes feel lower and the environment is more supportive, teams are more likely to push boundaries and discover breakthrough solutions.</p><br />

      <h2 id="funding-landscape"><strong>The Summer Funding Landscape</strong></h2><br />
      <p>Interestingly, summer can be an excellent time for fundraising, despite the common belief that investors are less active during vacation months. Many investors actually have more time for longer, more thoughtful conversations during summer, leading to deeper relationships and better funding outcomes.</p><br />
      <p>The casual nature of summer meetings – perhaps over coffee at an outdoor café or during a walking meeting in the park – can create more authentic connections between entrepreneurs and investors. These relaxed settings often lead to more honest, productive discussions about the business and its potential.</p><br />

      <h2 id="conclusion"><strong>Embracing the Summer Startup Spirit</strong></h2><br />
      <p>The magic of summer in the startup world isn't just about the weather – it's about the mindset shift that comes with the season. The combination of increased energy, enhanced networking opportunities, fresh talent, and a more relaxed atmosphere creates the perfect storm for innovation and growth.</p><br />
      <p>Successful startups learn to harness this seasonal energy, using it to accelerate their growth, strengthen their teams, and build lasting relationships with customers, partners, and investors. By embracing the unique opportunities that summer provides, startups can set themselves up for success that extends far beyond the season itself.</p><br />
      <p>So as the temperature rises and the days get longer, remember that summer isn't just a time for vacation – it's a time for startups to shine, grow, and create the innovations that will shape our future.</p><br />
    </div>
  `,
  sections: [
    { id: "energy-atmosphere", title: "The Energy and Atmosphere", level: 1 },
    {
      id: "networking-opportunities",
      title: "Enhanced Networking Opportunities",
      level: 1,
    },
    {
      id: "intern-programs",
      title: "The Power of Summer Internship Programs",
      level: 1,
    },
    {
      id: "flexibility-work-life",
      title: "Increased Flexibility and Work-Life Integration",
      level: 1,
    },
    {
      id: "community-engagement",
      title: "Community and Social Responsibility",
      level: 1,
    },
    {
      id: "product-development",
      title: "Accelerated Product Development Cycles",
      level: 1,
    },
    {
      id: "funding-landscape",
      title: "The Summer Funding Landscape",
      level: 1,
    },
    {
      id: "conclusion",
      title: "Embracing the Summer Startup Spirit",
      level: 1,
    },
  ],
  comments: [
    {
      id: "1",
      author: "Mike Chen",
      authorImage: "/placeholder.svg?height=40&width=40&text=MC",
      content:
        "This really resonates with my experience at our startup last summer. The energy was incredible!",
      timestamp: "2 days ago",
      status: "approved" as const,
      adminReply: {
        id: "reply-1",
        content:
          "Thanks for sharing your experience, Mike! It's great to hear from someone who's lived this firsthand.",
        timestamp: "1 day ago",
        author: "Sarah Johnson",
      },
    },
    {
      id: "2",
      author: "Lisa Rodriguez",
      content:
        "The point about summer internships is spot on. We hired 3 of our summer interns full-time after graduation.",
      timestamp: "1 day ago",
      status: "approved" as const,
    },
  ],
  isLiked: false,
  likeCount: 342,
};
