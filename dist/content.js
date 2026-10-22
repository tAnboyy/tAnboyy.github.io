// Replace null values with your verified details. Placeholders remain visible until then.
window.portfolio = {
  name: 'Thanmay Mohandas Das',
  email: 'mdasthanmay@gmail.com',
  github: 'https://github.com/tAnboyy',
  linkedin: 'https://www.linkedin.com/in/thanmay-m-das-676240193/',
  resume: './thanmay-mohandas-das-resume.pdf',
  location: 'Charlotte, NC, USA',
  education: 'M.S. in Computer Science, UNC Charlotte · Expected December 2026',
  projects: {
    cinnamon: {
      name: 'Cinnamon', category: 'Food ordering & commerce',
      intro: 'From deciding what to eat to placing the order.',
      question: 'How can a food-ordering experience connect everyday meals, weekly plans, and larger catering needs?',
      approach: 'A React Native customer app with menu browsing, weekly meal plans, a shared cart, order history, and separate native and web checkout implementations. The wider project includes a Spring Boot API, a restaurant admin app, and a marketing site.',
      focus: 'Connecting the customer journey across platforms. Redux manages the cart, Firebase handles customer sign-in, and the backend connects order and menu data in Firestore with Stripe payment integration. Catering browsing is also represented, with sample menu data in the inspected screen.',
      stack: ['React Native / Expo', 'TypeScript', 'Redux Toolkit', 'Java / Spring Boot', 'Firebase / Firestore', 'Stripe'],
      repository: 'https://github.com/tAnboyy/cinnamon_customer-app', demo: 'https://cinnamon-landing-page.onrender.com/#menu'
    },
    hourtracker: {
      name: 'Hour Tracker', category: 'Personal productivity',
      intro: 'A small check-in for a more intentional day.',
      question: 'How can tracking what happened and choosing what comes next fit into the rhythm of a day?',
      approach: 'An Android-first time-tracking app that pairs hourly activity logs with a goal for the next hour. Notification actions let users log an activity or set a goal, while a dashboard summarizes streaks, logging consistency, tags, and backfilled entries, with CSV export.',
      focus: 'Keeping the core workflow local and quick. SQLite stores logs on the device and supports writes from notification handlers. Optional Supabase sign-in and synchronization connect local records to a cloud account. The app also includes a backlog flow for logging or explicitly skipping missed hours.',
      stack: ['React Native / Expo', 'TypeScript', 'Expo Router', 'SQLite', 'Notifee', 'Zustand', 'Supabase'],
      repository: 'https://github.com/tAnboyy/hour-tracker-app', demo: null
    },
    reflections: {
      name: 'Reflections', category: 'AI & reflective learning',
      intro: 'Helping students make sense of what they learn.',
      question: 'How can a conversation help students move beyond recalling an answer to reflecting on their own understanding?',
      approach: 'An academic reflection app with professor-configured modules and two student journeys: topic-based conversations with an AI tutor, and milestone reflections connected to similar historical student experiences. A React interface brings together student reflection, module configuration, and an analytics dashboard.',
      focus: 'Connecting guided questions, reflection evaluation, and relevant past experiences. The backend uses LangGraph for conversation workflows with PostgreSQL checkpointing, and sentence embeddings with cosine similarity for matching reflections to historical challenges. AI-generated evaluations are outputs to examine, not evidence of improved learning on their own.',
      stack: ['React / Vite', 'Python / FastAPI', 'LangGraph', 'PostgreSQL', 'Sentence Transformers'],
      repository: 'https://github.com/tAnboyy/reflections-app', demo: null
    },
    campusnav: {
      name: 'CampusNav', category: 'Campus navigation',
      intro: 'A familiar campus, even on your first day.',
      question: 'How can students find the places and people they need without already knowing their way around campus?',
      approach: 'A mobile campus-discovery app with map markers, searchable places, category filters, and a teacher directory. University-specific configuration brings campus boundaries, map settings, branding, and available features into one multi-tenant system, with a Spring Boot API and a separate React admin interface.',
      focus: 'Making campus information easier to find, while accounting for unreliable connectivity. The app tries the API first, then cached data, with bundled NMAMIT data as a final fallback for that campus.',
      stack: ['React Native / Expo', 'TypeScript', 'React Native Maps', 'React / Vite', 'Java / Spring Boot', 'PostgreSQL'],
      repository: 'https://github.com/tAnboyy/NMAMIT-Guide', demo: 'https://campusnav-landing.vercel.app/'
    },
    urec: {
      name: 'UREC Live', category: 'Gym technology',
      intro: 'Making the shared gym a little less chaotic.',
      question: 'How can a gym help people coordinate around shared equipment?',
      approach: 'A connected gym experience bringing together a member app, backend services, and an admin interface. The work explores how equipment information and scheduling can support the next decision in a workout.',
      focus: 'Connecting the member experience to the system behind it, and exploring the practical questions around bringing gym technology into use.',
      stack: ['React Native / Expo', 'Java / Spring Boot', 'PostgreSQL'],
      repository: 'https://github.com/orgs/urec-live/repositories', demo: null
    },
    spotter: {
      name: 'Spotter', category: 'AI & interaction',
      intro: 'A workout companion that keeps the next step simple.',
      question: 'What happens to a workout plan when the equipment you need is taken?',
      approach: 'A staged workout-coach prototype with equipment-aware exercise flow, set tracking, and rest states. The interaction separates keeping the original plan from explicitly accepting an equipment alternative.',
      focus: 'A complete workout journey, shared session state, and short coaching interactions. Voice and watch experiences are areas of development rather than claims of a fully released product.',
      stack: ['React Native / Expo', 'FastAPI', 'SQLite', 'Voice integration'],
      repository: 'https://github.com/tAnboyy/spotter', demo: 'https://spotter-sandy-beta.vercel.app/'
    },
    cluball: {
      name: 'CourseLab', category: 'AI & interaction',
      intro: 'Connecting learning tools into one coherent journey.',
      question: 'How can AI-supported learning tools fit the way courses and assignments already work?',
      approach: 'Work on a shared learning platform connecting assignments, reflection experiences, and AI-supported learning tools. Canvas LTI and assignment-controlled handoffs are part of the integration work.',
      focus: 'Preserving the student experience while coordinating identity, assignment configuration, and transitions between tools.',
      stack: ['React', 'FastAPI', 'LangGraph', 'Canvas LTI'],
      repository: 'https://github.com/tAnboyy/CourseLab', demo: null
    },
    research: {
      name: 'Gym scheduling lab', category: 'Research',
      intro: 'Turning “what if?” into an experiment.',
      question: 'Can better scheduling reduce contention for shared gym equipment?',
      approach: 'A simulation workspace for studying advisory scheduling, equipment contention, and the effect of people accepting or declining recommendations. Comparable scenarios make it possible to examine scheduling choices under controlled assumptions.',
      focus: 'Reproducible experiments, explicit assumptions, and a clear distinction between synthetic simulation results and real-gym outcomes.',
      stack: ['Python', 'SimPy', 'Scheduling', 'Experiment design'],
      repository: 'Coming soon...', demo: null
    }
  }
};
