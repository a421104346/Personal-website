const portfolioProjects = [
  {
    id: 1,
    title: 'Crawler Management Platform',
    summary:
      'FastAPI + React + TypeScript full-stack crawler orchestration platform with JWT auth, task monitoring, and WebSocket progress updates.',
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
    status: 'Deploying',
    githubUrl: 'https://github.com/a421104346/Crawler_Practice-clean2',
    liveUrl: '',
    deployUrl:
      'crawler-practice-clean2-n3g7x2xll.vercel.app',
    notes:
      'I just deployed the frontend to Vercel. There is no backend yet because the deployment is too expensive.',
  },
  {
    id: 2,
    title: 'Morkblade Keyboard Driver Panel',
    summary:
      'A Vue 3 + TypeScript keyboard management panel with preview mode, WebHID-ready architecture, and modular feature pages.',
    iconKey: 'frontend',
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'TDesign', 'GSAP'],
    projectType: 'Frontend',
    status: 'Deploying',
    githubUrl:
      'https://github.com/a421104346/KeyboardDriverLearning_demo-clean',
    liveUrl: '',
    deployUrl:
      'https://keyboard-driver-learning-demo-clean-javpanycn.vercel.app',
    notes:
      'For preview mode no extra env vars are required. If SDK integration is needed, set VITE_SDK_ENABLED=true in Vercel.',
  },
  {
    id: 3,
    title: 'Weather App Development Challenge',
    summary:
      'A React weather app with real-time weather search and map-focused visual presentation for responsive devices.',
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
      'Already publicly accessible. ',
  },
  {
    id: 4,
    title: 'Personal Website (This one)',
    summary:
      'Earlier version of the personal website with AI chat and message board; suitable as a legacy milestone demo.',
    iconKey: 'frontend',
    techStack: ['React', 'React Router', 'Firebase', 'OpenAI API'],
    projectType: 'Frontend',
    status: 'Live',
    githubUrl: 'https://github.com/a421104346/Personal-website',
    liveUrl: 'https://a421104346.github.io/Personal-website',
    deployUrl:
      'https://vercel.com/new/clone?repository-url=https://github.com/a421104346/Personal-website&project-name=personal-website-legacy',
    notes:
      'Can stay on GitHub Pages or be redeployed to Vercel for consistent domain style.',

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
      'Public showcase version focuses on English workflow and local data processing.',
  },
];

export default portfolioProjects;
