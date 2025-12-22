import { FaCode, FaCube, FaMusic, FaCalculator, FaBrain, FaChalkboardTeacher } from "react-icons/fa";

export const services = [
    {
        slug: "coding-lessons",
        title: "Coding Lessons",
        shortDescription:
            "Personalized, project-based coding instruction for students and beginners",
        curriculum: [
            "Introduction to Programming Concepts (logic, variables, loops)",
            "Python Fundamentals (games, simulations, data projects)",
            "JavaScript Basics (interactive web elements)",
            "Problem-solving & computational thinking",
            "Debugging and best coding practices"
        ],
        idealFor: [
            "Beginners and students (Grades 4+)",
            "Teens preparing for computer science courses",
            "Adults transitioning into tech"
        ],
        icon: FaCode,
        rate: "$40/hour",
        format: "1-on-1 or small group",
        outcome: "Build real, working projects while learning core programming skills",
    },
    {
        slug: "math-tutoring",
        title: "Math Tutoring",
        shortDescription:
            "Concept-focused math support tailored to student needs",
        curriculum: [
            "Initial Assessment & Goal Setting",
            "Review of Core Concepts (arithmetic, fractions, algebra, calculus basics)",
            "Problem-solving strategies",
            "Homework and exam preparation",
            "Confidence-building through guided practice"
        ],
        idealFor: [
            "Elementary to high school students",
            "Students needing remediation or enrichment"
        ],
        icon: FaCalculator,
        rate: "$35/hour",
        format: "1-on-1",
        outcome: "Stronger understanding, improved grades, and math confidence",
    },
    {
        slug: "music-lessons",
        title: "Music Lessons",
        shortDescription:
            "Develop musical understanding through theory, composition, and performance",
        curriculum: [
            "Introduction to Music Theory (notation, intervals, chords)",
            "Instrument Technique (piano-focused, adaptable to others)",
            "Ear training and rhythm development",
            "Composition and musical creativity",
            "Optional technology integration (notation software & digital tools)"
        ],
        idealFor: [
            "Beginners to intermediate students",
            "Learners interested in both music and technology"
        ],
        icon: FaMusic,
        rate: "$45/hour",
        format: "1-on-1",
        outcome: "A strong foundation in music with practical and creative skills",
    },
    {
        slug: "3d-modeling",
        title: "3D Modeling with TinkerCAD",
        shortDescription:
            "Hands-on 3D design for beginners",
        curriculum: [
            "Introduction to the TinkerCAD Interface",
            "Creating and modifying basic shapes",
            "Aligning, grouping, duplicating, and layering objects",
            "Creating cutouts and detailed designs",
            "Project-based builds (structures, models, themed designs)"
        ],
        idealFor: [
            "Students (Grades 3–7)",
            "Beginners interested in design, engineering, or robotics"
        ],
        icon: FaCube,
        rate: "$40/hour",
        format: "1-on-1 or small group",
        outcome: "Create polished 3D models while learning design thinking",
    },
    {
        slug: "ai-counseling",
        title: "AI Counseling",
        shortDescription:
            "Strategic guidance on using AI for real-world applications",
        curriculum: [
            "Introduction to AI concepts (in plain language)",
            "Identifying AI opportunities for your project or business",
            "Evaluating tools (ChatGPT, automation platforms, AI APIs)",
            "Ethical and practical considerations",
            "Next steps and implementation roadmap"
        ],
        idealFor: [
            "Entrepreneurs",
            "Educators",
            "Creators and developers exploring AI adoption"
        ],
        icon: FaBrain,
        rate: "$60/hour",
        format: "Consultation",
        outcome: "Clear direction on how AI can support your goals",
    },
    {
        slug: "ai-education",
        title: "AI Education",
        shortDescription:
            "Learn how AI works and how to use it effectively",
        curriculum: [
            "Introduction to Artificial Intelligence & Machine Learning",
            "How modern AI tools work (LLMs, image generation, assistants)",
            "Prompt engineering fundamentals",
            "Responsible and ethical AI use",
            "Hands-on practice with real tools"
        ],
        idealFor: [
            "Students and educators",
            "Beginners interested in AI literacy",
            "Professionals wanting foundational AI knowledge"
        ],
        icon: FaChalkboardTeacher,
        rate: "$55/hour",
        format: "1-on-1 or small group",
        outcome: "Practical understanding of AI and how to use it confidently",
    },
];
