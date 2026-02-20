import { meta, shopify, starbucks, tesla, autodesk, bluestock, aspirenex, deccanaiexperts, SFT, patent, glbajaj, dps, hackathon, deloitte, research, organizinghead, finxthon } from "../assets/images";
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
    school,
    leetcode,
    postman,
    bruno,
    splunk,
    dynatrace,
    sonarqube,
    launchdarkly,
    ec2
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
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: streamlit,
        name: "Streamlit",
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
        imageUrl: postman,
        name: "Postman",
        type: "Development Tools",
    },
    {
        imageUrl: bruno,
        name: "Bruno",
        type: "Development Tools",
    },
    {
        imageUrl: splunk,
        name: "Splunk",
        type: "Monitoring & Observability",
    },
    {
        imageUrl: dynatrace,
        name: "Dynatrace",
        type: "Monitoring & Observability",
    },
    {
        imageUrl: sonarqube,
        name: "SonarQube",
        type: "Development Tools",
    },
    {
        imageUrl: ec2,
        name: "AWS EC2",
        type: "Cloud & Infrastructure",
    },
    {
        imageUrl: launchdarkly,
        name: "LD",
        type: "Cloud & Infrastructure",
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
        imageUrl: vscode,
        name: "VS Code",
        type: "Development Tools",
    }
];

export const experiences = [
    {
        title: "Deccan AI Experts",
        company_name: "AI Data Specialist",
        icon: deccanaiexperts,
        iconBg: "#4F46E5",
        date: "Feb 2026 - Present",
        points: [
            "Top 1% Experts Shaping Tomorrow's AI - Working under Project Illusion, contributing to training AI models through Reinforcement Learning from Human Feedback (RLHF) with Supervised Fine Tuning (SFT)",
            "Collaborating with cross-functional AI teams to evaluate, annotate, and improve multi-modal model outputs across text, image, audio, and video tasks",
            "Performing multimodal annotation across video datasets including hallucination detection, semantic labeling, image classification & captioning and scene understanding"
        ],
    },
    {
        title: "Autodesk",
        company_name: "SDE Intern",
        icon: autodesk,
        iconBg: "#0066CC",
        date: "July 2025 - Dec 2025",
        points: [
            "Built Fusion Support AI Assist, an AI-powered productivity tool for the Autodesk Fusion 360 ecosystem (deployed on AWS EC2) that reduced analysis time from 30 min to 15 sec, improving internal productivity",
            "Presented Fusion Support AI Assist at the Autodesk Global Event: PDMS-AI Pechakucha'25, where the project received appreciation from PDMS-VP and was nominated for TechX under PHR team",
            "Contributed to Fusion Team backend on QuickSilver initiatives such as Personal Hub Retirement (PHR) and Folder-Level Project Transfer (FLPT), enabling large-scale data migration & automation with a 98%+ success rate across 500k hubs",
            "Led the Apigee migration for Folder Level Project Transfer and migrated 15+ critical APIs to Apigee",
            "Proactively monitored PHR and resolved major issues by fixing 25+ data fixes and 15+ customer incidents",
            "Maintained and cleaned up 10+ feature flags to improve code quality and reduce technical debt",
            "Received 3 Awards from Sr. Director, Director and Scrum Master for outstanding performance throughout the internship"
        ],
    },
    {
        title: "Bluestock Fintech",
        company_name: "SDE Intern",
        icon: bluestock,
        iconBg: "#2563eb",
        date: "October 2024 - November 2024",
        points: [
            "Designed scalable systems with responsive front-ends and RESTful APIs, reducing integration time by 30% and improving system reliability across deployments",
            "Collaborated with back-end engineers and senior developers to enhance user experience, resulting in a 20% boost in engagement and improved satisfaction ratings"
        ],
    },
    {
        title: "AspireNex",
        company_name: "Web Development Intern",
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
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Rishivarshney100',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rishi-varshney100/',
    },
    {
        name: 'LeetCode',
        iconUrl: leetcode,
        link: 'https://leetcode.com/u/Rishi_varshney/',
    }
];

