export const siteConfig = {
  name: "Shubham Kumar Rohit",
  title: "Senior Software Engineer",
  description: "Portfolio website of Shubham Kumar Rohit",
  accentColor: "#1d4ed8",
  social: {
    email: "progShubham@example.com",
    linkedin: "https://www.linkedin.com/in/shubhamkumarrohit/",
    twitter: "https://x.com/progShubham",
    github: "https://github.com/progshubham",
  },
  aboutMe:
    "I’m Shubham Kumar, a Software Lead with 8+ years of experience in designing and scaling distributed, microservice-based systems. At Statiq, I lead backend architecture for India’s EV charging infrastructure, focusing on high-concurrency systems, WebSockets, and event-driven communication. \n My expertise spans GoLang, Python, AWS, Redis, Kafka, and ElasticSearch, with a strong emphasis on system design, performance optimization, and reliability engineering. I enjoy building scalable architectures that enable real-time data flow and seamless user experiences.",
  skills: ["Python", "Go Lang", "AWS", "ElasticSearch", "Redis", "MySQL"],
  projects: [
  {
    name: "Payflow",
    description:
      "Centralized payment service supporting multiple payment methods, smart routing, refunds, and dynamic payment link generation. Enables seamless payment orchestration across platforms with Juspay, RazorPay, SBI ePay, PayU, Tata Wallet etc integrations and robust API architecture.",
    link: "https://statiq.in",
    skills: ["GoLang", "AWS", "RDS", "Redis", "Microservices"],
  },
  {
    name: "Pigeon",
    description:
      "Centralized notification service for managing multi-channel alerts across email, SMS, WhatsApp, and push notifications. Built for scale and reliability with real-time delivery tracking and analytics.",
    link: "https://statiq.in",
    skills: ["Python", "Kafka", "Redis", "AWS Lambda", "SQS", "ElasticSearch"],
  },
  {
    name: "OCPP 1.6 EV Charging Solution",
    description:
      "High-concurrency WebSocket-based system supporting over 48,000 concurrent EV chargers. Designed for low-latency, real-time communication between chargers and backend, ensuring transaction reliability and uptime.",
    link: "https://statiq.in",
    skills: ["FastAPI", "WebSocket", "Redis", "MySQL", "ElasticSearch", "AWS"],
  },
  {
    name: "StudyGroup (Doubtnut)",
    description:
      "Scalable backend for real-time group learning and doubt-solving sessions with chat, media sharing, and live notifications, used by millions of students across India.",
    link: "https://doubtnut.com",
    skills: ["Node.js", "Socket.io", "MongoDB", "Redis", "AWS"],
  },
],
  experience: [
  {
    company: "Statiq",
    title: "Head of Software Engineering",
    dateRange: "Oct 2022 - Present",
    bullets: [
      "Leading backend and system architecture for India’s EV charging infrastructure, powering 48K+ chargers and 3.8L+ concurrent user sockets.",
      "Led migration of Monolithic MobileApp service to a distributed Microservices architecture, improving scalability, fault isolation, and deployment velocity.",
      "End-to-end designed and migrated Shell Single-Tenant system to Statiq Multi-Tenant architecture with zero downtime and full data integrity.",
      "Architected and scaled core platforms like Payflow (payment orchestration) and Pigeon (notification service).",
      "Designed high-concurrency WebSocket systems for OCPP 1.6 and real-time user communication achieving sub-200ms latency.",
      "Drove observability, monitoring, and reliability initiatives using AWS, Redis, Kafka, and ElasticSearch.",
      "Mentoring engineering teams, enforcing design standards, and fostering a culture of ownership and system thinking.",
    ],
  },
  {
    company: "Doubtnut",
    title: "Software Development Engineer II",
    dateRange: "Jan 2021 - Oct 2022",
    bullets: [
      "Built real-time group learning and collaboration system (StudyGroup) using Node.js, Socket.io, and Redis.",
      "Implemented scalable backend services supporting millions of concurrent students.",
      "Improved reliability, fault tolerance, and cost optimization through async task queues and caching layers.",
    ],
  },
  {
    company: "Coolwinks Technologies Pvt. Ltd.",
    title: "Senior Software Developer",
    dateRange: "Jan 2018 - Jan 2021",
    bullets: [
      "Developed and optimized scalable backend REST APIs for Coolwinks e-commerce app (Android & iOS).",
      "Integrated multiple payment gateways with smart refund and wallet systems.",
      "Designed AI-driven lens recommendation system improving personalization and conversion rates.",
      "Enhanced platform SEO and analytics automation; awarded 'Star Employee' for outstanding contributions.",
    ],
  },
  {
    company: "KineticX Tech Solutions Pvt. Ltd.",
    title: "Software Engineer",
    dateRange: "Jul 2017 - Jan 2018",
    bullets: [
      "Developed Kx-CRM v2.0 from scratch using Flask and Angular, streamlining sales and marketing workflows.",
      "Built Docker-based deployment automation tool for CRM/ERP trials.",
      "Enhanced Kx-ERP modules and optimized core backend performance.",
    ],
  },
  {
    company: "Sportido",
    title: "Backend Developer Intern",
    dateRange: "Jan 2017 - Jun 2017",
    bullets: [
      "Developed and optimized REST APIs using Flask and MySQL for the sports discovery platform.",
      "Contributed to backend architecture, schema design, and performance optimization.",
    ],
  },
],
  education: [
  {
    school: "Punjab Technical University",
    degree: "Bachelor of Technology (B.Tech.) in Computer Science Engineering",
    dateRange: "2013 - 2017",
    achievements: [
      "Graduated with specialization in Computer Science and Engineering.",
      "Served as President of the Computer Society of India (CSI) at Beant College of Engineering & Technology, Gurdaspur.",
      "Led multiple technical workshops and coding events on Java, C++, and emerging web technologies.",
    ],
  },
  {
    school: "Kendriya Vidyalaya, Patna",
    degree: "10+2 (Physics, Chemistry, Mathematics)",
    dateRange: "2011 - 2013",
    achievements: [
      "Excelled in core science subjects with strong analytical and problem-solving foundation.",
      "Represented school in regional academic and science competitions.",
      "Actively participated in leadership and discipline committees, fostering teamwork and responsibility.",
    ],
  },
  {
    school: "Kendriya Vidyalaya, Jehanabad",
    degree: "Matriculation",
    dateRange: "2002 - 2011",
    achievements: [
      "Scout & Guide Captain and active participant in academic and leadership activities.",
      "Consistent top rank holder throughout academic years.",
    ],
  },
],
};
