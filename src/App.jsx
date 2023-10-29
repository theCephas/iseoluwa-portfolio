import GitProfile from "@arifszn/gitprofile";
import "@arifszn/gitprofile/dist/style.css";
import ImageGallery from "./assets/image-gallery.png";
import QrCode from "./assets/qr-code.png";
import MovieBox from "./assets/moviebox.png";
import RandWord from "./assets/randword.png";
import QuickQuiz from "./assets/quickquiz.png";
import ToBeDone from "./assets/tobedone.png";

export default function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: "theCephas",
          sortBy: "stars",
          limit: 8,
          exclude: {
            forks: false,
            projects: [
              "digital-card",
              "personal-card",
              "theCephas",
              "calculator-js",
              "car-landing-page",
              "fylo-dark-theme",
              "get-time",
              "shopping-cart",
              "flex-and-grid-layout",
              "simple-layout-design",
              "results-summary-component-main",
              "dynax-global-services",
              "product-preview-card",
              "fullstach-course4",
              "my-portfolio",
              "huddle-landing-page-with-single-introductory-section-master",
              "offset-pract",
              "ui-portfolio",
              "a-landing-page",
              "stats-preview-card-component-main",
              "profile-card-component",
              "second-js-file",
              "3-column-card",
              "about-me",
              "firstresponsiveness",
              "vs-code",
            ],
          },
        },
        social: {
          linkedin: "https://www.linkedin.com/in/osho-iseoluwa",
          twitter: "https://twitter.com/OshoIseoluwa",
          phone: "08110470908",
          email: "oshoiseoluwa@gmail.com",
        },
        resume: {
          fileUrl:
            "https://docs.google.com/document/d/12luzb8w2Mv4b4GJs05LNqh2iGeNFtM7eFaStsE_q6UQ/edit?usp=sharing",
        },
        skills: [
          "JavaScript",
          "React.js",
          "Tailwindcss",
          "TypeScript",
          "HTML",
          "CSS",
          "Bootstrap",
          "GSAP",
          "Framer-Motion",
          "SASS",
        ],
        experiences: [
          {
            company: "DryCode",
            position: "Frontend Developer Intern",
            from: "July 2023",
            to: "August",
          },
          {
            company: "HNGx Internship",
            position: "Frontend Developer Intern",
            from: "September 2023",
            to: "October",
          },
        ],
        certifications: [
          {
            body: "Drycode Internship Completion Certificate",
            name: "Drycode Certification",
            year: "August 2023",
            link: "https://drive.google.com/file/d/1rPG0vAFUKkn4UrNEeVWN50BptzFfSJE2/view",
          },
        ],
        education: [
          {
            institution: "University of Lagos",
            degree: "English",
            from: "2022",
            to: "2025",
          },
        ],

        externalProjects: [
          {
            title: "Image Gallery",
            description:
              "This is a project built with react + vite and firebase, displaying several images where users can log in, drag and drop images, and also search for any type of image by their tags!",
            imageUrl: ImageGallery,
            link: "https://tc-image-gallery.vercel.app/",
          },
          {
            title: "Qr-code gen",
            description:
              "This is a project built with react, vite, and typescript. It is a qr code generator, displaying several templates to use. Also, users can be able to download these generated qr codes for future use.",
            imageUrl: QrCode,
            link: "https://i-qr-code-gen.vercel.app/",
          },
          {
            title: "Randword",
            description:
              "Built with html, javascript, css, bootstrap, node + express, and wordnik api. This project generates a random word every 24 hours, there is a search functionality to search for different words also.",
            imageUrl: RandWord,
            link: "https://randword.onrender.com",
          },
          {
            title: "MovieBox",
            description:
              "This is a project built with the tmndb api and react that displays movies of different genres. You can ike the movie you want, search for them, and also get an overview of them.",
            imageUrl: MovieBox,
            link: "https://tc-moviebox.vercel.app/",
          },
          {
            title: "Quick-quizze",
            description:
              "This happens to be my first react project. It is a quiz webapp to test your general knowledge on many things. Give it a try!",
            imageUrl: QuickQuiz,
            link: "https://quick-quizze.vercel.app/",
          },
          {
            title: "Todo-list App",
            description:
              "This is a webapp where users can add things to do in their list, and delete it when they have cleared the list.",
            imageUrl: ToBeDone,
            link: "https://tobedone.vercel.app/",
          },
        ],

        hotjar: {
          id: "",
          snippetVersion: 6,
        },

        themeConfig: {
          defaultTheme: "light",
          disableSwitch: false,

          respectPrefersColorScheme: true,

          hideAvatarRing: false,

          themes: [
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "procyon",
          ],

          customTheme: {
            primary: "#fc055b",
            secondary: "#219aaf",
            accent: "#e8d03a",
            neutral: "#2A2730",
            "base-100": "#E3E3ED",
            "--rounded-box": "3rem",
            "--rounded-btn": "3rem",
          },
        },

        footer: `Copyright © 2023 Osho Iseoluwa`,
      }}
    />
  );
}
