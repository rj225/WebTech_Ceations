
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
   
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Web Developer",
    firstName: "WebTech",
    LastName: "Creations",
    btnText: "CV Download",
    // image:"logo.jpeg",
    logo:"logo.jpeg",

  
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
     
      // {
      //   name: "Java",
      //   //para: "Lorem ipsum text  dummy",
      //   logo:"java .png",
      // },
     
      {
        name: "Html",
       // para: "Lorem ipsum text  dummy",
         logo: "html.png",
      },
      {
        name: "Talwind css",
       // para: "Lorem ipsum text  dummy",
        logo: "talwind.png",
      },
      {
        name: "JavaScript",
       // para: "Lorem ipsum text  dummy",
         logo:"JS.png",
      },
      {
        name: "React js",
       // para: "Lorem ipsum text  dummy",
         logo:"react .png",
      },
      {
        name: "Node js",
       // para: "Lorem ipsum text  dummy",
        logo:" nodejs.png",
      },
    
    
      {
        name: "Python",
       // para: "Lorem ipsum text  dummy",
        logo: "python .png",
      },
      {
        name: "Django",
       // para: "Lorem ipsum text  dummy",
         logo:"djnago.png",
      },
      {
        name: "MongoDb",
       // para: "Lorem ipsum text  dummy",
         logo:"mongo.jpg",
      },
      {
        name: "SqlLite",
       // para: "Lorem ipsum text  dummy",
         logo:"sqllite.jpg",
      },
      {
        name: "Firebase",
       // para: "Lorem ipsum text  dummy",
         logo:"firebase.png",
      },
    ],
    icon: MdArrowForward,
  },
 
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image:"logo.jpeg",
    project_content: [
      {
        title: "NoteSync",
         image:"notesync.jpg",
         link:"https://www.notesync.in/",
      },
      {
        title: "FinanceFortune",
         image:"financefortune.jpg",
         link:"https://finance-fortune.netlify.app/",
      },
      {
        title: "Attendance App",
         image:"voucheranza.jpg",
         link:"https://voucheranza.com/",
      },
      {
        title: "Coledra Cloud",
         image:"coledra.png",
         link:"https://rj225.github.io/Coledra_Clouds/",
      },
      {
        title: "Movei Website",
         image:"moveiweb.jpg",
         link:"https://reactmovierahulapp.netlify.app/"
        
      },
      {
        title: "Weather app",
         image:"weather.jpg",
         link:"https://reactjsweatheruivag.netlify.app/",
      },

      // {
      //   title: "facbook-clone by HTML,CSS,JS",
      //    image:"facebook.png",
      //    link:"https://facbook-template-clone.netlify.app",
      // },
      
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    // image1: Hireme_person,
    // image2: Hireme_person2,
   // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "wtc131123@gmail.com",
        icon: GrMail,
        link: "mailto:wtc131123@gmail.com",
      },
      {
        text: "+91 7857847749",
        icon: MdCall,
        link: "https://wa.me/7857847749",
      },
      {
        text: "+91 7857847749",
        icon: MdCall,
        link: "https://wa.me/7857847749",
      },
      {
        text: "WebTech-Creations",
        icon: BsInstagram,
        link: "https://www.linkedin.com/company/webtech-creations/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};