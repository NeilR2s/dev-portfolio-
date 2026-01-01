import blackIcon from "./assets/neil-black-icon.png"
import whiteIcon from "./assets/neil-white-icon.png"

export const portfolioData = {
    personalInfo: {
        name: "Neil Artus",
        email: "artus.neil.c@gmail.com",
        summary: "Hello! I am a __Software Developer__ currently working on an internal tool for [Albawani Co.](https://www.albawani.net/) I have written modern software tools for [JG Summit Holdings Inc](https://www.jgsummit.com.ph/), and various [freelance clients](https://www.facebook.com/share/p/1JxdoGKod4/). I mainly work with __Python__ for building backend services, AI, and scripting, and __JavaScript__ for web development.",
        // location: "Cavite 4017",
        resumePath: "/Neil_Artus_Resume.pdf",
        github: "https://github.com/NeilR2s",
        linkedin: "https://www.linkedin.com/in/neil-artus-652115304/",
        avatar: "https://avatars.githubusercontent.com/u/147031843?s=400&u=067c4715586a2f79f241b60e7ace459a931c0915&v=4",
        iconWhite: blackIcon,
        iconDark: whiteIcon
    },
    education: {
        institution: "De La Salle University - Dasmariñas",
        degree: "Bachelor of Science in Computer Science with Specialization in Intelligent Systems",
        honors: "Consistent Dean’s Lister (2022-2025)",
        relevantCoursework: [
            "Object-Oriented Programming",
            "Data Structures and Algorithms",
            "Machine Learning",
            "Databases",
            "Web Development"
        ],
        extraCurriculars: "Secretary - Computer Science Program Council"
    },
    experience: [
        {
            company: "Freelance (LPU-Cavite Research Project)",
            role: "Software Developer",
            date: "March 2025 - April 2025",
            responsibilities: [
                "Presented at LPU - Cavite Innovex 2025 Colloquium and awarded COESCA research of the year",
                "Coordinated with a non-technical team to train a Convolutional Neural Network based on MobileNet architecture using Tensorflow for osteoarthritis detection.",
                "Wrote a Python script to run inference on a Raspberry Pi 5 connected to a thermal camera."
            ]
        },
        {
            company: "JG Summit Holdings Inc.",
            role: "GenAI Research Intern",
            date: "June 2025 - August 2025",
            responsibilities: [
                "Developed and deployed a full-stack generative AI web application with seamless data pipelines for internal use",
                "Collaborated with an Agile team to iterate and produce a working proof of concept in a fast-paced environment",
                "Conducted rigorous analysis of model accuracy to ensure alignment with business requirements.",
                "Engineered a modular application architecture to improve maintainability and simplify the team turnover process.",
                "Reduced future development time by writing comprehensive documentation and conducting knowledge transfer sessions."
            ]
        },
        {
            company: "Albawani Co.",
            role: "Software Developer (Pro Bono)",
            date: "August 2025 - December 2025",
            responsibilities: [
                "Simplified internal HR operations by developing an internal tool to automate employee attendance tracking.",
                "Integrated the system with existing IT infrastructure on Hetzner bare-metal servers using Python and Flask.",
                "Implemented secure authentication and role-based access control using Microsoft Entra ID to protect sensitive employee data.",
            ]
        },

    ],
    skills: {
        languages: ["Python", "Javascript", "Go (Golang)"],
        frameworks: [
            "React",
            "Tailwind",
            "Flask",
            "FastAPI",
            "LangChain",
            "Ollama",
            "Tensorflow",
            "Pandas",
            "PyTorch"
        ],
        cloudTools: [
            "Azure",
            "Google Cloud",
            "Vercel",
            "Firebase",
            "Cloudflare",
            "Hetzner",
            "Pinecone"
        ]
    },
    projects: [
        {
            title: "MediSeen",
            summary: "An AI-powered Progressive Web Application (PWA) providing real-time clinical decision support.",
            impact: "Reduced average request latency to 98ms via microservices and increased system usability scores by 15%.",
            technologies: ["PyTorch", "Azure", "GCP", "React", "Tailwind", "FastAPI", "Cloudflare"],
            deploymentLink: "https://www.mediseen.site/",
            githubLink: null,
        },
        {
            title: "Formal Language Compiler",
            summary: "An interactive visualization engine for Deterministic Finite Automata (DFA) and formal languages.",
            impact: "Ensured 100% algorithmic accuracy for complex state transitions using rigorous Pytest coverage.",
            technologies: ["Flask", "Javascript", "Python", "pytest"],
            deploymentLink: "https://nr2s.pythonanywhere.com/",
            githubLink: "https://github.com/NeilR2s/DFA-Visualizer",
        },
        {
            title: "Bitbit",
            summary: "A Cold Start 2025 entry featuring a marketplace frontend designed to bootstrap user liquidity and transaction flow.",
            impact: "Built a responsive, high-performance Progressive Web Application (PWA) from scratch using React and Tailwind CSS.",
            technologies: ["React", "Tailwind"],
            deploymentLink: "https://cold-start-marketplace.vercel.app/",
            githubLink: "https://github.com/NeilR2s/cold-start-marketplace",
        },
        {
            title: "Thermal Camera Osteoarthritis Detector",
            summary: "An IoT-integrated deep learning solution utilizing thermal imaging for early osteoarthritis detection.",
            impact: "Awarded 'Research of the Year' at the LPU-Cavite Innovex 2025 Colloquium.",
            technologies: ["Python", "Tensorflow", "Numpy"],
            deploymentLink: null,
            githubLink: "https://github.com/NeilR2s/scripts",
            infoLink: "https://www.facebook.com/share/p/1D5AdFLZzQ/"
        }
    ]
};