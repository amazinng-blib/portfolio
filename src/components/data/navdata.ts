import {
  ExperienceInterface,
  NavDataArray,
  NavItem,
  ProjectArray,
  ProjectItems,
  SkillsArray,
  SkillsItem,
} from '../Types';
// import {
//   Ernestpredict,
//   Ip_Address,
//   JointSecurity,
//   UrlChecker,
//   fire_pips,
// } from '../../../public/image';

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
    heading: 'Forex Trading Online Teaching School',
    image: '/image/firepips_shot.PNG',
    link: 'https://firepipsfx.com/',
    frontEndcode: 'https://github.com/samcode-dev/firepips3',
    // backEndcode:'https://github.com/amazinng-blib/Firepips',
    language: ['React Js', 'Express Js', 'Node Js', 'MongoDB', 'SASS'],
  },
  {
    heading: 'Real State Management Site',
    image: '/image/real_state.PNG',
    link: 'https://real-state-frontend-iota.vercel.app/',
    frontEndcode: 'https://github.com/samcode-dev/firepips3',
    // backEndcode:'https://github.com/amazinng-blib/Firepips',
    language: ['React Js', 'Express Js', 'Node Js', 'MongoDB', 'Prisma', 'CSS'],
  },
  {
    heading: 'IP Address Tracker',
    image: '/image/ip_address.PNG',
    link: 'https://ip-address-tracker-bay-eight.vercel.app/',
    frontEndcode: '',
    // backEndcode:'',
    language: ['React Js', 'External Api', 'Tailwind CSS'],
  },
  {
    heading: 'Prediction site',
    image: '/image/prediction_site.PNG',
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
    image: '/image/url-checker.PNG',
    link: 'https://url-checker-frontend.vercel.app/',
    frontEndcode: 'https://github.com/amazinng-blib/url-checker-frontend',
    // backEndcode:'https://github.com/amazinng-blib/url-checker-backend',
    language: ['React', 'Express Js', 'Node Js', 'MongoDB', 'CSS'],
  },
  {
    heading: 'Security Site',
    image: '/image/joint-security.PNG',
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
        role: '	Planned and estimated project features, designed and implemented route optimization algorithm.',
      },
      {
        role: `	Designed and developed "Ernest Predict," a full-stack prediction site, providing users with daily game predictions and results.`,
      },
      {
        role: '	I implemented CORS configuration to avoid security pitfalls',
      },
      {
        role: '	Implemented a paginated interface for efficient navigation through daily games and results',
      },
      {
        role: '	•	Ensured data security and privacy by implementing robust user authentication mechanisms',
      },
    ],
  },
  {
    company: ' Firepips School Management System',
    language: 'React Js, Express Js, Node Js, MongoDB, SASS',
    worked_as: 'Backend',
    role: [
      {
        role: '	Spearheaded the development of the full backend for a forex teaching school, enabling seamless content management and secure user interactions',
      },
      {
        role: `	Implemented a video uploading system, allowing administrators to upload teaching materials effortlessly`,
      },
      {
        role: '	Designed and integrated an assignment management system, facilitating easy assignment creation, distribution, and access',
      },
      {
        role: '	Developed a blog posting feature, providing a platform for administrators to share valuable insights with users',
      },
      {
        role: '	Implemented a payment details module, allowing administrators to track financial transactions related to courses',
      },
      {
        role: ' Created API endpoints for assigning user plans upon successful payment verification',
      },
      {
        role: '	Integrated the Paystack webhook API to ensure secure and reliable payment verification processes',
      },
      {
        role: '	I handle email sending using nodemailer and gmail',
      },
      {
        role: '	Implemented comment API in the blog post',
      },
    ],
  },
  {
    company: 'Secure Url Checker',
    language: ' React JS, Tailwind CSS, Node JS Express MongoDB',
    worked_as: 'FullStack',
    role: [
      {
        role: '	Conceptualized and developed a secure URL checker application using Node.js and Express.js',
      },

      {
        role: '	Implemented secure coding practices to validate and check the security status of URLs',
      },
      {
        role: '		Designed and implemented RESTful APIs for seamless integration with other systems',
      },
      {
        role: '		Deployed the application on Render and Vercel for optimal accessibility',
      },
    ],
  },

  {
    company: 'IP Address Tracker -- Personal Project',
    language: ' React JS,  Tailwind CSS and external API',
    worked_as: 'FrontEnd',
    role: [
      {
        role: '	Utilized an existing Geolocation API to fetch coordinates based on user IP addresses',
      },
      {
        role: `	Designed and implemented a responsive and visually appealing React frontend to display user locations on a map`,
      },
      {
        role: `	Ensured an intuitive user experience through thoughtful UI/UX design principles `,
      },
      {
        role: ` Implemented best practices to optimize performance and prevent unnecessary re-renders`,
      },
      {
        role: `	Deployed the application on vercel to ensure accessibility`,
      },
    ],
  },
];
