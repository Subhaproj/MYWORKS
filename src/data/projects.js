import airbnbCover from "../assets/covers/software/airbnbclone-cover.png";
import slambookCover from "../assets/covers/software/slambook-cover.jpg";
import adminDashboardCover from "../assets/covers/software/adminpanelcover.png";
import wonderparkCover from "../assets/covers/ui/Wonderpark-cover.jpg";

const projects = {
  "airbnb-clone": {
    title: "Airbnb Clone",
    category: "Web Development",
    type: "React Web Application",
    cover: airbnbCover,

    description:
      "A responsive accommodation booking web application inspired by Airbnb, designed to provide users with a smooth experience for discovering stays, searching properties and managing bookings.",

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
    ],

    overview:
      "The Airbnb Clone is a responsive web application created to explore how a modern accommodation booking platform can be designed and developed. The project focuses on user-friendly navigation, property discovery, search functionality and booking interactions.",

    features: [
      "Responsive design",
      "Property search",
      "Category filtering",
      "Favorites",
      "Wishlists",
      "Authentication",
      "Booking functionality",
      "Guest selection",
    ],

    role: "Frontend Developer",

    liveDemo: "https://subhaproj.github.io/airbnb-clone/",
  },

  "slambook": {
    title: "Slambook",
    category: "Web Development",
    type: "Web Application",
    cover: slambookCover,

    description:
      "A web application designed around a personalized slambook-style experience with an interactive and user-friendly interface.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    overview:
      "This project explores the development of a personalized web experience inspired by the traditional slambook concept. The interface focuses on presenting information in an engaging and interactive format.",

    features: [
      "Responsive interface",
      "Interactive user experience",
      "Personalized content",
      "Clean navigation",
      "User-friendly layout",
    ],

    role: "Frontend Developer",
  },

  "admin-dashboard": {
    title: "Airbnb Admin Dashboard",
    category: "Web Development",
    type: "React Dashboard",
    cover: adminDashboardCover,

    description:
      "A modern administrative dashboard designed for managing properties, bookings, guests, analytics and other platform activities.",

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Recharts",
    ],

    overview:
      "The Airbnb Admin Dashboard was designed as an administrative interface for managing different areas of an accommodation platform. The project focuses on dashboard usability, data presentation and organized navigation.",

    features: [
      "Dashboard overview",
      "Booking management",
      "Property management",
      "Guest management",
      "Analytics",
      "Messages",
      "Settings",
      "Responsive interface",
    ],

    role: "Frontend Developer",
  },

  "face-recognition": {
    title: "Face Recognition Web App",
    category: "AI / Computer Vision",
    type: "React + Python Web Application",
    cover: null,

    description:
      "A web application for face detection and recognition using React and Python with OpenCV.",

    technologies: [
      "React",
      "Python",
      "FastAPI",
      "OpenCV",
      "SQLite",
    ],

    overview:
      "The Face Recognition Web App combines a React frontend with a Python backend to detect and recognize faces. The application supports camera capture and image-based recognition while comparing detected faces against registered face data.",

    features: [
      "Camera face detection",
      "Image recognition",
      "Face registration",
      "Registered face matching",
      "Unknown face detection",
      "Confidence score",
      "SQLite face database",
    ],

    role: "Full Stack Developer",
  },

  "wonderpark": {
    title: "WonderPark",
    category: "UI/UX Design",
    type: "Amusement Park Website Concept",
    cover: wonderparkCover,

    description:
      "A fictional amusement park website concept designed to create an engaging and user-friendly experience for discovering attractions, exploring facilities and booking tickets.",

    technologies: [
      "Figma",
      "UI Design",
      "UX Design",
      "Prototyping",
    ],

    overview:
      "WonderPark is a fictional amusement park website designed as a UI/UX case study. The project focuses on creating an exciting visual experience while keeping attraction discovery, ticket booking and park information easy to navigate.",

    features: [
      "Attraction discovery",
      "Attraction details",
      "Ticket booking",
      "Payment flow",
      "Interactive park map",
      "Facilities information",
      "Responsive interface",
      "Figma prototyping",
    ],

    role: "UI/UX Designer",
  },
};

export default projects;