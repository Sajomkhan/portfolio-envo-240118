import portfolioImage from "../assets/projects/my_portfolio.png"
import socialMedia from "../assets/projects/social_media.png"
import Hero_Image from "../assets/heroImage/saiful.jpg"


export const cv_url = "https://drive.google.com/file/d/1RMLRdAJtKuMcz-GPzk99014e0oqdF1_H/view?usp=drive_link"


// ------------------Hero--------------------//
export const hero = {
  headline: "I'm Saiful Ajom Khan",
  skills_initiative: "I am into",
  skills: ["MERN Development", "Frontend Development", "Full Stack Development"],
  desc: "I specialize in Full Stack Web Development, where my passion lies in crafting responsive and user-friendly web applications. I prioritize meticulous attention to detail, scalability, and performance to ensure that every project I undertake exceeds client expectations.",
  image: {
    url: Hero_Image
  },
};


// ------------------About--------------------//
export const about = {
  name: "Saiful Ajom Khan",
  education: "B.Sc. Engineer",
  address: "Barishal, Bangladesh.",
  phone: "+112-22334455",
  email: "sajomkhan@gmail.com",
  positon: "MERN Developer",
  desc: "Experienced Full Stack Web Developer with 3+ years of expertise in crafting scalable web applications. Proficient in a wide range of technologies, I specialize in building dynamic and responsive solutions using the latest tools and frameworks.\n\nTechnical Skills: JavaScript, React.js, Next.js, TypeScript, Node.js, Express.js, Prisma, MongoDB, Redux, Tailwindcss, Bootstrap, HTML, CSS, SASS, GitHub, Figma, Canva, Adobe Photoshop, Adobe Illustrator.\n\nMy proficiency in frontend technologies, including React.js and Next.js, Redux enables me to create engaging user interfaces, while my strong backend skills with Node.js and Express.js ensure seamless integration server-side functionalities.",

  cv_url: cv_url,
  image: {
    url: Hero_Image
  },
};


// ------------------Project-------------------------------------------------//
export const projects = [

  {
    projectId: "30",
    title: " E-Commerce Food Shop App (UI/UX Part)",
    tech: "MERN Technology",
    key_techs: ["React.js", "Tailwindcss", "Redux", "Material UI"],
    desc: "The project is fully user-friendly and responsive for both desktop and mobile devices. It includes shopping cart functionality with real-time updates using Redux. The design includes fully functional product filtering by categories, a catalog with detailed descriptions, and images.",
    github: "https://github.com/Sajomkhan/food-shop-app-vite-v1.1-2302020",
    live: "https://food-shop-app.netlify.app/",
    image: {
      public_id: "my_portfolio/thylfwp2a0vi0bdvutnt",
      url: "https://res.cloudinary.com/dcqw2t8r1/image/upload/v1692977177/my_portfolio/thylfwp2a0vi0bdvutnt.jpg",
    },
  },

  {
    projectId: "40",
    title: "Portfolio Website (Full Stack)",
    tech: "MERN Technology",
    key_techs: ["Next.js", "React.js Vite", "Tailwindcss", "Node.jx", "Express.jx", "MongoDB", "Cloudinary", "Multer"],
    desc: "Next.js is used for the client and React.js with Vite is used for the Admin interface. The project is fully user-friendly and responsive for both desktop and mobile devices. I utilized Cloudinary for image storage and MongoDB for structural data storage. On the server side, I followed the MVC structure.",
    github: "https://github.com/Sajomkhan/my-portfolio-client-admin-server-v1.5",
    live: "https://portfolio-saiful-ajom-khan.netlify.app/",
    image: {
      public_id: "my_portfolio/thylfwp2a0vi0bdvutnt",
      url: portfolioImage,
    },
  },  

  {
    projectId: "50",
    title: "Cloth Store App (E-commerce)",
    tech: "MERN Technology",
    key_techs: ["React.js", "Tailwindcss", "Redux", "Material UI"],
    desc: "The project is fully user-friendly and responsive for both desktop and mobile devices. It includes shopping cart functionality with real-time updates using Redux. The design includes fully functional product filtering by categories, a catalog with detailed descriptions, and images.",
    github: "https://github.com/Sajomkhan/cloth-store-app-vite-v1.1-deploy-250323",
    live: "https://cloth-store-app.netlify.app/",
    image: {
      url: "https://res.cloudinary.com/dcqw2t8r1/image/upload/v1692884134/my_portfolio/c8igrus7sqcuacn8y3sv.jpg",
      public_id: "my_portfolio/c8igrus7sqcuacn8y3sv",
    },
  },

  {
    projectId: "60",
    title: "Social Media App (UI/UX)",
    tech: "MERN Technology",
    key_techs: ["React.js", "CSS", "React-icons"],
    desc: "In this project, my sole focus was on enhancing the design for a better look, using plain CSS. It's not responsive, as I aimed to maximize the potential of CSS for the best design outcomes.",
    github: "https://github.com/Sajomkhan/social-media-app-react",
    live: "https://social-media-app1-react.netlify.app/",
    image: {
      url: socialMedia,
      public_id: '',
    },
  },
];

// ------------------Experiences--------------------//
export const experiences = [
  {
    position: "Aspiring Professional with Notable Project Experience",
    company: "Personal Project Endeavors",
    duration: "Oct 2020 - till now",
    proficiencies: [
      "I have independently completed all aspects of the projects I've worked on, including frontend, backend, database management, and project planning.",
      "I dedicated 3+ years to rigorous self-training in MERN technology, and now I am fully confident in my abilities to make valuable contributions and provide support to a team.",
      "I possess proficiency in various aspects of ReactJS, including routing, state management, component creation, context API usage, Hooks usage and seamless integration of APIs into the frontend.",
      "In the backend, I handle server creation, credential management, database administration, and the seamless upload of files or images to Cloudinary, all achieved using Express.js and MongoDB.",
    ],
  },

  {
    position: "Engineer (Electrical & Automation)",
    company: "Bashundhara Group, Bangladesh",
    duration: "Nov 2010 - Sep 2020",
    proficiencies: [
      "Programing automation technology (PLC & HMI) of industrial machine & utility",
      "Trouble shooting & maintenance of industrial machine",
      "Despite my successful career in this field, I nurtured a strong interest in programming. Over the past 2.5 years, I embarked on an intensive self-training journey with MERN technology. Today, I am confident in my proficiency and am eager to leverage my skills to contribute to and support a dynamic team.",
    ],
  },

];
