import {
  ExperienceInterface,
  NavDataArray,
  NavItem,
  ProjectArray,
  ProjectItems,
  SkillsArray,
  SkillsItem,
} from '../Types';
import {
  Ernestpredict,
  Ip_Address,
  JointSecurity,
  UrlChecker,
  fire_pips,
} from '../../../public/image';

export const navData: NavDataArray = [
  {
    name: 'Ernest',
    icons: {
      github: 'github',
      instagram: 'instagram',
      twitter: 'twitter',
      whatsap: 'whatsap',
    },
  },
];

export const skillsData: SkillsArray = [
  {
    skill: 'HTML',
    years: '5',
  },
  {
    skill: 'CSS',
    years: '5',
  },
  {
    skill: 'JavaScript',
    years: '5',
  },
  {
    skill: 'Legacy Redux',
    years: '4',
  },
  {
    skill: 'Tailwind',
    years: '5',
  },
  {
    skill: 'React Js',
    years: '5',
  },
  {
    skill: 'Next Js',
    years: '4',
  },
  {
    skill: 'Node js',
    years: '4',
  },
  {
    skill: 'Express Js',
    years: '4',
  },

  {
    skill: 'Mongo DB',
    years: '4',
  },
  {
    skill: 'TypeScript',
    years: '3',
  },
  {
    skill: 'Material UI',
    years: '3',
  },
  {
    skill: 'Redux Toolkit',
    years: '3',
  },
  {
    skill: 'Ant Design CSS',
    years: '2',
  },
  {
    skill: 'Git',
    years: '5',
  },
  {
    skill: 'SASS',
    years: '4',
  },
];

export const projectsData: ProjectArray = [
  {
    heading: 'Firepips',
    image: fire_pips,
    link: 'https://firepips3.vercel.app',
    frontEndcode: 'https://github.com/samcode-dev/firepips3',
    // backEndcode:'https://github.com/amazinng-blib/Firepips',
    language: ['React Js', 'Express Js', 'Node Js', 'MongoDB', 'SASS'],
  },
  {
    heading: 'IP Address Tracker',
    image: Ip_Address,
    link: 'https://ip-address-tracker-bay-eight.vercel.app/',
    frontEndcode: '',
    // backEndcode:'',
    language: ['React Js', 'External Api', 'Tailwind CSS'],
  },
  {
    heading: 'Prediction site',
    image: Ernestpredict,
    link: 'https://www.ernestpredict.com/',
    frontEndcode: 'https://github.com/amazinng-blib/ernest-predict-frontend',
    // backEndcode:'https://github.com/amazinng-blib/ernest-predict-backend',
    language: [
      'Next Js',
      'Express Js',
      'Node Js',
      'MongoDB',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
  {
    heading: 'Secure url-checker',
    image: UrlChecker,
    link: 'https://url-checker-frontend.vercel.app/',
    frontEndcode: 'https://github.com/amazinng-blib/url-checker-frontend',
    // backEndcode:'https://github.com/amazinng-blib/url-checker-backend',
    language: ['React', 'Express Js', 'Node Js', 'MongoDB', 'CSS'],
  },
  {
    heading: 'Security Site',
    image: JointSecurity,
    link: 'https://joint-security-service.vercel.app/',
    frontEndcode: 'https://github.com/amazinng-blib/joint-security-service',
    // backEndcode:'',
    language: [
      'Next Js',
      'Express Js',
      'Node Js',
      'MongoDB',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
];

export const experince: Array<ExperienceInterface> = [
  {
    company: 'Ernest predict (Prediction site)',
    language:
      'Typescript, Next JS, Tailwind CSS, Redux (legacy Redux for state management)',
    worked_as: 'FullStack',
    role: [
      {
        role: 'I Implemented input validation using Joi to ensure that only appropriate data are passed during signup and login',
      },
      {
        role: `I implemented email sending using nodemailer and gmail using two factor authentication thereby saving the company money for getting private mail and it&apos;s super fast`,
      },
      {
        role: 'I implemented a route for performing CRUD operations on predictions by the admin',
      },
    ],
  },
  {
    company: ' Firepips School Management System',
    language: '  Node JS Express MongoDb',
    worked_as: 'Backend',
    role: [
      {
        role: 'I Implemented input validation  to ensure that only appropriate data are passed during signup and login',
      },
      {
        role: `I implemented email sending using nodemailer and gmail using two factor authentication thereby saving the company money for getting private mail and it&apos;s super fast`,
      },
      {
        role: 'I implemented  a  route for creating Courses where Youtube videos can be uploaded and the returned response returns the duration of every added video',
      },
      {
        role: 'I implemented  a  route for adding sections to created courses. Every sections can have as many videos as possible',
      },
      {
        role: 'I Implemented  a  route for handling payment during subscription using Paystack Api',
      },
      {
        role: 'I Implemented  a  route that keeps track of video progress',
      },
      {
        role: 'I Implemented  a  route for submitting Assignment',
      },
      {
        role: 'I Implemented  a  route for grading Assignment',
      },
    ],
  },
  {
    company: 'Secure Url Checker',
    language: ' React JS, Tailwind CSS, Node JS Express MongoDB',
    worked_as: 'FullStack',
    role: [
      {
        role: 'I Implemented input validation using Joi to ensure that only appropriate data are passed when typing url link to check',
      },

      {
        role: 'I implemented a route that confirms whether URL link is Secured or Not',
      },
    ],
  },
  {
    company: `Domino's`,
    language: ' Node JS Express MongoDB',
    worked_as: 'FullStack',
    role: [
      {
        role: 'Developed route optimization service for distribution logistics that automates route planning and achieves 20% of fuel savings.',
      },
      {
        role: ` Planned and estimated project features, designed and implemented route
        optimization algorithm, fast and memory-effective geographical data manipulation, frontend, Restful
        API.
        `,
      },
      {
        role: 'Developed business rule engine. Introduced and enforced common code conventions and best practices.',
      },
    ],
  },
  {
    company: 'Loyster',
    language: ' React JS,  CSS, Redux (legacy Redux for state management)',
    worked_as: 'FrontEnd',
    role: [
      {
        role: 'I Implemented Signup and login with Google Functionality',
      },
      {
        role: `I Observed best practices and replicated the UI design accurate`,
      },
      {
        role: 'I prevented unneccessary  re-render by using appropriate React hooks at appropriate time',
      },
    ],
  },
  {
    company: 'IP Address Tracker -- Personal Project',
    language: ' React JS,  Tailwind CSS and external API',
    worked_as: 'FrontEnd',
    role: [
      {
        role: 'I ensured screen responsiveness by handling different screen sizes',
      },
      {
        role: `I Observed best practices during the project by preventing unneccessary re-render when a component gets mounted`,
      },
      {
        role: `I implemented Ip Address search based on the didgits user inputs in the input field by making an API call to 
        the external API, getting their Coordinates in map and automatically navigating them in the map with the coords fecthed `,
      },
    ],
  },
];
