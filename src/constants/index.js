import { meta, shopify, starbucks, tesla, autodesk, bluestock, aspirenex, glbajaj, dps, hackathon, deloitte, research, organizinghead } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    firebase,
    flask,
    mysql,
    python,
    streamlit,
    vscode,
    java,
    cpp,
    school
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: streamlit,
        name: "Streamlit",
        type: "Frontend",
    },
    {
        imageUrl: vscode,
        name: "VS Code",
        type: "Development Tools",
    }
];

export const experiences = [
    {
        title: "Software Development Engineer Intern",
        company_name: "Autodesk",
        icon: autodesk,
        iconBg: "#E6F3FF",
        date: "July 2025 - Present",
        points: [
            "Working on developing and maintaining cloud-based solutions for Autodesk's flagship products",
            "Collaborating with cross-functional teams to implement new features and optimize existing systems",
            "Contributing to the development of scalable microservices architecture",
            "Participating in code reviews and implementing best practices for code quality and performance",
            "Utilizing modern technologies like React, Node.js, and cloud services to deliver robust solutions"
        ],
    },
    {
        title: "SDE Intern",
        company_name: "Bluestock Fintech",
        icon: bluestock,
        iconBg: "#2563eb",
        date: "October 2024 - November 2024",
        points: [
            "Designed scalable systems with responsive front-ends and RESTful APIs, reducing integration time by 30% and improving system reliability across deployments",
            "Collaborated with back-end engineers and senior developers to enhance user experience, resulting in a 20% boost in engagement and improved satisfaction ratings"
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "AspireNex",
        icon: aspirenex,
        iconBg: "#7c3aed",
        date: "July 2024 - September 2024",
        points: [
            "Built and maintained responsive web apps using React, HTML, CSS, and JavaScript, integrating 5+ third-party APIs (maps, payments) to expand features and improve user functionality",
            "Collaborated with back-end engineers and designers to optimize user experience and performance, reducing page load time by 20% and increasing user engagement by 15%"
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'AI Car Renting',
        description: 'Designed and built a mobile app for finding, booking, and managing car rentals, integrating AI recommendations for optimized user experience.',
        link: 'https://github.com/adrianhajdin/ai_car_rent',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends through a familiar social media platform.',
        link: 'https://github.com/adrianhajdin/snapgram',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'Developed an AI-powered application that summarizes articles and lengthy texts, enhancing reading comprehension and efficiency.',
        link: 'https://github.com/adrianhajdin/summiz',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'Real Estate Application',
        description: 'Created a web application for real estate listings, facilitating property search, viewing, and management for users.',
        link: 'https://github.com/adrianhajdin/estate',
    }
];

export const education = [
    {
        title: "B.Tech, Computer Science and Engineering (Artificial Intelligence)",
        company_name: "G. L. Bajaj Institute of Technology and Management",
        icon: glbajaj,
        iconBg: "#fbc3bc",
        date: "2022 – 2026",
        points: [
            "GPA: 9.02",
            "Major: Artificial Intelligence",
            "Minor: Cyber Security",
            "Location: Greater Noida, India",
        ],
    },
    {
        title: "Senior Secondary",
        company_name: "Delhi Public School",
        icon: dps,
        iconBg: "#accbe1",
        date: "2020 – 2021",
        points: [
            "Stream: Science (PCM)",
            "Percentage: 94.67%",
            "Location: Rewari, India",
        ],
    },
];

export const achievements = [
    {
        title: "2x Winner: Bharat Shiksha Expo Hackathon",
        description: "Secured consecutive victories in the Bharat Shiksha Expo Hackathon in both 2024 and 2025, demonstrating consistent innovation and problem-solving skills.",
        image: hackathon,
        link: "https://www.linkedin.com/posts/anshsaxena02_hackathon-winner-innovation-activity-7204928682052661248-w3Jm?utm_source=share&utm_medium=member_desktop",
    },
    {
        title: "Deloitte Industrial Visit Selection",
        description: "Selected among the top 30 students for an exclusive industrial visit to Deloitte, gaining insights into industry practices and interacting with recruiters.",
        image: deloitte,
        link: "https://www.linkedin.com/posts/rishi-varshney100_deloitte-industrialvisit-learningexperience-activity-7217610549860188161-vDMZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECquX8B4vRUvzKzmRbFU1v90k3eb4lKdlo",
    },
    {
        title: "IEEE Research Paper Publication",
        description: `Published IEEE research on using machine learning to revolutionize customer query analysis with improved accuracy, efficiency, and real-world impact.`,
        image: research,
        link: "https://www.linkedin.com/posts/rishi-varshney100_machinelearning-firstresearchpaper-customerexperience-activity-7200257922612813824-hLpT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECquX8B4vRUvzKzmRbFU1v90k3eb4lKdlo",
    },
    {
        title: "Organizing Head: National Startup Summit 2024",
        description:
            "Served as the Organizing Head for the National Startup Summit 2024, overseeing all aspects of event planning and execution.",
        image: organizinghead,
        link: "https://www.linkedin.com/posts/rishi-varshney100_teameffort-teamappreciation-dreamteam-activity-7186058765882789888-ZrHN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECquX8B4vRUvzKzmRbFU1v90k3eb4lKdlo",
    },
];