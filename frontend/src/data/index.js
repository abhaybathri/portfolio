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
    items: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API Design', 'JWT Authentication'],
  },
  {
    category: 'Databases',
    items: ['MongoDB (Mongoose)'],
  },
  {
    category: 'Tools & Cloud',
    items: ['Vercel', 'Netlify', 'Git', 'GitHub', 'Postman'],
  },
  {
    category: 'Core CS',
    items: ['Data Structures & Algorithms', 'Object Oriented Programming'],
  },
];

export const PROJECTS = [
  {
    title: 'Blogsy',
    subtitle: 'Blogging Platform',
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
    title: 'nexPlay',
    subtitle: 'Content Platform',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    description:
      'Complete Video Streaming Platform where user upload and watch content like videos, tweets and playlists',
    features: [
      'Upload videos with thumbnail, title, description etc',
      'Channel Dasboard which have subscribers count, toggle button, cover/ avatar images and channel content',
      'Comment and likes features',
      '30+ REST APIs with validation, error handling & file uploads',
    ],
    live: null,
    code: 'https://github.com/Mysteriousstorm/Edulearn',
  }
  ,
  
  
  {
    title: 'LeadFlow',
    subtitle: 'Ready to bring your leads into one place?',
    tech: ['React', 'Tailwind CSS', 'Node', 'Express','MongoDB'],
    description:
      'Capture incoming opportunities, assign ownership, and track every conversation from first contact to outcome. Built for small sales teams who need clarity, not complexity.',
    features: [
      'Centralised lead management',
      'Clear lead ownership',
      'Pipeline status tracking',
      'Notes and conversation history',
      'Full activity timeline',
      'Role-based access control'
    ],
    live: 'https://lead-flow-rust-omega.vercel.app/',
    code: 'https://github.com/abhaybathri/Lead-Flow',
  },
  {
    title: 'EduLearn',
    subtitle: 'EdTech Platform',
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
    title: 'She Can Foundation',
    subtitle: 'Foundation Web Site',
    tech: ['React', 'Tailwind CSS', 'React Router', 'Lucide React'],
    description:
      'The official frontend website for She Can Foundation, a registered NGO dedicated to empowering underprivileged women across India through education, skill development, health awareness, and legal aid.',
    features: [
      'Dark / light theme toggle (persisted in localStorage)',
      'Fully responsive — mobile, tablet, desktop',
      'Sticky navbar with scroll shadow and active link highlighting',
      'Foundation logo as browser tab favicon',
    ],
    live: 'https://she-can-foundation-theta-five.vercel.app/',
    code: 'https://github.com/abhaybathri/she-can-foundation',
  },
  {
    title: 'Weather Scope',
    subtitle: 'Weather Dashboard',
    tech: ['React', 'Tailwind CSS', 'Chart.js', 'Open-Meteo', 'React Router'],
    description:
      'A responsive weather dashboard built with React. Shows current conditions, hourly forecasts, and up to 2 years of historical data — all pulled from the Open-Meteo API using your browser GPS',
    features: [
      'Live Gps weather Data',
      'Data represent visually with various charts',
      'Show weather data of upto 2 years',
      'Responsive, Light/Dark theme and user freindly UI',
    ],
    live: 'https://weather-scope-nu.vercel.app/',
    code: 'https://github.com/abhaybathri/Weather-Scope',
  },
];
