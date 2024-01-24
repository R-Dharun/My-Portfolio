import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about1",
      title: "About",
    },
 
    {
      id: "work",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "B.E. - Computer Science Engineering", 
      SUB:"MEPCO Schlenk Engineering College",
      GRA: "CGPA : 8.2", 
      icon: web,
    },
    {
      title: "12th Grade" ,
      SUB: "KVS Matriculation Higher Secondary School", 
      GRA:" Percentage: 69.6% ",
      icon: mobile,
    },
    {
      title: "10th Grade",
      SUB: " KVS English Medium School",
      GRA: "Percentage: 76%",
      icon: backend,
    }
    
  ];



  const services1 = [
    {
      title: "Hospital Management System (Angular JS ,Node JS,HTMl,CSS,MangoDB)",
      icon: web,
    },
    {
      title: "Pharmacy Management System (Data Base Management)",
      icon: mobile,
    },
    {
      title: "Online Banking Application (Java Project)",
      icon: backend,
    },
    {
      title: "Object detection and Ranging system (Microprocessor and Microcontroler)",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Hospital Management System",
      company_name: " (Angular JS ,Node JS,HTMl,CSS,MangoDB)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2023",
      points: [
        "Project is based on the hospital management system where appointment are booked by the user.",
        "Hospital can be managed in efficient way.",
        
      ],
    },
    {
      title: "Pharmacy Management System",
      company_name: "(Data Base Management)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2022",
      points: [
        "Admin will manage the pharmacy by adding the details to the database and modified if any change required.",
      ],
    },
    {
      title: "Online Banking Application",
      company_name: "(Java, MySQL)",
      icon: shopify,
      iconBg: "#383E56",
      date: "2021",
      points: [
        "In online banking application, the user account will be managed and able to transfer money to respective individual.",
       
      ],
    },
    {
      title: "Object detection and Ranging system",
      company_name: " (Microprocessor and Microcontroler)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2021",
      points: [
        "The arduino uno board is used to program the object detecton and ranging with the help of the motion sensor.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "fgdf",
      designation: "dtthd",
      company: "",
      image: "",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Python (Basic)",
      description:
        "The Python (Basic) certificate from HackerRank validates fundamental Python programming skills through coding challenges, assessing candidates on syntax, data types, and basic problem-solving.",
      tags: [
        {
          name: "HackerRank",
          color: "blue-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "UI / UX for Beginners",
      description:
        "Great Learning's UI/UX for Beginners certificate provides foundational knowledge in UI and UX design, covering principles, usability, wireframing, and prototyping to equip learners with essential skills for creating user-friendly digital experiences.",
      tags: [
       
        {
          name: "Great Learning",
          color: "green-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "React (Basic)",
      description:
        "he React (basic) certificate from HackerRank validates foundational skills in React, covering concepts like components, state management, event handling, and basic testing. Achieving this certification demonstrates proficiency in building user interfaces using React.",
      tags: [
       
        {
          name: "HackerRank",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,services1 };