export const projects = [
    {
        iconUrl: motion,
        theme: 'btn-back-blue',
        name: 'IRIS (Intelligent Review and Interview System)',
        description: 'AI-powered voice interview platform for realistic job interview practice and AI-based hiring. Features real-time voice conversations, AI-generated dynamic questions, follow-up questions, live transcription, and comprehensive intelligent feedback.',
        link: 'https://github.com/Rishivarshney100/Agentic_AI_Interviewer',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Query Wizard: Database made easy',
        description: 'An AI-powered Database handling platform that allows users to interact with real-time databases using NLP through text and voice input, from any location on the globe with multilingual support.',
        link: 'https://github.com/Rishivarshney100/Query_Wizard_3.0',
    },
    {
        iconUrl: vscode,
        theme: 'btn-back-green',
        name: 'Clarity Code: AI-based Code Obfuscation',
        description: 'An AI-based Code Obfuscation Tool designed to intelligently transform source code into a more obfuscated, less human-readable format, while preserving its original functionality.',
        link: 'https://github.com/Rishivarshney100/Clarity-code',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Rakshak: Your Shield of Safety Anytime, Anywhere',
        description: 'A comprehensive women\'s safety application with proactive safety measures, real-time threat detection, and community-driven features to protect users in dangerous situations.',
        link: 'https://github.com/Rishivarshney100/Rakshak',
    },
    {
        iconUrl: python,
        theme: 'btn-back-blue',
        name: 'Offline AI PCB Defect Detection',
        description: 'Automated PCB defect detection with natural language query interface using YOLOv5 and custom Detection-Grounded VLM. Detects 6 defect types (Missing Hole, Mouse Bite, Open Circuit, Short, Spur, Spurious Copper) with <2s inference time and <1% hallucination rate. Features Streamlit web UI and works completely offline with no cloud dependencies.',
        link: 'https://github.com/Rishivarshney100/Offline-AI-PCB-defect-detection',
    },
    {
        iconUrl: car,
        theme: 'btn-back-orange',
        name: 'Object Detection from Scratch',
        description: 'A complete object detection system built from scratch (no pre-training) using PASCAL VOC 2007 dataset. Custom CNN-based detector trained from scratch to detect 3 classes (person, car, dog) with 73.2% mAP@0.5, 20fps inference speed, and 21MB model size. Features real-time webcam detection and evaluation metrics.',
        link: 'https://github.com/Rishivarshney100/Object-Detection-from-scratch',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AI Pic: Text to Image Generator',
        description: 'This project demonstrates how to generate an AI-generated image from a text prompt using the Stable Diffusion model. The model takes a text input and generates a corresponding image.',
        link: 'https://github.com/Rishivarshney100/Brainwave_Matrix_Intern-/tree/main/AI%27%20Pic%20(Text%20to%20image%20generator)',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'MedQ App: Smart Bed Management and Queue Model',
        description: 'A hospital-based healthcare solution for real-time OPD registration, bed availability, and predictive healthcare logistics, optimized with priority-based queuing.',
        link: 'https://github.com/Rishivarshney100/MedQ',
    },
    {
        iconUrl: contact,
        theme: 'btn-back-blue',
        name: 'Face Authentication Security System',
        description: 'A secure banking authentication system reducing OTP frauds using face recognition.',
        link: 'https://github.com/Rishivarshney100/face-recognition',
    }
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'MPIN Validator',
    //     description: 'A robust MPIN (Mobile PIN) validation system that checks for common patterns, demographic information, and keypad patterns to ensure strong and secure MPINs.',
    //     link: 'https://github.com/Rishivarshney100/MPIN_Validator',
    // }
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
        title: "Top 5 India: Samsung Solve for Tomorrow 2025",
        description: "From 20,000+ → Top 100 → Top 40 → Top 5, Team Error 404 officially stood out as a Finalist in Samsung India 's Solve for Tomorrow 2025 (AI Track)",
        image: SFT,
        link: "https://www.linkedin.com/posts/rishi-varshney100_samsungsolvefortomorrow-sftindia2025-error404-activity-7393713013654081536-jch7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECquX8B4vRUvzKzmRbFU1v90k3eb4lKdlo",
    },
    {
        title: "2x Winner: Bharat Shiksha Expo Hackathon",
        description: "Secured consecutive victories in the Bharat Shiksha Expo Hackathon in both 2024 and 2025, demonstrating consistent innovation and problem-solving skills.",
        image: hackathon,
        link: "https://www.linkedin.com/posts/rishi-varshney100_robotics-expo-hackathon-activity-7325501829717360640-b0f1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECquX8B4vRUvzKzmRbFU1v90k3eb4lKdlo",
    },
    // {
    //     title: "Finalist: Finxthon 2023",
    //     description: "Achieved finalist position in Finxthon 2023, showcasing strong problem-solving and innovative skills in a competitive environment.",
    //     image: finxthon,
    //     link: "https://www.linkedin.com/posts/rishi-varshney100_hackathon-q2-glbajaj-activity-7138387467447025664-W6rK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECquX8B4vRUvzKzmRbFU1v90k3eb4lKdlo", 
    // },
    // {
    //     title: "Deloitte Industrial Visit Selection",
    //     description: "Selected among the top 30 students for an exclusive industrial visit to Deloitte, gaining insights into industry practices and interacting with recruiters.",
    //     image: deloitte,
    //     link: "https://www.linkedin.com/posts/rishi-varshney100_deloitte-industrialvisit-learningexperience-activity-7217610549860188161-vDMZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECquX8B4vRUvzKzmRbFU1v90k3eb4lKdlo",
    // },
    {
        title: "Patent Publication",
        description: "Our invention Automated AI-Powered Database Handler Using Natural Native Language for Educational and Enterprise Databases has been officially published by the Indian Patent Office (U/S 11A).",
        image: patent,
        link: "https://www.linkedin.com/posts/rishi-varshney100_patentpublished-productengineering-startuplife-activity-7420122676440117249-85xZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECquX8B4vRUvzKzmRbFU1v90k3eb4lKdlo",
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
