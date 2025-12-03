import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Cakeryimg from "@/assets/images/cakeryimg.png";

export const experience = [
  {
    role: "Product Manager | Retail Technology",
    company: "LumenSoft Technologies",
    year: "2015 - Present",
    description: [
      "Designed and delivered the roadmap for Nimbus RMS, a cloud-based retail management system used globally.",
      "Led modernization of legacy ERP modules into intuitive, React-based interfaces.",
      " Developed FBR Digital Invoicing features enabling compliance for thousands of retail businesses.",
      "Designed streamlined procurement workflows (requisitions → approvals → POs → GRNs → pricing rules).",
    ],
  },
  {
    role: " Team Lead → Sr. Software Engineer → Software Engineer",
    company: "LumenSoft Technologies",
    year: "2007 - 2015",
    description: [
      "Contributed to core ERP modules (inventory, POS, supply chain, restaurant, procurement).",
      "Designed retail workflows, pricing structures, promotions, and discounts modules.",
      "Developed APIs and backend logic that later shaped major product features.",
    ],
  },
];

export const education = [
  {
    degree: "MS Software Project Management (SPM)",
    institution: "FAST NUCES (2015–2017)",
    description:
      "I completed my MS in Software Project Management from FAST NUCES, where I strengthened my understanding of project planning, software development processes, and team leadership. The program helped me build a strong foundation in managing complex technical projects, improving delivery workflows, and aligning business needs with engineering outcomes.",
  },
  {
    degree: "MCS, Computer Science",
    institution: "Gomal University (2003–2005)",
    description:
      "I earned my Master of Computer Science degree from Gomal University. This is where I developed my core technical skills in programming, databases, and software development. The program gave me a strong base in computer science concepts, which has supported my growth throughout my career.",
  },
  // {
  //   degree: "Matric",
  //   institution: "Oxford Public School",
  //   description:
  //     "Studied mathematics, physics, and computer science. Participated in science exhibitions and developed software using Visual Basic and C++.",
  // },
];

export const summary = `With more than eighteen years of experience across cloud engineering, 
                        AI automation, product development, and enterprise software delivery, 
                        I specialize in building and scaling retail ERP systems, SaaS platforms, 
                        and AI-enabled applications. I’ve led the architecture and development of 
                        major solutions including Candela RMS and Nimbus RMS, driving modernization, 
                        cloud transformation, and system performance improvements for retailers across 
                        global markets.
                        My background combines hands-on engineering expertise with product leadership, 
                        enabling me to design scalable systems, optimize infrastructure, and deliver high-impact 
                        software that supports both operational efficiency and business growth.`;

export const ProtfolioProjects = [
  {
    company: "SOFTON LTD",
    year: "2025",
    title: "The Cakery",
    link: "https://thecakery.uk/",
    techStack: "Next.js, TypeScript, Tailwind CSS, MongoDB, Cloudinary",
    result: [
      { title: "Responsive React/Next.js UI" },
      { title: "Optimized APIs & MongoDB" },
      { title: "Boosted performance and speed" },
    ],
    fullDetails: [
      {
        title:
          "The Cakery is a custom cake ordering platform built with Next.js, TypeScript, Tailwind CSS, MongoDB, and Cloudinary.",
      },
      {
        title:
          "Implemented dynamic category navigation and shop page with MongoDB integration.",
      },
      {
        title:
          "Built product filters, dynamic data fetching, and skeleton loaders for smooth UX.",
      },
      {
        title:
          "Developed Super Admin Panel with real-time Pending/Completed Orders tracking.",
      },
      {
        title:
          "Created Product Management Form and fixed Order Number & Status updates.",
      },
      {
        title:
          "Integrated SSO (Single Sign-On) for seamless branch admin login.",
      },
      {
        title:
          "Optimized APIs and improved frontend performance across all panels.",
      },
    ],
    image: Cakeryimg,
  },

  {
    company: "NetSol Technologies",
    year: "2023",
    title: "Management System",
    result: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    fullDetails: [
      {
        title:
          "The Cakery is a custom cake ordering platform built with Next.js, TypeScript, Tailwind CSS, MongoDB, and Cloudinary.",
      },
      {
        title:
          "Implemented dynamic category navigation and shop page with MongoDB integration.",
      },
      {
        title:
          "Built product filters, dynamic data fetching, and skeleton loaders for smooth UX.",
      },
      {
        title:
          "Developed Super Admin Panel with real-time Pending/Completed Orders tracking.",
      },
      {
        title:
          "Created Product Management Form and fixed Order Number & Status updates.",
      },
      {
        title:
          "Integrated SSO (Single Sign-On) for seamless branch admin login.",
      },
      {
        title:
          "Optimized APIs and improved frontend performance across all panels.",
      },
    ],
    link: "http://youtube.com",
    image: lightSaasLandingPage,
  },
  {
    company: "NetSol Technologies",
    year: "2023",
    title: "AI Startup Landing Page",
    result: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    fullDetails: [
      {
        title:
          "The Cakery is a custom cake ordering platform built with Next.js, TypeScript, Tailwind CSS, MongoDB, and Cloudinary.",
      },
      {
        title:
          "Implemented dynamic category navigation and shop page with MongoDB integration.",
      },
      {
        title:
          "Built product filters, dynamic data fetching, and skeleton loaders for smooth UX.",
      },
      {
        title:
          "Developed Super Admin Panel with real-time Pending/Completed Orders tracking.",
      },
      {
        title:
          "Created Product Management Form and fixed Order Number & Status updates.",
      },
      {
        title:
          "Integrated SSO (Single Sign-On) for seamless branch admin login.",
      },
      {
        title:
          "Optimized APIs and improved frontend performance across all panels.",
      },
    ],
    link: "http://youtube.com",
    image: aiStartupLandingPage,
  },
];
