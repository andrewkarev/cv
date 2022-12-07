import EASYLANG_IMG from "../../assets/images/projects/easyLang.webp";
import ONLINE_STORE_IMG from "../../assets/images/projects/online-store.webp";
import SHELTER_IMG from "../../assets/images/projects/shelter.webp";
import KEYBOARD_IMG from "../../assets/images/projects/virtual-keyboard.webp";
import MEMORY_GAME_IMG from "../../assets/images/projects/memory-game.webp";
import CSS_SLIDER_IMG from "../../assets/images/projects/CSS-slider.webp";
import PORTFOLIO_IMG from "../../assets/images/projects/portfolio.webp";
import VIDEO_PLAYER_IMG from "../../assets/images/projects/HTML5-video-player.webp";
import TIC_TAC_TOE_IMG from "../../assets/images/projects/tic-tac-toe.webp";
import REACT_APP from "../../assets/images/projects/React-app.webp";
import TASK_MANAGER from "../../assets/images/projects/task-manager.webp";

const projectsData = [
  {
    title: "Task Manager",
    description:
      "An app that helps a person or team keep track of their workflow",
    technologies: ["React", "Redux Toolkit"],
    code: "https://github.com/andrewkarev/project-management-app/tree/develop",
    deploy: "https://rss-project-management-app.netlify.app/",
    img: TASK_MANAGER,
  },
  {
    title: "React app",
    description:
      "React/Redux app with example of the Interaction with Restful API",
    technologies: ["React", "Redux Toolkit", "React Hook Form"],
    code: "https://github.com/andrewkarev/RSS-React-tasks/tree/redux",
    deploy: "https://rss-react2022q3.netlify.app/",
    img: REACT_APP,
  },
  {
    title: "EasyLang",
    description:
      "App for learning 3500+ English words with games and built-in textbook",
    technologies: ["React", "Typescript"],
    code: "https://github.com/andrewkarev/rslang",
    deploy: "https://rslang-andrewkarev.netlify.app/",
    img: EASYLANG_IMG,
  },
  {
    title: "Online store",
    description: "An example of E-Commerce-Shop",
    technologies: ["TypeScript", "Sass"],
    code: "https://github.com/andrewkarev/RSS-FE-tasks/tree/online-store",
    deploy: "https://andrewkarev.github.io/RSS-FE-tasks/online-store/",
    img: ONLINE_STORE_IMG,
  },
  {
    title: "Shelter",
    description: "An example of a charity site adapted to small devices",
    technologies: ["JavaScript", "HTML", "Sass"],
    code: "https://github.com/andrewkarev/RSS-FE-tasks/tree/shelter",
    deploy:
      "https://andrewkarev.github.io/RSS-FE-tasks/shelter/pages/main/index.html",
    img: SHELTER_IMG,
  },
  {
    title: "Virtual Keyboard",
    description:
      "An application that is a keyboard and allows you to enter text both with a mouse and with a real keyboard",
    technologies: ["JavaScript", "Sass"],
    code: "https://github.com/andrewkarev/virtual-keyboard/tree/main",
    deploy: "https://andrewkarev.github.io/virtual-keyboard/virtual-keyboard/",
    img: KEYBOARD_IMG,
  },
  {
    title: "Memory game",
    description: "Card memory game with 2 game modes",
    technologies: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/andrewkarev/RSS-Preschool-tasks/tree/memory-game",
    deploy: "https://andrewkarev.github.io/RSS-Preschool-tasks/memory-game/",
    img: MEMORY_GAME_IMG,
  },
  {
    title: "CSS slider",
    description: "Pure CSS responsive slider",
    technologies: ["CSS", "HTML"],
    code: "https://github.com/andrewkarev/cssMemSlider/tree/gh-pages",
    deploy: "https://andrewkarev.github.io/cssMemSlider/cssMemSlider/",
    img: CSS_SLIDER_IMG,
  },
  {
    title: "Portfolio",
    description: "An example of Portfolio site adapted for small devices",
    technologies: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/andrewkarev/RSS-Preschool-tasks/tree/portfolio",
    deploy: "https://andrewkarev.github.io/RSS-Preschool-tasks/portfolio/",
    img: PORTFOLIO_IMG,
  },
  {
    title: "HTML5 Video Player",
    description: "Custom HTML5 Video Player",
    technologies: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/andrewkarev/RSS-Preschool-tasks/tree/video-player",
    deploy:
      "https://andrewkarev.github.io/RSS-Preschool-tasks/portfolio/#video-section",
    img: VIDEO_PLAYER_IMG,
  },
  {
    title: "Tic Tac Toe",
    description: "Tic Tac Toe game with win counter",
    technologies: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/andrewkarev/tic-tac-toe",
    deploy: "https://andrewkarev.github.io/tic-tac-toe/",
    img: TIC_TAC_TOE_IMG,
  },
];

export default projectsData;
