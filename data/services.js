import { FaCode, FaRobot, FaMusic, FaCalculator, FaBrain, FaChalkboardTeacher } from "react-icons/fa";

export const services = [
    {
        slug: "coding-lessons",
        title: "Coding Lessons",
        shortDescription:
            "Learn to code with personalized, project-based instruction in Python and JavaScript.",
        longDescription:
            "In this course, you'll learn core programming concepts, build real-world projects, and develop problem-solving skills. We'll cover variables, loops, functions, data structures, and even explore web development with HTML, CSS, and JavaScript.",
        outline: [
            "Introduction to Programming",
            "Python Basics & Projects",
            "JavaScript for Web",
            "Final Project & Review"
        ],
        icon: FaCode,
        rate: "$40/hour",
    },
    {
        slug: "math-tutoring",
        title: "Math Tutoring",
        shortDescription:
            "Master essential math skills, from arithmetic to calculus.",
        longDescription:
            "Customized lessons for all ages. We'll strengthen foundational concepts, work through problem sets together, and prepare you for exams with confidence.",
        outline: [
            "Assessment & Goal Setting",
            "Core Concepts Review",
            "Advanced Problem Solving",
            "Exam Preparation Strategies"
        ],
        icon: FaCalculator,
        rate: "$35/hour",
    },
    {
        slug: "music-lessons",
        title: "Music Lessons",
        shortDescription:
            "Develop your musical skills in theory, composition, or performance.",
        longDescription:
            "Learn to read music, understand harmony and rhythm, and improve performance technique. Lessons are tailored for all skill levels and instruments.",
        outline: [
            "Introduction to Music Theory",
            "Instrument Technique",
            "Composition Basics",
            "Performance Practice"
        ],
        icon: FaMusic,
        rate: "$45/hour",
    },
    {
        slug: "robotics-coaching",
        title: "Robotics Coaching",
        shortDescription:
            "Hands-on robotics instruction with Micro:bit and LEGO EV3.",
        longDescription:
            "Build, code, and test robotics projects. Learn about sensors, motors, and control logic in a fun, hands-on environment.",
        outline: [
            "Intro to Robotics Platforms",
            "Sensors & Actuators",
            "Programming Challenges",
            "Team Project Build"
        ],
        icon: FaRobot,
        rate: "$50/hour",
    },
    {
        slug: "ai-counseling",
        title: "AI Counseling",
        shortDescription:
            "Understand how AI can help your business or personal projects.",
        longDescription:
            "Get tailored advice on AI workflows, strategy, and tools. We'll demystify AI concepts and help you plan effective integration.",
        outline: [
            "Introduction to AI Concepts",
            "Identifying Use Cases",
            "Selecting Tools & Platforms",
            "Developing an Integration Plan"
        ],
        icon: FaBrain,
        rate: "$60/hour",
    },
    {
        slug: "ai-education",
        title: "AI Education",
        shortDescription:
            "Learn AI fundamentals and use tools like ChatGPT and Hugging Face.",
        longDescription:
            "We’ll cover machine learning concepts, prompt engineering, and ethical AI use. Hands-on with popular AI APIs and frameworks.",
        outline: [
            "Intro to Machine Learning",
            "Prompt Engineering Basics",
            "Using OpenAI & Hugging Face",
            "Ethical Considerations in AI"
        ],
        icon: FaChalkboardTeacher,
        rate: "$55/hour",
    },
];
