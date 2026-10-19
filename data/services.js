import { FaCode, FaCube, FaMusic, FaChalkboardTeacher } from "react-icons/fa";

export const services = [
    {
        slug: "piano-lessons",
        title: "Piano Lessons",
        category: "current",
        shortDescription:
            "1-on-1, in-person piano lessons for young learners ages 4–12 at Simusique Studio in Coquitlam, BC",
        curriculum: [
            "Note reading & keyboard fundamentals",
            "Technique and finger exercises",
            "Repertoire suited to the student's level",
            "Rhythm and ear training",
            "Performance preparation"
        ],
        idealFor: [
            "Beginners ages 4–12",
            "Parents looking for a patient, structured in-person teacher"
        ],
        icon: FaMusic,
        rate: "$60/hour",
        format: "In-person at Simusique Studio, Coquitlam, BC",
        outcome: "Steady progress and growing confidence at the piano",
    },
    {
        slug: "coding-lessons",
        title: "Coding Lessons",
        category: "past",
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
        slug: "3d-modeling",
        title: "3D Modeling with TinkerCAD",
        category: "past",
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
        slug: "ai-education",
        title: "AI Education",
        category: "past",
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
            "Beginners interested in AI literacy"
        ],
        icon: FaChalkboardTeacher,
        rate: "$55/hour",
        format: "1-on-1 or small group",
        outcome: "Practical understanding of AI and how to use it confidently",
    },
];
