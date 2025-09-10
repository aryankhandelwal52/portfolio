import chatappImage from './assets/chat-app.png'
import skillsync from './assets/Skill_sync.png'
import dijkstra from './assets/dijkstra.png'
const projects = [
  {
    id: 1,
    title: "Real-Time Chat Application",
    description:
      "Full-stack chat app with Socket.IO and MERN. Features: real-time messaging, image sharing, user presence, JWT authentication, and Zustand for state management.",
    image: chatappImage,
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Zustand"],
    github: "https://github.com/aryankhandelwal52/SharChat",
    demo: "#", // add deployed link if available
  },
  {
    id: 2,
    title: "Dijkstra Graph Visualizer",
    description:
      "An interactive graph visualizer built with MERN stack to demonstrate Dijkstra's shortest path algorithm. Users can create nodes, add edges, and watch the pathfinding process step by step.",
    image: dijkstra,
    tech: ["React", "Node.js", "Express", "MongoDB", "Dijkstra's Algorithm"],
    github: "#", // add your GitHub repo link
    demo: "#", // add live demo link if deployed
  },
  {
    id: 3,
    title: "AI Mentor-Based Peer Learning Platform (SkillSync)",
    description:
      "Collaborative learning platform with real-time rooms, AI mentor (Shar-AI), chat, collaborative coding, peer rating, and progress tracking with Chart.js.",
    image: skillsync, // replace with real screenshot
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "OpenAI API", "Chart.js"],
    github: "https://github.com/aryankhandelwal52",
    demo: "#", // add deployed link
  },
];

export default projects;
