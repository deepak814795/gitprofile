// gitprofile.config.js
const config = {
  github: {
    username: 'deepak814795', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['videochat'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'deepakkushwaha-893464152/',
    website: '',
    twitter: 'Deepak6473',
    facebook: '',
    instagram: '',
    medium: '',
    dev: 'deeprite',
    stackoverflow: '', // example: '1/jeff-atwood'
    phone: '',
    email: 'deepak403419@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'Rest API',
    'MySQL',
    'PostgreSQL',
    'Git',
    'DSA',
    'Machine Learning',
    'Scikit',
    'Tensorflow',
    'Neural Networks',,
    'Firebase',
    'Postman'
  ],
  experiences: [
    {
      company: 'J.P.Morgan Chase & Co.',
      position: 'Virtual Internship',
      from: 'September 2022',
      to: 'November 2022',
      certificate: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_CGWvMFXLaZqAuR36E_1664535462775_completion_certificate.pdf',
    },
    {
      company: 'Google Developers Student Clubs',
      position: 'Web Development Lead',
      from: 'September 2022',
      to: 'Present',
      companyLink: '',
    },
  ],
   certifications: [
    {
      name: 'Machine Learning',
      body: 'Coursera Machine Learning',
      year: 'August 2023',
      link: 'https://www.coursera.org/account/accomplishments/verify/H9DBNJRMLBKS'
    },
    {
      name: 'J.P.Morgan',
      body: 'Virtual Internship',
      year: 'September 2022',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_CGWvMFXLaZqAuR36E_1664535462775_completion_certificate.pdf'
    },
    {
      name: 'Flipkart Grid 5.0',
      body: 'Flipkart Hackathon',
      year: '2023',
      link: 'https://unstop.com/certificate-preview/b9f64a01-9b2e-407e-bc7b-babce58e0770'
    },
  ], 
  education: [
    {
      institution: 'Indian Institute of Information Technology, Agartala',
      degree: 'Bachelors of Technology (Computer Science)',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'The Aditya Birla Public School (92%)',
      degree: 'AISSCE',
      from: '2019',
      to: '2020',
    },
    {
      institution: 'The Aditya Birla Public School (95.4%)',
      degree: 'AISSE',
      from: '2017',
      to: '2018',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Full Stack E-commerce Bookstore',
      description:
        'E-commerce online bookstore app using React.js, Material UI, and JavaScript for the frontend. For the backend, I used Node.js and MongoDB, implementing JWT authentication for secure user access and efficient database management. I also integrated Razorpay with React.js for online payments.',
      imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80',
      link: 'https://github.com/deepak814795/Bookstore_e-commerce',
    },
    {
      title: 'Object Detection Model',
      description:
        'This is a machine learning project. I created a real-time object detection model using Tensorflow.js and the COCO-SSD model. This model was integrated into a web application developed with React.js for rendering the models results on the web in real-time.',
      imageUrl: 'https://www.forecr.io/cdn/shop/articles/how-to-run-tensorflow-object-detection-in-real-time-with-raspberry-v2-csi-camera-on-nvidia-jetson-nano-447485.jpg?v=1659971239',
      link: 'https://github.com/deepak814795/object_detection_ML',
    },
    {
      title: 'Video Conferencing App',
      description:
        'Developed a real-time video chat application using React.js, Elastic-UI, and the Zego-Cloud service. This app supports private rooms with secret keys for access control and utilizes Firebase for user authentication.',
      imageUrl: 'https://blog.zegocloud.com/wp-content/uploads/2023/02/make-a-1-on-1-video-chat-app.jpg',
      link: 'https://github.com/deepak814795/video_conference',
    },
    {
      title: 'Movie Streaming Platform',
      description:
        'Developed a platform to watch latest and top-trending movies using React.JS and Material UI. Also used TMDB API for continous update of database',
      imageUrl: 'https://empiremovies.com/wp-content/uploads/2020/01/StreamonHD.png',
      link: 'https://github.com/deepak814795/streaming-platform',
    },
    {
      title: 'Online Weather App',
      description:
        'Developed a realtime weather application using react.js. Intergrated open weather API to show real time weather data of any geolocation.',
      imageUrl: 'https://items.epicpxls.com/uploads/photo/9a56aa3cd9ec655cbbab1226b3b1c64a',
      link: 'https://github.com/deepak814795/weather-app',
    },
    {
      title: 'Realtime Code Editor',
      description:
        'Created a browser based realtime code editor to run any HTML, CSS, Javascript code an give instant output',
      imageUrl: 'https://windows.atsit.in/bc/wp-content/uploads/sites/8/2023/08/idx-e9a085e79baegoogle-e68ea8e587bae4babae5b7a5e699bae883bde9a985e58b95e38081e59fbae696bc-web-e79a84e9968be799bce792b0e5a283.jpg',
      link: 'https://github.com/deepak814795/weather-app',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'deeprite', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/deepak814795"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
