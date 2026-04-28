export const NAV_LINKS = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
];

export const SKILLS = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'JavaScript (ES6+)'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3', 'Chart.js', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API Design', 'JWT Authentication'],
  },
  {
    category: 'Databases',
    items: ['MongoDB (Mongoose)', 'MySQL'],
  },
  {
    category: 'Tools & Cloud',
    items: ['Vercel', 'Netlify', 'Render', 'Git', 'GitHub', 'Postman', 'VS Code', 'Appwrite'],
  },
  {
    category: 'Core CS',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'System Design Basics'],
  },
];

export const PROJECTS = [
  {
    title: 'EduLearn',
    subtitle: 'Full Stack EdTech Platform',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    description:
      'A full-featured EdTech platform with multi-role access for Students, Teachers, and Admins — each with protected dashboards and tailored workflows.',
    features: [
      'Multi-role system with protected dashboards',
      'Course management, video lectures & quiz engine',
      'Progress tracking across modules',
      '15+ REST APIs with validation, error handling & file uploads',
    ],
    live: null,
    code: 'https://github.com/Mysteriousstorm/Edulearn',
  },
  {
    title: 'Blogsy',
    subtitle: 'SaaS Blogging Platform',
    tech: ['React', 'Redux Toolkit', 'Appwrite', 'Tailwind CSS'],
    description:
      'A full-stack blogging platform powered by Appwrite as BaaS. Features a rich TinyMCE editor, image uploads, and seamless auth state management.',
    features: [
      'TinyMCE rich text editor with image upload',
      'Auth state management with protected routes',
      'Appwrite backend — no custom server needed',
      'Clean, responsive reading experience',
    ],
    live: 'https://blogsy-iota.vercel.app',
    code: 'https://github.com/abhaybathri/blogsy',
  },
  {
    title: 'WeatherScope',
    subtitle: 'Weather Analytics Dashboard',
    tech: ['React', 'Tailwind CSS', 'Chart.js', 'Open-Meteo API'],
    description:
      'A real-time and historical weather dashboard with 5 interactive charts, unit toggles, and smart API optimization that reduced calls by ~40%.',
    features: [
      'Real-time + 2-year historical weather data',
      '5 interactive charts with zoom & pan',
      'Unit toggle (°C / °F, km/h / mph)',
      'Optimized API usage — ~40% fewer calls',
    ],
    live: 'https://weather-scope-nu.vercel.app',
    code: 'https://github.com/abhaybathri/Weather-Scope',
  },
];
