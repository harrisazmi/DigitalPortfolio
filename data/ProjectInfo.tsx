//add more icon later on
import { MailIcon } from "@/Icons";
export const askMyGovPortfolio = {
  projectName: "AskMyGov",
  projectImage: "/projects/collab/askgov.png",
  livehref: "https://askmygov.gov.my/",
  githubhref: "https://github.com/govtechmy/ask-gov-my",
  overview:
    "AskMyGov is a centralized platform designed to streamline communication between citizens and government agencies by providing a single, reliable source for frequently asked questions. It consolidates scattered information from multiple agency websites, ensuring accessibility and consistency while enhancing the efficiency of citizen-government interactions.",

  techstack: {
    main: [
      { name: "TypeScript", path: "/tools/languages/typescript.png" },
      { name: "NextJs", path: "/tools/fullstack/nextjs.png" },
      { name: "Tailwind CSS", path: "/tools/frontend/tailwind.png" },
      { name: "i18n", path: "/tools/others/i18n.png" },
      { name: "Elasticsearch", path: "/tools/database/elasticsearch.png" },
      { name: "ESLint", path: "/tools/others/eslint.png" },
      { name: "Shadcn UI", path: "/tools/others/shadcn.png" },
      { name: "Radix UI", path: "/tools/frontend/radix.png" },
      { name: "MYDS UI", path: "/tools/others/myds.png" },
      { name: "Docker", path: "/tools/devops/docker.png" },
      {
        name: "GitHub Actions (GHA)",
        path: "/tools/devops/gha.png",
      },
      { name: "AWS S3", path: "/tools/others/awss3.png" },
      { name: "AWS ECR", path: "/tools/others/awsecr.png" },
      { name: "AWS EKS", path: "/tools/others/awseks.png" },
      { name: "Kubernetes", path: "/tools/devops/k8s.png" },
      { name: "Spinnaker", path: "/tools/devops/spinnaker.png" },
    ],
  },

  sections: {
    FrontendDevelopment: {
      title: "Frontend Development",
      items: [
        {
          icon: <MailIcon />,
          heading: "Architecture & Performance",
          details: [
            "Built a **modular** Next.js frontend optimized for scalability.",
            "Used **SSR (Server-Side Rendering)** and **SSG (Static Site Generation)** for improved load times.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Internationalization",
          details: [
            "Integrated **i18n** for **multilingual support**, ensuring **accessibility** for diverse users.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Component Consistency",
          details: [
            "Standardized UI elements with **ShadCN, Radix UI, and MyDS** to maintain a **cohesive** design.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Search Optimization",
          details: [
            "Implemented **Elasticsearch** for **fast** and **efficient** search functionality.",
            "**Highlights** exact search term locations within documents, improving **contextual relevance** for users.",
          ],
        },
      ],
    },

    DevopsDevelopment: {
      title: "DevOps & Infrastructure",
      items: [
        {
          icon: <MailIcon />,
          heading: "CI/CD Efficiency",
          details: [
            "Automated **deployment pipelines** using **GitHub Actions** and **Spinnaker**, ensuring smooth updates.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Security & Access Controls",
          details: [
            "Implemented **secure AWS authentication** and **infrastructure access controls** to protect data and resources.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "CICD Optimization",
          details: [
            "Streamlined image management by **automating Docker builds** and **ECR pushes**.",
          ],
        },

        {
          icon: <MailIcon />,
          heading: "Cloud & Infra Optimization",
          details: [
            "Managed containerized applications in **k8s**, hosted on **AWS EKS**, image on **ECR**",
            "Optimized **resource allocation** to ensure **high availability** and **performance**.",
          ],
        },
      ],
    },
  },
};

export const directoryPortfolio = {
  projectName: "Directory",
  projectImage: "/projects/collab/directory.png",
  livehref: "https://directory.gov.my/",
  githubhref: "https://github.com/govtechmy/directory-gov-my",
  overview:
    "Directory.gov.my, a centralized platform for accessing government officers' details and ministry contact information. The platform features a comprehensive staff and office directory, providing verified positions, divisions, contact details, and integrated mapping services (Google Maps). With bilingual support and mobile-responsive design, it streamlines access to government contacts, enhancing efficiency for citizens, employees, and stakeholders",

  techstack: {
    main: [
      { name: "TypeScript", path: "/tools/languages/typescript.png" },
      { name: "NextJs", path: "/tools/fullstack/nextjs.png" },
      { name: "Tailwind CSS", path: "/tools/frontend/tailwind.png" },
      { name: "i18n", path: "/tools/others/i18n.png" },
      { name: "Elasticsearch", path: "/tools/database/elasticsearch.png" },
      { name: "Shadcn UI", path: "/tools/others/shadcn.png" },
      { name: "Radix UI", path: "/tools/frontend/radix.png" },
      { name: "MYDS UI", path: "/tools/others/myds.png" },
      { name: "Docker", path: "/tools/devops/docker.png" },
      {
        name: "GitHub Actions (GHA)",
        path: "/tools/devops/gha.png",
      },
      { name: "AWS ECR", path: "/tools/others/awsecr.png" },
      { name: "AWS EKS", path: "/tools/others/awseks.png" },
      { name: "Kubernetes", path: "/tools/devops/k8s.png" },
      { name: "Spinnaker", path: "/tools/devops/spinnaker.png" },
    ],
  },
  sections: {
    FrontendDevelopment: {
      title: "Frontend Development",
      items: [
        {
          icon: <MailIcon />,
          heading: "Platform Optimization",
          details: [
            "**Resolved critical bugs** and optimized frontend performance for a seamless user experience.",
            "**Improved page load times** and responsiveness through optimized rendering and assets.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Bug Fixes & UX",
          details: [
            "**Fixed critical bugs**, significantly improving platform stability and the overall user experience.",
            "Implemented **i18n (internationalization)** to support multilingual capabilities.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Workflow & Dependencies",
          details: [
            "**Resolved pnpm dependency issues** to ensure a smoother development workflow.",
            "**Removed Payload CMS**, simplifying backend dependencies and reducing complexity.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Search & Code Quality",
          details: [
            "Disabled unnecessary **SEO indexing** to improve search engine optimization.",
            "**Configured Elasticsearch** for faster, more accurate search results.",
            "**Optimized the data table component** and refactored code for better performance and maintainability.",
          ],
        },
      ],
    },

    DevopsDevelopment: {
      title: "DevOps Development",
      items: [
        {
          icon: <MailIcon />,
          heading: "CI/CD and Workflow Automation",
          details: [
            "**Set up GitHub Actions (GHA)** for CI/CD automation.",
            "**Fixed environment variable passing** in GitHub Actions workflows.",
            "**Implemented proper hooks** in GHA for deployment consistency.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Docker and Containerization",
          details: [
            "**Dockerized the Next.js application**, improving containerization for deployment efficiency.",
            "**Reduced Docker image size** and improved Dockerfile and YAML configurations.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Cloud and Infrastructure Management",
          details: [
            "Updated **configurations** for **AWS** deployments.",
            "**Fixed Elastic Load Balancer (ELB) issues** and updated the deployment path for better reliability.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Kubernetes (K8s) Configuration Management",
          details: [
            "**Set up and managed** Kubernetes configuration files **(.kube)** in GitHub",
            "Enabled **streamlined deployment** and environment management",
            "Ensured **proper configuration** for seamless integration with Kubernetes clusters",
          ],
        },
      ],
    },
  },
};

export const mydsPortfolio = {
  projectName: "MYDS",
  projectImage: "/projects/collab/myds.png",
  livehref: "https://design.digital.gov.my/en",
  githubhref: "https://github.com/govtechmy/myds",
  overview:
    "MYDS is a comprehensive design system created to establish consistent user experience standards across Malaysian government digital services. The system provides a collection of reusable UI components, design patterns, and guidelines that enable teams to build accessible, responsive, and visually cohesive applications efficiently. MYDS aims to reduce redundancy in UI development efforts, accelerate project timelines, and ensure compliance with government digital standards.",

  techstack: {
    main: [
      { name: "TypeScript", path: "/tools/languages/typescript.png" },
      { name: "NextJs", path: "/tools/fullstack/nextjs.png" },
      { name: "Tailwind CSS", path: "/tools/frontend/tailwind.png" },
      { name: "i18n", path: "/tools/others/i18n.png" },
      { name: "Shadcn UI", path: "/tools/others/shadcn.png" },
      { name: "Radix UI", path: "/tools/frontend/radix.png" },
      { name: "FumaDocs", path: "/tools/frontend/fumadocs.png" },
      { name: "Storybook", path: "/tools/frontend/storybook.png" },
    ],
  },

  sections: {
    FrontendDevelopment: {
      title: "Frontend Development",
      items: [
        {
          icon: <MailIcon />,
          heading: "Package Development",
          details: [
            "**Developed** React-based components for the @govtechmy/myds-react package.",
            "Contributed to creating **reusable** and **scalable** UI components for MYDS.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Comprehensive Documentation",
          details: [
            "**Contributed** to the development of **comprehensive documentation** for the MYDS package.",
            "Detailed Docs on usage instructions for **components** and **hooks**",
            "Icon documentation for **seamless** integration",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "MYDS Icon Explorer",
          details: [
            "**Efficient** icon search functionality",
            "One-click **SVG** copy feature",
            "**Filtering** options to enhance user navigation",
            "**Multilingual** capabilities via i18n support",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Core UI Components",
          details: [
            "**Designed**, **implemented**, and **documented** **essential** UI components : Masthead, Navbar, Footer, Callout, Label, Summary List, Checkbox, Toggle, Theme Toggler & Theme Toggler Hook",
            "Spinner for **consistent** loading behavior",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Storybook Integration",
          details: [
            "Utilized **Storybook** to develop, test, and document UI components in isolation.",
            "Ensured **consistency** and **reusability** across applications.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "UI/UX Consistency",
          details: [
            "Contributed to the **development** and **optimization** of MYDS, ensuring UI/UX consistency across multiple applications for a cohesive user experience.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Collaborative Development",
          details: [
            "Worked **closely** with both **development and design teams** to integrate design and functionality.",
            "Focused on delivering a **user-centered** experience, aligning design vision with technical feasibility.",
          ],
        },
        {
          icon: <MailIcon />,
          heading: "Cross-Functional Collaboration",
          details: [
            "**Collaborated** effectively with stakeholders across departments.",
            "Ensured components adhered to **industry standards** for scalability, maintainability, and consistency, while meeting accessibility and user interface design guidelines.",
          ],
        },
      ],
    },
  },
};

export const ExpenseTrackerPortfolio = {
  projectName: "Expense Tracker",
  projectImage: "/projects/personal/ExpenseTracker.png",
  livehref: "https://expensetracker.harrisviewcodes.uk",
  githubhref: "https://github.com/harrisazmi/ExpenseTracker",
  overview:
    "A customizable, insight-driven personal finance tracking application built with Next JS and modern DevOps tools—designed for users who need more than just basic banking apps. This cross-platform solution empowers users with granular control over their finances, offering intuitive  store-level tracking, dynamic budgeting, and powerful data visualizations to support better financial decisions and accountability.",
  issues:
    "Despite having multiple financial apps like Maybank and others, I kept running into the same issue: I couldn’t manage my money the way I wanted. These tools were either unintuitive, lacked customization, or failed to provide the insights I needed. I couldn’t easily track spending by store, set dynamic budgets, or visualize where my money was going in a way that helped me stay accountable.",
  solutionsHeader:
    "I decided to build my own finance tracking tool tailored to my specific needs. The app lets me:",
  solutionsList: [
    "Track spending by individual stores",
    "Generate targeted pie charts and visual reports",
    "Set and monitor custom budgets",
    "Select and filter the exact data I care about",
  ],
  solutionsConclusion:
    "Instead of relying on rigid templates from other apps, this system gives me full control over how I view and manage my money—ultimately helping me avoid overspending and stay on top of my finances.",
  techstack: {
    fenbe: [
      { name: "TypeScript", path: "/tools/languages/typescript.png" },
      { name: "NextJs", path: "/tools/fullstack/nextjs.png" },
      { name: "React", path: "/tools/frontend/react.png" },
      { name: "Tailwind CSS", path: "/tools/frontend/tailwind.png" },
      { name: "Recharts", path: "/tools/frontend/recharts.png" },
      { name: "Radix UI", path: "/tools/frontend/radix.png" },
      { name: "Date-fns", path: "/tools/frontend/datefns.png" },
      { name: "Nodejs", path: "/tools/backend/nodejs.png" },
      { name: "MongoDB Atlas", path: "/tools/database/mongodb.png" },
      { name: "React Day Picker", path: "/tools/frontend/reactdaypicker.png" },
    ],

    devops: [
      { name: "Cloudlflare", path: "/tools/devops/cloudflare.png" },
      { name: "Vercel", path: "/tools/devops/vercel.png" },
    ],
  },

  sections: {
    featurenhighlights: {
      title: "Key Features and Technical Highlights",
      items: [
        {
          heading: "Real-Time Budget Tracking with Polling",
          details: [
            "**Real-time budget tracking** system that dynamically updates user data through **polling**.",
            "Ensures **live updates** without page refreshes, providing users **immediate clarity** on spending habits and budget status.",
          ],
        },
        {
          heading: "Financial Data Visualization",
          details: [
            "Integrated **Recharts** to deliver **interactive charts** that visualize spending patterns.",
            "Enables users to **identify trends**, control impulse spending, and make **informed financial decisions** in real time.",
          ],
        },
        {
          heading: "Advanced Date Management",
          details: [
            "Utilized **React-Day-Picker** to allow users to select **specific time periods** for expense tracking.",
            "Provides **personalized financial views** across **weekly, monthly**, and **custom ranges**.",
          ],
        },
        {
          heading: "Scalable & Reliable Backend",
          details: [
            "Powered by **MongoDB Atlas** for a **scalable**, cloud-based database solution.",
            "Handles **large datasets** efficiently while maintaining **high performance** and **reliability**.",
          ],
        },
        {
          heading: "Customizable & Responsive UI",
          details: [
            "Built using **TailwindCSS** and **Radix UI** for a **responsive design** across all screen sizes.",
            "Delivers a **sleek**, **accessible**, and **inclusive user interface** on both mobile and desktop.",
          ],
        },
        {
          heading: "Optimized Performance with Next.js",
          details: [
            "Leveraged **Next.js** with **server-side rendering (SSR)** for **fast initial load times**.",
            "Ensures **smooth performance** and **reliability** during **high-traffic periods**.",
          ],
        },
        {
          heading: "Progressive Web App (PWA) Support",
          details: [
            "Implemented **PWA features** for **offline access** and **installability**.",
            "Enhances usability by offering a **native-like experience** even without internet connectivity.",
          ],
        },
      ],
    },
    impactandoutcomes: {
      title: "Impact & Outcomes",
      items: [
        {
          heading: "Transformed Financial Awareness",
          details: [
            "**“Home-Belanja”** provided **clear, visual insights** into my spending habits, helping me **better understand** my finances.",
            "Empowered more **intentional** and **proactive financial decisions** by balancing **income and expenses** effectively.",
          ],
        },
        {
          heading: "Streamlined Money Management",
          details: [
            "Simplified the **budgeting process** with **real-time tracking**, **customized insights**, and **easy-to-read charts**.",
            "Turned budgeting from an **overwhelming task** into a **stress-free, daily habit** that boosts **financial confidence**.",
          ],
        },
        {
          heading: "Increased Engagement and Accountability",
          details: [
            "Encouraged **consistent tracking** with **targeted reports** and **visualizations** that highlight spending patterns.",
            "Enhanced **accountability** by making users more **mindful of their spending**, helping them **stay within budget**.",
          ],
        },
        {
          heading: "Built to Last",
          details: [
            "Developed with **Next.js**, **TailwindCSS**, and **MongoDB** to ensure **scalability**, **performance**, and **long-term adaptability**.",
            "Designed to **grow with evolving financial needs**, supporting **future features** and **budget flexibility**.",
          ],
        },
      ],
    },
  },
};

export const NumazuScraperPortfolio = {
  projectName: "Numazu's Data Scraper",
  projectImage: "/projects/personal/NumazuDataScraper.png",
  livehref: "https://numazuscraper.harrisviewcodes.uk",
  githubhref: "https://github.com/harrisazmi/Project3NumazuScraper",
  overview:
    "A web application designed to provide real-time alerts on life-threatening weather and geological events in Numazu-shi, Japan, by scraping and presenting essential updates from the Japan Meteorological Agency (JMA).",
  issues:
    "Even though Japan’s Meteorological Agency (JMA) provides a wealth of information on disasters like earthquakes, tsunamis, and typhoons, I found it incredibly difficult to actually use that information in urgent situations. The site was packed with too many features and too much content, making it hard to extract just the critical info I needed—fast. In emergencies, every second counts, and navigating through multiple layers of maps and pages just to find out if my friends and family in Numazu-shi were safe wasn’t practical. I needed something simpler, faster, and focused. But no existing tools gave me a quick way to check the essentials—especially when stress levels were high and time was limited.",
  solutionsHeader:
    "I decided to solve this problem by building my own tool tailored specifically to Numazu-shi’s needs. The scraper lets me:",
  solutionsList: [
    "Instantly retrieve the most important disaster alerts from the JMA website",
    "Save the data as easy-to-share .txt files and high-res .png maps",
    "Quickly send critical updates to friends and family in Numazu",
    "Cut through all the noise, giving me only the info I need in urgent situations",
  ],
  solutionsConclusion:
    "Rather than relying on complicated, inefficient platforms, this system puts the power in my hands—ensuring I get the right data fast, without the stress and confusion. It’s all about providing peace of mind when time is of the essence.",
  techstack: {
    fenbe: [
      { name: "HTML", path: "/tools/frontend/html.png" },
      { name: "CSS", path: "/tools/frontend/css.png" },
      { name: "JavaScript", path: "/tools/languages/javascript.png" },
      { name: "Nodejs", path: "/tools/backend/nodejs.png" },
      { name: "Express", path: "/tools/backend/expressjs.png" },
      { name: "Dotenv", path: "/tools/backend/dotenv.png" },
      { name: "Puppeteer", path: "/tools/backend/puppeteer.png" },
    ],

    devops: [
      { name: "Docker", path: "/tools/devops/docker.png" },
      { name: "Dockerhub", path: "/tools/devops/dockerhub.png" },
      { name: "Portainer", path: "/tools/devops/portainer.png" },
      { name: "Linux-Ubuntu", path: "/tools/devops/ubuntu.png" },
      { name: "Render", path: "/tools/devops/render.png" },
      { name: "Cloudflare", path: "/tools/devops/cloudflare.png" },
      { name: "PM2", path: "/tools/devops/pm2.png" },
    ],
  },

  sections: {
    featurenhighlights: {
      title: "Key Features and Technical Highlights",
      items: [
        {
          heading: "Targeted Disaster Data Extraction with Puppeteer",
          details: [
            "Built a **real-time web scraper** using **Puppeteer** to extract **critical alerts** such as earthquakes, tsunamis, and typhoons from the JMA website.",
            "Filters out non-essential content to deliver **fast, focused updates** that reduce user overwhelm during emergencies.",
          ],
        },
        {
          heading: "High-Resolution Map Rendering",
          details: [
            "Automatically captures **detailed map visuals** and stores them as **high-quality .png files**.",
            "Helps users **quickly understand affected areas spatially**, aiding in faster and more informed decision-making.",
          ],
        },
        {
          heading: "Private Alert Distribution Workflow",
          details: [
            "Created a **lightweight distribution flow** that organizes updates into shareable formats.",
            "Enables **immediate private sharing** with friends and family in Numazu-shi, ensuring **relevant information reaches them quickly**.",
          ],
        },
        {
          heading: "Hybrid Deployment Approach in Malaysia for Cost Efficiency",
          details: [
            "**Frontend deployed on Cloudflare Pages** for free, fast static hosting, while **backend runs on Render and a self-hosted Linux server**.",
            "Achieves a balance of **affordability, reliability**, and **performance**, especially during low backend activity.",
          ],
        },
        {
          heading: "Custom DevOps Infrastructure with Docker & PM2",
          details: [
            "Containerized the system with **Docker**, managed using **PM2** for persistent uptime.",
            "Used **Proxmox, Cloudflare Tunnels**, and **Portainer.io** to maintain secure and efficient remote deployments.",
          ],
        },
      ],
    },
    impactandoutcomes: {
      title: "Impact & Outcomes",
      items: [
        {
          heading: "Reduced Response Time During Emergencies",
          details: [
            "**Eliminated the need to navigate dense websites manually**, providing access to life-saving information within **seconds**.",
            "Accelerated awareness and action during natural disasters, when **every moment counts**.",
          ],
        },
        {
          heading: "Improved Safety & Awareness for the Numazu Community",
          details: [
            "Delivered **localized, simplified alerts** to friends and family, boosting their **preparedness and peace of mind**.",
            "Made disaster information more **accessible**, especially during **high-pressure situations**.",
          ],
        },
        {
          heading: "Practical Cost Management with Scalable Hosting",
          details: [
            "Avoided unnecessary cloud spend with a **hybrid deployment strategy** tailored for **real-world usage and uptime needs**.",
            "Reflected strong **full-stack and DevOps decision-making**, prioritizing **scalability and sustainability**.",
          ],
        },
        {
          heading: "Real-World Use, Real Peace of Mind",
          details: [
            "This tool wasn’t just theoretical—it’s **actively used** to **safeguard lives and improve readiness**.",
            "**Demonstrates initiative and purpose-driven engineering**, solving problems that truly matter.",
          ],
        },
      ],
    },
  },
};

export const ToDoListPortfolio = {
  projectName: "To Do List",
  projectImage: "/projects/personal/ToDoList.png",
  livehref: "https://project1frontendcf.harrisviewcodes.uk/",
  githubhreffe: "https://github.com/harrisazmi/Project1ToDoListFE",
  githubhrefbe: "https://github.com/harrisazmi/Project1ToDoListBE",
  overview:
    "A lightweight, scalable task management web application built using the MERN stack, focused on simplicity, cross-platform accessibility, and real-time performance.",
  issues:
    "Most to-do apps I tried felt bloated—crammed with features I didn’t need and heavy UI that slowed everything down. Even simple actions like creating a task or viewing what was due next took too many clicks. And in moments when I just wanted to capture a quick thought or reminder, the interface got in the way instead of helping. On top of that, I couldn’t find a solution that respected how I actually work across devices. I use both desktop and mobile daily, and switching between them without breaking flow was a mess. Some apps lacked responsive design, others needed constant installs or updates, and none gave me control over how or where my data lived. I didn’t want just another app—I wanted something lightweight, fast, and personal.",
  solutionsHeader:
    " I built my own solution from the ground up, focused entirely on speed, clarity, and control. Here’s what I did:",
  solutionsList: [
    "Designed a minimalist UI that eliminates clutter and makes task management frictionless",
    "Used a real-time polling method so the task list is always up-to-date without needing to reload",
    "Made the tool fully web-based so it works instantly across devices—no installs, no hassle",
    "CIntegrated it with my own iOS launcher shortcut to reduce taps and get to my task list faster",
    "Deployed it on my own server infrastructure, giving me total control over uptime, data, and scaling",
    "Used Docker, PM2, and Cloudflare Tunnel to simplify deployments and make it easy to spin up or pause as needed",
  ],
  solutionsConclusion:
    "The end result? A tool that works the way I do—fast, simple, reliable. Whether I’m managing my day or just jotting down a quick note, it’s always there, ready to go.",
  techstack: {
    fenbe: [
      { name: "React", path: "/tools/frontend/react.png" },
      { name: "Vite", path: "/tools/frontend/vite.png" },
      { name: "TailwindCSS", path: "/tools/frontend/tailwind.png" },
      { name: "Axios", path: "/tools/backend/axios.png" },
      { name: "Express", path: "/tools/backend/expressjs.png" },
      { name: "mongoose", path: "/tools/backend/mongoose.png" },
      { name: "Nodejs", path: "/tools/backend/nodejs.png" },
      { name: "dotenv", path: "/tools/backend/dotenv.png" },
      { name: "nodemon", path: "/tools/backend/nodemon.png" },
    ],

    devops: [
      { name: "Docker", path: "/tools/devops/docker.png" },
      { name: "Dockerhub", path: "/tools/devops/dockerhub.png" },
      { name: "Portainer", path: "/tools/devops/portainer.png" },
      { name: "Linux-Ubuntu", path: "/tools/devops/ubuntu.png" },
      { name: "Render", path: "/tools/devops/render.png" },
      { name: "Cloudflare", path: "/tools/devops/cloudflare.png" },
      { name: "PM2", path: "/tools/devops/pm2.png" },
    ],
  },

  sections: {
    featurenhighlights: {
      title: "Key Features and Technical Highlights",
      items: [
        {
          heading: "Real-Time Task Sync with Polling",
          details: [
            "Implemented a **real-time task update mechanism** using lightweight **polling**, keeping the task list instantly synced without page refreshes.",
            "Ensures users stay **in flow and focused**, with task changes (create, edit, complete) reflected immediately in the UI.",
          ],
        },
        {
          heading: "Cross-Platform Accessibility",
          details: [
            "Built as a **web-first experience** that works seamlessly across both **desktop and mobile** environments.",
            "Integrated with a companion **iOS app** that redirects users directly to the web app—reducing friction and making task access near-instant.",
          ],
        },
        {
          heading: "Custom Self-Hosted Infrastructure",
          details: [
            "Deployed on a **Proxmox-based server**, giving full control over uptime, scaling, and infrastructure decisions.",
            "Managed services with **Portainer**, **Docker**, and **PM2**, creating a production-grade, developer-friendly stack.",
          ],
        },
        {
          heading: "DevOps Integration for Rapid Iteration",
          details: [
            "Leveraged **DockerHub**, **PM2**, and **Cloudflare Tunnel** for seamless updates and secure remote access.",
            "Enabled rapid development and deployment cycles with minimal downtime—supporting fast feature delivery.",
          ],
        },
        {
          heading: "Minimalist & Intuitive UI",
          details: [
            "Designed a **clean, responsive interface** using **React**, **Vite**, and **TailwindCSS**, focusing on usability over clutter.",
            "Prioritized **simplicity and accessibility**, solving the common problem of feature bloat in task management apps.",
          ],
        },
        {
          heading: "Modular Backend API",
          details: [
            "Built with **Express** and **MongoDB (Mongoose)** to maintain a **lightweight and extensible** backend.",
            "Used **Axios** for efficient client-server communication, and structured APIs for easy future enhancements.",
          ],
        },
      ],
    },
    impactandoutcomes: {
      title: "Impact & Outcomes",
      items: [
        {
          heading: "Made Task Management Simple Again",
          details: [
            "Frustrated with bloated task apps, I built a solution with a **streamlined layout** and **instant updates** that brought back the joy of productivity.",
            "Helps me get things done faster and with **less stress**, focusing only on what matters.",
          ],
        },
        {
          heading: "Empowered My Own Workflow",
          details: [
            "This app became my **daily driver**—I use it regularly to stay organized and focused.",
            "Thanks to **real-time syncing**, there’s no second-guessing if a task saved or updated. It works the way I do.",
          ],
        },
        {
          heading: "Reduced Friction with Device Flexibility",
          details: [
            "Built with a **mobile-first mindset** and a clever **iOS redirection**, making access seamless across devices.",
            "Just a couple of taps, and I’m managing tasks—whether I’m on the move or at my desk.",
          ],
        },
        {
          heading: "Grew My DevOps Skillset",
          details: [
            "Hosted on custom infrastructure using **Docker**, **PM2**, and **Cloudflare Tunnel**—all running on my own servers.",
            "Deepened my hands-on experience in **full-cycle deployment** and **self-hosted operations**.",
          ],
        },
        {
          heading: "Future-Proof & Scalable",
          details: [
            "Designed for flexibility—can be deployed via **Render for demos** or run locally on my **home server**.",
            "With a **modular, scalable architecture**, I can easily add features or scale usage without reworking the core.",
          ],
        },
      ],
    },
  },
};

export const OnlinePortfolio = {
  projectName: "Online Portfolio",
  projectImage: "/projects/personal/OnlinePortfolio.png",
  livehref: "https://portfoliocf.harrisviewcodes.uk/",
  githubhref: "https://github.com/harrisazmi/OnlinePortfolioV2",
  livelhref: "https://legacy1portfoliocf.harrisviewcodes.uk/",
  githublhref: "https://github.com/harrisazmi/OnlinePortfolio",
  overview:
    "A modern, cloud-deployed personal portfolio designed to showcase professional skills, technical projects, and career achievements. Built with a focus on performance, accessibility, and continuous delivery, the portfolio reflects a commitment to clean UI/UX, scalable architecture, and real-world DevOps practices.",
  issues:
    "While digital resumes and static PDFs serve their purpose, they often fall short when it comes to showcasing technical breadth, real-time updates, and interactivity. I found that my traditional resume lacked the flexibility to evolve with my skills—and more importantly, it didn’t fully reflect how I work or what I’ve built. In a landscape where first impressions are often made online, relying on a document that couldn’t dynamically communicate my work or adapt to various formats (e.g., mobile, print, web) felt limiting. There was also no centralized place for recruiters or collaborators to explore my professional journey in detail.",
  solutionsHeader:
    "To solve this, I built a personal portfolio website designed to be fast, flexible, and future-proof. It allows me to:",
  solutionsList: [
    "Present my technical skills, experience, and projects in an engaging and interactive format",
    "Enable quick access to a print-friendly resume for traditional use cases",
    "Seamlessly integrate CI/CD workflows for continuous improvement and instant deployment",
    "Host the site on Cloudflare Pages, ensuring low latency and global accessibility",
  ],
  solutionsConclusion:
    "Instead of a static document, this portfolio gives me full control over how I’m represented online—providing a streamlined, always-updated platform for sharing who I am and what I can do.",
  techstack: {
    fenbe: [
      { name: "TypeScript", path: "/tools/languages/typescript.png" },
      { name: "NextJs", path: "/tools/fullstack/nextjs.png" },
      { name: "React", path: "/tools/frontend/react.png" },
      { name: "Tailwind CSS", path: "/tools/frontend/tailwind.png" },
      { name: "Myds-UI", path: "/tools/frontend/recharts.png" },
      { name: "Radix UI", path: "/tools/frontend/radix.png" },
      { name: "ShadCn UI", path: "/tools/others/shadcn.png" },
      { name: "Nodejs", path: "/tools/backend/nodejs.png" },
    ],

    devops: [
      { name: "Cloudlflare", path: "/tools/devops/cloudflare.png" },
      { name: "Vercel", path: "/tools/devops/vercel.png" },
    ],
  },

  sections: {
    featurenhighlights: {
      title: "Key Features and Technical Highlights",
      items: [
        {
          heading: "Interactive, Component-Driven Layout",
          details: [
            "**Modular architecture** built with **React** and **Next.js**, enabling a flexible and reusable structure.",
            "Each UI section—from project cards to navigation—is a **dedicated component**, simplifying maintenance and future scaling.",
          ],
        },
        {
          heading: "Fully Responsive Design",
          details: [
            "Layout **automatically adapts** to all screen sizes, from desktops to mobile devices.",
            "Delivers a **seamless and optimized viewing experience** without compromising usability or design.",
          ],
        },
        {
          heading: "Accessibility-Focused UI",
          details: [
            "**Inclusive design** with keyboard navigation, semantic HTML, and accessible color contrast.",
            "Prioritizes **usability for all users**, ensuring interactions are smooth and compliant with accessibility standards.",
          ],
        },
        {
          heading: "CI/CD Integration via Cloudflare Pages",
          details: [
            "**Automatic builds and deployments** triggered on GitHub commits using Cloudflare Pages.",
            "Enables **rapid iteration** and **instant live updates** with minimal overhead through a robust CI/CD pipeline.",
          ],
        },
      ],
    },
    impactandoutcomes: {
      title: "Impact & Outcomes",
      items: [
        {
          heading: "Improved Accessibility and Engagement",
          details: [
            "Shifted from **static documents** to a **dynamic, interactive web platform** for showcasing work.",
            "Provides a **more engaging and accessible experience**, encouraging exploration and connection.",
          ],
        },
        {
          heading: "Simplified Sharing and Outreach",
          details: [
            "**Single-link portfolio** streamlines communication with recruiters, stakeholders, and collaborators.",
            "Enables easy access to **projects, credentials, and professional background** in one centralized place.",
          ],
        },
        {
          heading: "Demonstrated Technical Proficiency",
          details: [
            "Portfolio showcases expertise in **CI/CD workflows**, **component-driven development**, and **performance optimization**.",
            "Highlights real-world application of **modern web development** and **edge-hosted deployments**.",
          ],
        },
        {
          heading: "Created a Scalable Professional Platform",
          details: [
            "More than just a snapshot—this portfolio is a **foundation for long-term personal branding**.",
            "**Designed to evolve** with my career and technical growth, ensuring lasting relevance.",
          ],
        },
      ],
    },
  },
};

export const TerraformAWSPortfolio = {
  projectName: "Terraform AWS",
  projectImage: "/projects/personal/TerraformAWS.png",
  githubhref: "https://github.com/harrisazmi/terraform_aws",
  overview:
    "To eliminate repetitive manual setup and enforce consistency across cloud environments, I built a Terraform-based infrastructure to provision a lightweight EC2 instance on AWS. The goal was to create a simple, scalable, and fully codified workflow that supports quick environment spin-ups for development, testing, or experimentation — all with secure access and minimal configuration overhead.",
  issues:
    "Spinning up cloud infrastructure manually via the AWS Console was slow, error-prone, and inconsistent. Small misconfigurations — like incorrect security group rules or missing key pairs — often led to wasted time during setup. There was also no reliable way to track infrastructure changes, making it difficult to audit or replicate environments. Over time, these issues compounded and made it clear that a declarative, automated approach was needed.",
  solutionsHeader:
    "I solved this by using Terraform to define and provision the entire stack as code:",
  solutionsList: [
    "A lightweight EC2 instance using the latest Ubuntu AMI",
    "A secure security group allowing only SSH access from trusted sources",
    "Version-controlled .tf files for full visibility and reproducibility",
  ],
  solutionsConclusion:
    "This shift to Infrastructure as Code (IaC) eliminated guesswork, reduced provisioning time to under a minute, and gave me full control over infrastructure changes — all through a single command-line workflow.",
  techstack: {
    devops: [
      { name: "Terraform", path: "/tools/devops/terraform.png" },
      { name: "AWS EC2", path: "/tools/devops/awsec2.png" },
      { name: "Git", path: "/tools/others/git.png" },
      { name: "GitHub", path: "/tools/others/github.png" },
    ],
  },

  sections: {
    featurenhighlights: {
      title: "Key Features and Technical Highlights",
      items: [
        {
          heading: "End-to-End EC2 Provisioning with Terraform",
          details: [
            "**Provisioned a complete EC2 environment** using Terraform—covering networking, security, and compute resources.",
            "**Infrastructure-as-Code (IaC)** approach enables fully automated deployment via version-controlled configurations.",
          ],
        },
        {
          heading: "Secure by Design",
          details: [
            "**Security groups** configured to allow **SSH access (port 22)** only from trusted IPs.",
            "Reduces attack surface by **limiting exposure to unauthorized access**.",
          ],
        },
        {
          heading: "Codified Infrastructure for Repeatability",
          details: [
            "**.tf files define reusable infrastructure** for consistent deployments across AWS accounts or regions.",
            "Supports **full change tracking, versioning, and rollback** for reliable infrastructure management.",
          ],
        },
        {
          heading: "Minimal Resource Footprint",
          details: [
            "Uses **only essential AWS components** for a lightweight, fast deployment.",
            "Ideal for **development, testing, or minimal production environments** without unnecessary overhead.",
          ],
        },
      ],
    },
    impactandoutcomes: {
      title: "Impact & Outcomes",
      items: [
        {
          heading: "Reduced Provisioning Time from Hours to Minutes",
          details: [
            "**Deploys a secure EC2 environment** in under 60 seconds using Terraform.",
            "**Accelerates development cycles** by eliminating manual setup and freeing time for actual work.",
          ],
        },
        {
          heading: "Improved Infrastructure Visibility & Control",
          details: [
            "All infrastructure changes are **version-controlled via Git**, enabling better collaboration and oversight.",
            "**Track, review, and iterate** on decisions with full historical context.",
          ],
        },
        {
          heading: "Scalable Foundation for Future Cloud Projects",
          details: [
            "**Lays the groundwork for advanced infrastructure**—including autoscaling, app hosting, or containerization.",
            "**Terraform-based setup** ensures scalability and modular growth across future projects.",
          ],
        },
      ],
    },
  },
};

export const HomeServerPortfolio = {
  projectName: "Smart Home Server",
  projectImage: "/projects/personal/SmartHomeServer.png",
  overview:
    "Built a server from scratch and deployed a customized home server infrastructure to meet diverse household needs such as website hosting, data backup and Iot integration.",
  issues:
    "Managing my digital life across multiple platforms started to feel messy and inefficient. I had important data spread across different cloud providers, personal productivity apps limited by subscription plans, and no centralized way to host the tools I actually used every day. Even worse, in critical moments—like power outages or natural disasters—I had no reliable way to access essential services or files. Most cloud platforms assumed constant internet access, but that’s not always guaranteed, especially in unpredictable situations. I needed something local, flexible, and fully under my control.  On top of that, I wanted to start integrating IoT devices into my home—things like smart lights, sensors, and automations—but without a reliable, secure infrastructure in place, it felt risky and unscalable. I couldn’t depend on scattered third-party platforms to handle sensitive data or maintain consistent performance.",
  solutionsHeader:
    "So I built my own home server—completely from scratch. It’s tailored specifically for the way I work and live, giving me a centralized, always-on platform to run everything I need, exactly how I want it.",
  solutionsList: [
    "Host custom productivity tools without monthly fees or feature limitations",
    "Keep backups of all critical data using RAID 10 and version control systems like Git",
    "Deploy and manage apps in containers using Docker, LXC, and Portainer",
    "Use NGINX and Cloudflare services to access everything remotely, securely, and fast",
    "Maintain full ownership and control over my infrastructure—no third parties, no black boxes",
  ],
  solutionsConclusion:
    "Now, whether I need to access my notes, deploy a new app, or check in on important files during an emergency, it’s all just a few clicks away. No clutter, no delays—just a streamlined system built around reliability, privacy, and peace of mind.",
  techstack: {
    devops: [
      { name: "Proxmox VE", path: "/tools/devops/proxmox.png" },
      { name: "Docker", path: "/tools/devops/docker.png" },
      { name: "LXC", path: "/tools/devops/lxc.png" },
      { name: "Portainer.io", path: "/tools/devops/portainer.png" },
      { name: "NGINX", path: "/tools/devops/nginx.png" },
      {
        name: "Cloudflare LB",
        path: "/tools/devops/cloudflare.png",
      },
      {
        name: "Cloudflare Tunnel",
        path: "/tools/devops/cloudflare.png",
      },
      { name: "Git", path: "/tools/others/git.png" },
      { name: "Docker Hub", path: "/tools/devops/dockerhub.png" },
      { name: "Ubuntu LTS 22.04", path: "/tools/devops/ubuntu.png" },
    ],
  },

  sections: {
    featurenhighlights: {
      title: "Key Features and Technical Highlights",
      items: [
        {
          heading: "Virtualized Home Infrastructure, Built from the Ground Up",
          details: [
            "Deployed a **fully virtualized home server** using a Type 1 hypervisor like **Proxmox** or **ESXi**.",
            "**Isolated, modular VM setup** hosts Linux and Windows environments efficiently, maximizing hardware use and future scalability.",
          ],
        },
        {
          heading: "Seamless App Deployment with Containerization",
          details: [
            "Used **Docker** and **LXC containers** to streamline app deployment and management.",
            "**Portainer.io dashboard** offers centralized control for spinning up and monitoring services like web scrapers and personal tools.",
          ],
        },
        {
          heading: "Simplified Access Management with Cloudflare Tunnel",
          details: [
            "Transitioned from NGINX and round-robin load balancing to a **Cloudflare Tunnel** setup.",
            "Reduced complexity and **eliminated reverse proxy and static IP dependency** while maintaining secure, remote access to self-hosted apps.",
          ],
        },
        {
          heading: "Reliable, Redundant Backup Solutions",
          details: [
            "Implemented **RAID 10** for physical disk redundancy and **Git-based recovery** for critical files.",
            "**Docker Hub** serves as a trusted backup and restore registry for containerized apps.",
          ],
        },
        {
          heading: "Ready for the Unexpected",
          details: [
            "Designed infrastructure to remain operational during emergencies, like **power outages or natural disasters**.",
            "**NumazuScraper** and other vital tools remain accessible remotely, offering peace of mind in high-risk regions like Japan.",
          ],
        },
      ],
    },
    impactandoutcomes: {
      title: "Impact & Outcomes",
      items: [
        {
          heading: "Emergency-Ready Peace of Mind",
          details: [
            "Previously lacked a reliable way to access tools during outages—now I can **reach critical services remotely**, anytime, anywhere.",
            "**Infrastructure acts as a quiet but powerful emergency ally**, ensuring continuity when it matters most.",
          ],
        },
        {
          heading: "Personalized Tools, My Way",
          details: [
            "**Self-hosted custom apps**, like a personalized productivity dashboard, tailored exactly to my workflow.",
            "Freed from external platforms, I built tools with **zero compromise** on features, layout, or logic.",
          ],
        },
        {
          heading: "Efficiency That Grows With Me",
          details: [
            "What began as a basic server now serves as the **foundation for home automation and IoT integration**.",
            "Ready to scale with future plans—from **smart sensors** to a **fully connected home ecosystem**.",
          ],
        },
        {
          heading: "Control Without Complexity",
          details: [
            "**Powerful stack, simplified**—clean UIs, automated updates, and reliable backups keep operations smooth.",
            "The system runs **quietly, securely, and resiliently**, offering peace of mind without hands-on effort.",
          ],
        },
      ],
    },
  },
};
