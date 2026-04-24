export const myProjects = [
  {
    id: 1,
    title: "GTA VI  Clone",
    description:
      "A high-performance, visually immersive landing page clone of the GTA VI website, featuring high-fidelity assets and responsive design.",
    subDescription: [
      "Developed a modern, high-speed UI using React and Tailwind CSS to mimic the official Rockstar Games aesthetic.",
      "Optimized media delivery for high-definition trailers and image assets to ensure smooth loading states.",
      "Implemented a fully responsive layout ensuring a seamless experience across mobile, tablet, and desktop devices.",
      "Deployed via Netlify with automated CI/CD pipelines for real-time updates and high availability.",
    ],
    href: "https://clonegtavi.netlify.app/",
    logo: "/assets/logos/gta-logo.svg", // Replace with your actual logo path
    image: "/assets/projects/gta-clone.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/logos/gsap.svg",
      },
      {
        id: 4,
        name: "GitHub",
        path: "/assets/logos/github.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Golang Web Scraper",
    description:
      "A concurrent web scraping tool built with Go, designed to extract and process data from complex web structures efficiently.",
    subDescription: [
      "Leveraged Go’s Goroutines and Channels to implement high-concurrency scraping, significantly reducing execution time.",
      "Utilized the Colly framework or Goquery for efficient HTML parsing and data extraction from targeted DOM elements.",
      "Implemented robust error handling and request throttling to bypass anti-scraping mechanisms and ensure reliability.",
      "Designed a modular architecture to export scraped data into various formats like JSON, CSV, or direct database storage.",
    ],
    href: "https://github.com/itsdiwakarsingh/Web_Scraper_Golang",
    logo: "/assets/logos/golang.svg",
    image: "/assets/projects/web-scraper.png", // Replace with your actual screenshot path
    tags: [
      {
        id: 1,
        name: "Golang",
        path: "/assets/logos/Go-Logo_Blue.svg",
      },

      {
        id: 2,
        name: "SQL",
        path: "/assets/logos/sql.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Alexa – Intelligent Voice Assistant",
    description:
      "A versatile Python-based virtual assistant designed to automate desktop tasks and enhance human-computer interaction through NLP.",
    subDescription: [
      "Integrated Speech Recognition and Text-to-Speech (TTS) engines for seamless voice-controlled interactions.",
      "Automated system-level tasks including opening applications, managing files, and executing OS commands via Python.",
      "Developed custom web-scraping modules to fetch real-time data like weather, news, and Wikipedia summaries.",
      "Implemented a modular command architecture, allowing for easy expansion of assistant capabilities and logic.",
    ],
    href: "https://github.com/itsdiwakarsingh/Alexa",
    logo: "/assets/logos/python.svg",
    image: "/assets/projects/alexa-assistant.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Automation", path: "/assets/logos/automation.svg" },
    ],
  },
  {
    id: 4,
    title: "OpenCV Interactive",
    description:
      "A collection of advanced Computer Vision projects focusing on Human-Computer Interaction (HCI) and real-time image processing.",
    subDescription: [
      "Developed high-accuracy hand-tracking and gesture-recognition systems using OpenCV and MediaPipe.",
      "Implemented real-time object detection and tracking algorithms to enable touchless system control.",
      "Optimized frame processing pipelines to achieve high FPS (Frames Per Second) for smooth user interactions.",
      "Explored various color-space transformations and morphological operations for background subtraction and noise reduction.",
    ],
    href: "https://github.com/itsdiwakarsingh/opencv_projects",
    logo: "/assets/logos/opencv.svg",
    image: "/assets/projects/opencv-suite.png",
    tags: [
      { id: 1, name: "OpenCV", path: "/assets/logos/opencv-svgrepo-com.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "NumPy", path: "/assets/logos/numpy-svgrepo-com.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/9955324373",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/diwakar-singh-41b1801b9/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/itsdiwakarsingh_/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
