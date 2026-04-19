const portfolioProjects = [
  {
    id: 1,
    title: 'Crawler Management Platform',
    summary:
      'A full-stack crawler platform built with FastAPI + React + TypeScript, featuring JWT auth, task orchestration, monitoring APIs, and WebSocket progress updates.',
    iconKey: 'fullstack',
    techStack: [
      'FastAPI',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'WebSocket',
    ],
    projectType: 'Full-Stack',
    status: 'Live',
    githubUrl: 'https://github.com/a421104346/Crawler_Practice-clean2',
    liveUrl: 'https://crawler-practice-clean2.vercel.app',
    deployUrl: 'https://crawler-practice-clean2.vercel.app',
    notes:
      'To keep costs reasonable, this demo currently hosts the frontend only. If you would like to explore the full experience, feel free to run the backend locally.',
  },
  {
    id: 2,
    title: 'Morkblade Keyboard Driver Panel',
    summary:
      'A Vue 3 + TypeScript keyboard management panel with preview mode, WebHID-ready architecture, and modular feature pages.',
    iconKey: 'frontend',
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'TDesign', 'GSAP'],
    projectType: 'Frontend',
    status: 'Live',
    githubUrl:
      'https://github.com/a421104346/KeyboardDriverLearning_demo-clean',
    liveUrl: 'https://keyboard-driver-learning-demo-clean.vercel.app',
    deployUrl: 'https://keyboard-driver-learning-demo-clean.vercel.app',
    notes:
      'Runs in preview mode by default and supports optional WebHID SDK mode with VITE_SDK_ENABLED=true.',
  },
  {
    id: 3,
    title: 'Weather App Development Challenge',
    summary:
      'A React weather dashboard challenge project (originally from CodeSandbox) with search-driven weather display and responsive UI.',
    iconKey: 'frontend',
    techStack: ['React', 'JavaScript', 'CSS3', 'Weather API'],
    projectType: 'Frontend',
    status: 'Live',
    githubUrl:
      'https://github.com/a421104346/Weather_App_Development_Challenge',
    liveUrl: 'https://main.d131zjotu2of9u.amplifyapp.com/',
    deployUrl:
      'https://main.d131zjotu2of9u.amplifyapp.com/',
    notes:
      'Repository is stable and publicly accessible; currently hosted on Amplify.',
  },
  {
    id: 4,
    title: 'Personal Website (This one)',
    summary:
      'This is the website where I introduce myself and experiment with newly learned skills.',
    iconKey: 'frontend',
    techStack: ['React', 'React Router', 'Firebase', 'OpenAI API'],
    projectType: 'Frontend',
    status: 'Live',
    githubUrl: 'https://github.com/a421104346/Personal-website',
    liveUrl: 'https://a421104346.github.io/Personal-website',
    deployUrl:
      'https://vercel.com/new/clone?repository-url=https://github.com/a421104346/Personal-website&project-name=personal-website-legacy',
    notes:
      'This is my portfolio website (the one you are viewing right now). I hope you enjoy it.',
  },
  {
    id: 5,
    title: 'ExcelAnalysis Public Version',
    summary:
      'A local-first Streamlit tool for employee management, work records import, statistics dashboards, and payroll calculation with SQLite storage.',
    iconKey: 'fullstack',
    techStack: ['Python', 'Streamlit', 'SQLite', 'Pandas', 'Plotly'],
    projectType: 'Full-Stack',
    status: 'Live',
    githubUrl: 'https://github.com/a421104346/ExcelAnalysis_publicV',
    liveUrl: 'https://excelanalysispublicv.streamlit.app/',
    deployUrl: 'https://excelanalysispublicv.streamlit.app/',
    notes:
      'Latest public demo is English-focused, local-first, and deployed on Streamlit Cloud.',
  },
];

export default portfolioProjects;
