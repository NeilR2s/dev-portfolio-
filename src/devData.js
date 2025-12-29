import blackIcon from "./assets/neil-black-icon.png"
import whiteIcon from "./assets/neil-white-icon.png"

export const portfolioData = {
    personalInfo: {
        name: "Neil Artus",
        email: "artus.neil.c@gmail.com",
        summary: "Hello! I am a __Software Developer__ currently working on an internal tool for [Albawani Co.](https://www.albawani.net/) I have written modern software tools for [JG Summit Holdings Inc](https://www.jgsummit.com.ph/), and various [freelance clients](https://www.facebook.com/share/p/1JxdoGKod4/).",
        location: "Cavite 4017",
        github: "https://github.com/NeilR2s",
        linkedin: "https://www.linkedin.com/in/neil-artus-652115304/",
        avatar: "https://avatars.githubusercontent.com/u/147031843?s=400&u=067c4715586a2f79f241b60e7ace459a931c0915&v=4",
        iconWhite: blackIcon,
        iconDark: whiteIcon
    },
    personalStatement: "",
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
            company: "JG Summit Holdings Inc.",
            role: "GenAI Research Intern",
            date: "2025",
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
            role: "Software Developer (Pro Bono, Internal Tool)",
            date: "2025",
            responsibilities: [
                "Developed and deployed a full-stack generative AI web application with seamless data pipelines for internal use",
                "Collaborated with an Agile team to iterate and produce a working proof of concept in a fast-paced environment",
                "Conducted rigorous analysis of model accuracy to ensure alignment with business requirements.",
                "Engineered a modular application architecture to improve maintainability and simplify the team turnover process.",
                "Reduced future development time by writing comprehensive documentation and conducting knowledge transfer sessions."
            ]
        },
        {
            company: "Freelance (LPU-Cavite Research Project)",
            role: "Software Developer",
            date: "2025",
            responsibilities: [
                "Presented at LPU - Cavite Innovex 2025 Colloquium and awarded COESCA research of the year",
                "Coordinated with a non-technical team to train a Convolutional Neural Network based on MobileNet architecture using Tensorflow for osteoarthritis detection.",
                "Wrote a Python script to run inference on a Raspberry Pi 5 connected to a thermal camera."
            ]
        }
    ],
    skills: {
        languages: ["Python", "Javascript", "Go (Golang)"],
        frameworks: [
            "React",
            "Tailwind",
            "Flask",
            "FastAPI",
            "LangChain",
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
            title: "MediSeen (Capstone Project)",
            description: [
                "Led a team using PyTorch to develop an AI-powered progressive web application providing clinical decision support",
                "Engineered a microservice architecture using industry-standard cloud tools on Azure and GCP, which enabled an average response latency of 98 ms for database queries, and average response latency of 2000 ms for AI tasks",
                "Developed a responsive viewport for mobile using React and Tailwind; increased system usability score by 15%.",
                "Implemented security features by using FastAPI and routing traffic to a Cloudflare DNS Tunnel."
            ],
            technologies: ["PyTorch", "Azure", "GCP", "React", "Tailwind", "FastAPI", "Cloudflare"]
        },
        {
            title: "Neural Networks from Scratch",
            description: [
                "Built fundamental machine learning algorithms from scratch using JAX; matched the accuracy of existing Python AI frameworks",
                "Implemented functional programming techniques to enable jit-compiled performance benefits to certain computations, while wrapping the core logic in an OOP wrapper for better developer experience"
            ],
            technologies: ["JAX", "Python"]
        },
        {
            title: "Formal Language Compiler",
            description: [
                "Built a web compiler using Flask and Javascript for visualizing deterministic formal languages.",
                "Wrote the core algorithm in Python to accurately simulate Deterministic Finite Automata, processing input strings against complex state transition tables.",
                "Ensured code coverage by using pytest to ensure reproducibility and that the compiler works as formally defined"
            ],
            technologies: ["Flask", "Javascript", "Python", "pytest"]
        },
        {
            title: "GenAI Data Pipeline Scripting and Automation",
            description: [
                "Developed a fault-tolerant Gemini API scraping tool in Python, engineering an automatic API key rotation system to effectively manage API quotas and ensure continuous operation while processing and saving data with pandas.",
                "Built a high-throughput synthetic image generator for OCR training, leveraging Python's multiprocessing library to generate a 300,000-image dataset in parallel, applying randomized distortions like skew and blur.",
                "Authored a separate data validation script using pandas to parse and clean JSON responses from the API, verifying data integrity by comparing generated content against the source CSV files."
            ],
            technologies: ["Python", "Gemini API", "pandas", "multiprocessing"]
        }
    ]
};