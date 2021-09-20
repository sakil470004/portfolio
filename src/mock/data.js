import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mynul | Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mynul Islam',
  subtitle: "I'm Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Web Developer.At the moment , I am also a student. If want to hire me.You can do it by following contract section. You can see my Resume and my recent project.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Robo Friend',
    info: 'Robo Friend app made with React one of the js framework.Here , I also give some search functionality.Each of the card are plached with a pic and text  Which came from Api Robohash web is used for get different picture.',
    info2: ' ',
    url: 'https://sakil470004.github.io/roboFriendReact/',
    repo: 'https://github.com/sakil470004/roboFriendReact', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Quote Generator',
    info: 'This is Quote Generator.It generate single quote.You can share it with social site.',
    info2: ' ',
    url: 'https://sakil470004.github.io/quote-Generator/',
    repo: 'https://github.com/sakil470004/quote-Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Task Board',
    info: 'This project was built by js. Anyone can store note by using web local storage.',
    info2: ' ',
    url: 'https://sakil470004.github.io/taskBoard/',
    repo: 'https://github.com/sakil470004/taskBoard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'You can contact with Mail (sk470004@gmail.com)',
  btn: '',
  email: 'sk470004@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: ' ',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: ' ',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: ' ',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sakil470004',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
