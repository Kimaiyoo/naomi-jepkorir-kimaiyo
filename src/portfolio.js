/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Naomi Jepkorir Kimaiyo",
  title: "Hi , I'm Naomi",
  subTitle: emoji(
    "A passionate Data Scientist & Software Developer with a love for extracting insights from data and building impactful solutions 👾."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pQZW3nH1QTFujiVH_Op4DhkjAMsfjP-m/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kimaiyoo",
  linkedin: "http://linkedin.com/in/naomi-jepkorir-kimaiyo/",
  dev: "https://dev.to/datawithnaomi",
  gmail: "naomijepkorir18@gmail.com",
   whatsapp: "+254796733083",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
 // medium: "https://medium.com/@saadpasta",
 // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENTIST • SOFTWARE DEVELOPER • TECH BLOGGER",
  skills: [
    emoji(
      "📊 Analyzing data to extract actionable insights"
    ),
    emoji("📈 Building data pipelines, dashboards, and machine learning models"),
    emoji(
      "🧪 Experimenting with Jupyter notebooks and Python libraries like Pandas, NumPy, and scikit-learn"
    ),
    emoji( "📱 Developing mobile applications with Flutter & Firebase"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Pandas", fontAwesomeClassname: "fas fa-database" },
    { skillName: "NumPy", fontAwesomeClassname: "fas fa-square-root-alt" },
    { skillName: "scikit-learn", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Jupyter", fontAwesomeClassname: "fas fa-book" },
    { skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kabarak University",
      logo: require("./assets/images/KabarakLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2021 - Dec 2025(Expected)",
      desc: "Focused on data science, machine learning,Cybersecurity and software engineering.",
      descBullets: [
        "AI",
        "Software Engineering",
        "DBMS",
        "Networking",
        "OOP",
        "Distributed Systems"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & Analysis", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning & Python",
      progressPercentage: "75%"
    },
    {
      Stack: "Flutter & Firebase App Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Attaché",
      company: "Agile Business Solutions Ltd",
      companylogo: require("./assets/images/agileLogo.webp"),
      date: "Jan 2025 – April 2025",
      desc: "Worked with ERP systems and Microsoft Business Central",
      descBullets: [
        "Participated in UAT for Microsoft Dynamics 365 Business Central",
        "Worked with Power BI, SQL, and AL language",
        "Analyzed logs, monitored system performance"
      ]
    },
    {
      role: "Robotics & IoT Instructor",
      company: "Pixel Academy Africa",
      companylogo: require("./assets/images/pixelLogo.webp"),
      date: "Sept 2024 – Dec 2025",
     descBullets: [
      "Taught IoT and robotics to Grade 8 students",
      "Introduced hands-on AI and smart tech projects"
    ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Web Scraping Mini Project",
      projectDesc: "A Google Colab notebook demonstrating web scraping using Python and BeautifulSoup.",
      footerLink: [
        {
          name: "Check it Out!",
          url: "https://colab.research.google.com/drive/1dtAq1mA5zKw76gf42LawbedBtlYB3Q8Y?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Medication Reminder App",
      projectDesc: "Cross-platform mobile app built with Flutter and Firebase for medication reminders.",
      footerLink: [
        {
          name: "Check it Out!",
          url: "https://github.com/Kimaiyoo/medication_reminder_app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Software Developer",
      subtitle: "Completed Certification from Power Learn Project for Software Development",
      image: require("./assets/images/plpLogo.webp"),
      imageAlt: "PLP Logo",
      footerLink: [
        {name: "Certification",
           url: "https://drive.google.com/file/d/1kkcHHeVqW2SwW0dYMDE-UJxC9AhRAu-_/view?usp=sharing"
          },
      ]
    },
    {
     title: "Postman API Fundamentals Student Expert",
     subtitle: "Issued by Postman",
     logo_path: "postman_logo.png", // Make sure this logo is saved
     imageAlt: "Postman",
     color_code: "#FF6C37", // Postman's brand color
     footerLink: [
        {name: "Certification",
           url: "https://api.badgr.io/public/assertions/PrT_SUmaR0e3BAFxtiLbNg?identity__email=naomijepkorir18%40gmail.com"
          },
      ]
  },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Data and tech, I love sharing what i am getting into and learning",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dev.to/datawithnaomi/how-excel-is-used-in-real-world-data-analysis-3hhp ",
      title: "How Excel is Used in Real-World Data Analysis",
      description:
        "Would you like to get an idea of how Excel makes Data Analysis Easier?"
    },
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254796733083",
  email_address: "naomijepkorir18@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
