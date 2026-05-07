
import WeatherApplication from "./WeatherApplication.png";
import task1 from "./task1.png";
import task2 from "./task2.png";

export const HERO_CONTENT = `I am an MCA graduate passionate about full-stack development and DevOps engineering.
I have hands-on experience in React, JavaScript, Python, and Java for building responsive applications.
On the DevOps side, I work with AWS, Terraform, CI/CD pipelines, and Linux environments to automate deployments and improve system reliability.
I enjoy learning new technologies, optimizing workflows, and building scalable solutions.`;
export const ABOUT_TEXT = `I am a Master's in Computer Applications (MCA) graduate with a passion for both web development and DevOps. I specialize in building responsive applications using React, and have hands-on experience with Python and Java. On the DevOps side, I work with Terraform, AWS, CI/CD pipelines, and Linux. I enjoy automating workflows and writing clean, efficient code. When I am not coding, I love exploring new technologies.`;

export const PROJECTS = [
  
    {
    image: WeatherApplication,
    title: "Weather Application",
    description:
      "This is a weather application built using React with Vite, Material-UI, and vanilla CSS. It fetches weather data from the OpenWeatherMap API and displays it in a card component. It also includes a feature to handle cases where the searched location is not found.",
    technologies: ["React","Vite","Material-UI","Vanilla CSS","OpenWeatherMap API"],
  },
  {
  image: task2,
  title: "3D Model Viewer",
  description: "A standalone web application that loads and displays a 3D model in .glb format using Three.js, with optimized loading and memory management.",
  technologies: ["React", "Three.js", "Vite", "JavaScript"],
  link: "https://github.com/seema1406/vima3ya-frontend-assignment/tree/main/task-2",
},
{
  image: task1,
  title: "Frontend Assignment",
  description: "A frontend application built using React focusing on UI rendering, component structure, and basic functionality.",
  technologies: ["React", "Vite", "JavaScript"],
  link: "https://github.com/seema1406/vima3ya-frontend-assignment/tree/main/task-1",
},
];

export const CONTACT = {
  address: "Amoun, khatima, Uttarakhand, 262308 ",
  phoneNo: "+91-9084680092",
  email: "mukhiyaseema6@gmail.com",
};
