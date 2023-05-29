import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  FRONT_END: 'front-end',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Front End',
    value: PROJECT_CATEGORY.FRONT_END,
    icon: 'bx:code-block',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://i.imgur.com/BPNDdNo.jpg',
    title: 'Movie Database',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Firebase'),
      getSkillByLabel(BACKEND_SKILLS, 'Github'),
    ],
    description: `This app features user authentication with firebase as well as the fire store cloud storage database. This application is pulling movie data from an the IMDB movie API and displaying different categories. It features horizontal sliding and a featured selection. The useContext hook is also being implemented for app-wide state management. `,
    repoLink: '',
    sourceLink: 'https://crypto-61ccd1.netlify.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://i.imgur.com/scmdT4w.jpg',
    title: 'Crypto App - Crypto Coin Tracker',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),

      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Routes'),
      getSkillByLabel(BACKEND_SKILLS, 'Axios'),
    ],
    description: ` Users are able to create a new account using their email address and can then sign in to save coins to a user specific list. This is made possible by creating a firestore cloud storage database at the time of user registration. This application was built using the Coin Gecko API.`,
    repoLink: 'https://github.com/frederick-bruce/crypto-react-firebase',
    sourceLink: 'https://crypto-61ccd1.netlify.app/',
    category: [PROJECT_CATEGORY.FRONT_END],
  },
  {
    imgSrc: 'https://i.imgur.com/1oLjOZk.jpg',
    title: 'Twitch Clone - Live Platform Project',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Vercel'),
    ],
    description:
      ' This is a mobile responsive recreation of Twitch.tv and features Next/Auth.js for authentication. Users may choose to be authenticated with either a Github account or a Google account. A few features to note with this project are lazy loading images using the Image component, built in routing, and Next/Auth Context.',
    repoLink: 'https://github.com/frederick-bruce/twitch-tailwind',
    sourceLink: 'https://twitch-nextjs-tailwind.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://i.imgur.com/HX8poJr.png',
    title: 'AI Summarizer',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(FRONTEND_SKILLS, 'Rapid API'),
      getSkillByLabel(BACKEND_SKILLS, 'OpenAI'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
    ],
    description:
      'This application summarizes website articles by using ChatGPT. By using Redux Toolkit, the application can make a request to the AISummarizer API to fetch specific data. The link and summary is then saved in local storage and can be retrieved after refresh.',
    repoLink: 'https://github.com/frederick-bruce/ai-summarizer',
    sourceLink: 'https://glittery-faloodeh-4d6110.netlify.app/',
    category: [PROJECT_CATEGORY.FRONT_END],
  },
  {
    imgSrc: 'https://i.imgur.com/sN707Uq.jpg',
    title: 'Property Finder - Zillow API Project',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      {
        label: 'Java',
        icon: 'logos:java',
      },
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
    ],
    description:
      ' Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API. User authentication is available so you can signup and signin to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.',
    repoLink: 'https://github.com/frederick-bruce/property-finder',
    sourceLink: 'https://property-finder-440fa5.netlify.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
];
