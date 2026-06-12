export const siteConfig = {
  name: "Shubham Kumar Rohit",
  ex: " | Ex-Doubtnut (50M+ users)",
  title: "Software Engineering Head @ Statiq",
  subtitle: "Python | Go Lang | AWS | Microservices",
  description: "Portfolio website of Shubham Kumar Rohit",
  accentColor: "#1e40af",
  stats: [
    { value: "8+", label: "Years Experience" },
    { value: "50M+", label: "Users Served" },
    { value: "48K+", label: "EV Chargers Powered" },
    { value: "3.8L+", label: "Concurrent Sockets" },
  ],
  social: {
    phone: "+91-8699616342",
    email: "progShubham@gmail.com",
    linkedin: "https://www.linkedin.com/in/shubhamkumarrohit/",
    twitter: "https://x.com/progShubham",
    github: "https://github.com/progshubham",
  },
  seo: {
    description: "Shubham Kumar Rohit - Software Engineering Head at Statiq | Ex-Doubtnut (50M+ users). Experienced in Python, Go, AWS, Microservices & building scalable backend.",
    keywords: "Shubham Kumar Rohit, progShubham, Software Engineer, System Architect, Python, Go Lang, AWS, Microservices, Statiq, Doubtnut, EV Charging, WebSocket, Backend Developer, Full Stack Developer, High Concurrency Systems",
    url: "https://progshubham.github.io",
    image: "https://github.com/progshubham.png",
    twitterHandle: "@progShubham",
  },
  aboutMe: ["I’m a software engineer and system architect with 8+ YOE passionate about building systems that scale seamlessly and solve real-world problems. I enjoy designing high-performance, reliable, and maintainable architectures, whether it’s powering real-time user communication, large-scale payment systems, or distributed cloud platforms.",
    "Over the years, I’ve led backend and system design for India’s largest EV charging ecosystem at Statiq, built consumer-facing platforms serving 50M+ users at Doubtnut, and developed scalable services for millions of daily interactions at Coolwinks.",
    "Beyond technology, I focus on team mentorship, clean engineering practices, and fostering collaboration, believing that great software comes from both robust systems and empowered teams."
  ],
  skills: [
    "Python",
    "Go Lang",
    "Node.js",
    "FastAPI",
    "AWS",
    "Microservices",
    "System Design",
    "WebSocket",
    "Kafka",
    "Redis",
    "ElasticSearch",
    "MySQL",
    "MongoDB",
    "Docker",
  ],
  projects: [
  {
    name: "Payflow",
    company: "Statiq",
    description:
      "Centralized payment service supporting multiple payment methods, smart routing, refunds, and dynamic payment link generation. Enables seamless payment orchestration across platforms with Juspay, RazorPay, SBI ePay, PayU, Tata Wallet etc integrations and robust API architecture.",
    skills: ["GoLang", "AWS", "RDS", "Redis", "Microservices"],
  },
  {
    name: "Pigeon",
    company: "Statiq",
    description:
      "Centralized notification service for managing multi-channel alerts across email, SMS, WhatsApp, and push notifications. Built for scale and reliability with real-time delivery tracking and analytics.",
    skills: ["Python", "Kafka", "Redis", "AWS Lambda", "SQS", "ElasticSearch"],
  },
  {
    name: "OCPP 1.6 EV Charging",
    company: "Statiq",
    description:
      "High-concurrency WebSocket-based system supporting over 48,000 concurrent EV chargers. Designed for low-latency, real-time communication between chargers and backend, ensuring transaction reliability and uptime.",
    skills: ["FastAPI", "WebSocket", "Redis", "MySQL", "ElasticSearch", "AWS"],
  },
  {
    name: "StudyGroup",
    company: "Doubtnut",
    description:
      "Scalable backend for real-time group learning and doubt-solving sessions with chat, media sharing, and live notifications, used by millions of students across India.",
    skills: ["Node.js", "Socket.io", "MongoDB", "Redis", "AWS"],
  },
],
  experience: [
  {
    company: "Statiq",
    title: "Software Engineering Head",
    url: "https://statiq.in",
    dateRange: "Oct 2022 - Present",
    bullets: [
      "Leading the backend and system architecture for India’s largest EV charging ecosystem, enabling seamless operations across 48K+ chargers and 3.8L+ concurrent user sockets with high scalability and reliability.",
      "Led backend migration of the MobileApp from a monolithic to microservices architecture using API Gateway, Traefik, and AWS Route53, resulting in 3x faster deployments and global traffic routing support.",
      "End-to-end designed and migrated Shell Single-Tenant system to Statiq Multi-Tenant architecture with zero downtime and full data integrity.",
      "Developed the PayFlow payment microservice with smart payment routing, integrating Razorpay, Juspay, Amazon Pay, PayU and TataEV Wallet, reducing transaction processing time by 35% and increasing reliability by 20%.",
      "Implemented ElasticSearch Hot-Warm Tiering to separate frequently accessed logs from archival data, reducing log storage costs by 80%.",
      "Optimized RDS by tuning queries, indexing, and pooling; reduced CPU usage by 85% and improved query speed by 60%.",
      "Designed high-concurrency WebSocket systems for OCPP 1.6 and real-time user communication achieving sub-200ms latency.",
      "Engineered Pigeon, a centralized communication microservice in Go, integrating FCM, Gupshup, Mailjet, and Exotel IVR to unify messaging workflows, increase delivery efficiency by 40%.",
      "Applied Redis key compression using prefix-based encoding across high-throughput services, achieving 80% reduction in memory usage.",
    ],
  },
  {
    company: "Doubtnut",
    title: "Software Development Engineer II",
    url: "https://doubtnut.com",
    dateRange: "Jan 2021 - Oct 2022",
    bullets: [
      "Built the DN-Shorts (Video Reels) feature with a real-time, session-aware recommendation algorithm, increasing in-app engagement time by 13%; feature scaled to support 2.5–3 million DAUs.",
      "Designed and implemented a wallet system from scratch, integrating 3rd-party reward providers (Paytm, Myntra, Amazon, Zomato, etc.) for seamless voucher redemption and user incentives.",
      "Developed the Study Group feature enabling real-time peer-to-peer doubt resolution with group creation, admin privileges, and moderation tools; system handled 8–10 million daily messages with high reliability.",
      "Optimized API performance and database queries across multiple services, resulting in 35% reduction in response time and improved overall system throughput under high load."
    ],
  },
  {
    company: "Coolwinks",
    title: "Senior Software Developer",
    dateRange: "Jan 2018 - Jan 2021",
    bullets: [
      "Developed scalable backend systems from scratch for Coolwinks Android & iOS apps, supporting over 1 million+ users with an uptime of 99.9%.",
      "Integrated 4 payment gateways and digital wallets, enabling 100K+ monthly transactions with an auto-refund feature that reduced refund TAT by 70%.",
      "Designed an AI-powered “Cool Lenses” recommendation engine that increased lens conversion rate by 15% through personalized suggestions.",
      "Built and maintained a custom CRM dashboard used by 50+ support agents, integrating IVR and AI chatbot support to handle 20K+ monthly queries.",
      "Implemented a high-performance PWA for Coolwinks.com, improving load times by 40% and enabling seamless in-app shopping via PhonePe."
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
    link: "https://www.sbssugsp.ac.in",
    dateRange: "2013 - 2017",
    achievements: [
      "Served as President of the Computer Society of India (CSI) at Beant College of Engineering & Technology, Gurdaspur.",
      "Led multiple technical workshops and coding events on Java, C++, and emerging web technologies.",
    ],
  },
  {
    school: "Kendriya Vidyalaya, Patna",
    degree: "Senior Secondary (10+2), Science",
    link: "https://no1patna.kvs.ac.in",
    dateRange: "2011 - 2013",
    achievements: [],
  },
],
};
