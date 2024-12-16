import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a front-end developer with a solid foundation in web technologies, currently expanding my expertise in back-end development with C++. My journey in programming is fueled by a passion for creating scalable and user-friendly software solutions that align with dynamic global needs.`;

export const ABOUT_TEXT = `I am a Codecademy-certified front-end developer with hands-on experience in 
  <span class="html-tech">HTML</span>, 
  <span class="css-tech">CSS</span>, 
  <span class="js-tech">JavaScript</span>, 
  and <span class="react-tech">React</span>. 
  I am currently advancing my skills in back-end development, focusing on C++ to build full-stack capabilities. 
  My approach is rooted in a strong problem-solving mindset, effective communication, and a collaborative spirit. 
  My background includes mentoring students in math and IT, which has honed my ability to break down complex concepts and create tailored solutions. 
  I thrive in environments where learning, innovation, and teamwork drive progress.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2022",
    role: "Math and IT Mentor",
    company: "Freelance",
    description: `Mentored 10th and 11th-grade students in mathematics and IT, achieving an 83% improvement in their performance on standardized tests. Designed personalized lesson plans and created a supportive learning environment.`,
    technologies: ["Mathematics", "Problem Solving", "IT Fundamentals"],
  },
];

export const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    image: project1,
    description:
      "A portfolio showcasing my projects, skills, and experiences, built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://pastacosirestaurant.netlify.app/", 
  },
  {
    title: "Task Management System",
    image: project2,
    description:
      "An application for tracking tasks and progress, designed with a clean, user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://papaya-tarsier-1737e9.netlify.app/", 
  },
  {
    title: "Breakout Practice Game",
    image: project3,
    description:
      "A breakout game built using JavaScript and HTML5 canvas, with a fun and interactive game experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://breakout-practice.netlify.app/",
  },
  {
    title: "Calculator",
    image: project4,
    description:
      "A functional calculator application created with HTML, JavaScript, and styled using SASS. The app performs basic arithmetic operations and has a clean, responsive interface.",
    technologies: ["HTML", "SASS", "JavaScript"],
    link: "https://calculatorbynuray.netlify.app/",
  },
];


export const CONTACT = {
  address: "Baku, Narimanov District, M.Ehmedzade St",
  phoneNo: "+994 50 820 61 01",
  email: "bakhishlinuray@gmail.com",
};
