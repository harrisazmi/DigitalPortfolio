import { AskMyGovIcon, JataNegaraIcon, MydsIcon } from "@/Icons";

export const ExpInfo = [
  {
    name: "GovTech Nucleus Unit (GNU)",
    details:
      "Full-Stack Engineer at GNU, responsible for developing, deploying, and maintaining scalable web and mobile applications for the public sector. Focused on creating industry-standard solutions to improve accessibility, efficiency, and user engagement in public services. Collaborated with cross-functional teams to drive innovation and ensure the delivery of high-quality software solutions.",
    year: "May 2024 - Present",
    position: "Full-Stack Engineer",
    href: "/experiences/govtech",
    path: "/experiences/jatanegara.png",
    projects: [
      {
        name: "AskMyGov",
        icon: <AskMyGovIcon />,
        href: "/projects/askmygov",
      },
      {
        name: "Directory",
        icon: <JataNegaraIcon />,
        href: "/projects/directory",
      },
      {
        name: "MYDS",
        icon: <MydsIcon />,
        href: "/projects/myds",
      },
    ],
  },
  {
    name: "Bateriku (M) Sdn Bhd",
    details:
      "As a Software Engineer/Developer at Bateriku (M) Sdn Bhd, I was responsible for maintaining backend systems using Ruby on Rails, ensuring high performance and reliability. My active participation in the full development lifecycle, from planning to deployment, helped streamline workflows and accelerate delivery timelines.",
    year: "April 2024 - May 2024",
    position: "Software Engineer",
    href: "/experiences/bateriku",
    path: "/experiences/bateriku.png",
  },
  {
    name: "Chemiz (M) Sdn Bhd",
    details:
      "Production Manager at Chemiz (M) Sdn Bhd, leading the development and implementation of ISO 9001, ISO 19001, and ISO 13485 standards to ensure compliance with international quality management practices. Spearheaded the integration of cloud-based storage solutions, improving data management and reducing reliance on physical documentation. Directed production teams in maintaining the highest quality assurance standards, while driving cost-effective operational improvements and leading new product development initiatives in Lab (Formulations) operations.",
    year: "September 2020 - April 2024",
    position: "Production Manager",
    href: "/experiences/chemiz",
    path: "/experiences/chemiz.png",
  },
];

export const ExpGovTech = {
  name: "GovTech Nucleus Unit",
  year: "May 2024 - Present",
  overview:
    "As part of Malaysia’s flagship digital transformation initiative under the MyDIGITAL blueprint, I contribute to a high-impact team within the GovTech Nucleus Unit—an elite, in-house tech force driving end-to-end modernization of public services. Our mission is to build scalable, cloud-native web and mobile applications that tackle real public sector challenges and deliver seamless, citizen-first digital experiences. By leveraging AI, big data, and modern infrastructure, we’re transforming government services to be faster, clearer, and easier to access for all Malaysians.",
  myRole:
    "As a Full Stack Engineer, my role involves end-to-end development of applications, from designing system architecture to deploying production-ready code. Responsibilities span across frontend interfaces using frameworks like Next.js and backend services powered by technologies such as Node.js. The role requires close collaboration with UI/UX designers, product owners, and fellow engineers to build thoughtful, performant solutions. Additionally, it includes managing deployments across both cloud and on-premises environments.",
  keyAchievementsAndContributions: [
    {
      heading: "Platform Development",
      details: [
        "Led and Contributed on developing a centralized platform, **AskMyGov**, mainly on frontend that consolidates FAQs from multiple government agencies, enhancing citizen-government communication and accessibility.",
      ],
    },
    {
      heading: "Directory Structure",
      details: [
        "Contributed on  structured **directory** for seamless information retrieval and navigation with proper CI/CD pipelines.",
      ],
    },
    {
      heading: "Design System Contribution",
      details: [
        "Contributed to the development of **MYDS**, a design system ensuring UI/UX consistency across government-related applications.",
      ],
    },
    {
      heading: "Frontend Development",
      details: [
        "Deeper proficiency in **Next.js**, **React**, **TypeScript**, and **Tailwind CSS** for building scalable and performant web applications.",
        "Led frontend development initiatives, coordinating with cross-functional teams to drive project success.",
      ],
    },
    {
      heading: "Search & Data Management",
      details: [
        "Experienced in **Elasticsearch** for efficient search implementation.",
        "Utilized **AWS SDK (S3, SES)** for cloud-based storage and email services.",
      ],
    },
    {
      heading: "DevOps & CI/CD",
      details: [
        "Acquired extensive experience in **cloud deployment** and **infrastructure management** using **AWS**, **Docker**, and **Kubernetes**.",
        "Focused on establishing and refining **continuous integration** and **delivery (CI/CD)** pipelines.",
      ],
    },
    {
      heading: "Software Development Best Practices",
      details: [
        "Specialized in **modular architecture**, **multilingual support**, **accessibility compliance**, and **performance optimization** for enterprise applications.",
      ],
    },
    {
      heading: "Project Management",
      details: [
        "Developed a strong ability to collaborate effectively within cross-functional teams.",
        "Utilized **Agile methodologies** and tools such as **Linear** and **GitHub Kanban** for efficient project management and delivery.",
      ],
    },
  ],
  impact:
    "My work at the Nucleus Unit has contributed directly to improving public access to government services, reducing friction for citizens and enabling greater transparency. I’ve played a key role in developing digital platforms that are now serving thousands of users, while also helping to set best practices for scalable, secure engineering in the public sector.",
};

export const ExpBateriku = {
  name: "Bateriku (M) Sdn Bhd",
  year: "April 2024 - May 2024",
  overview:
    "As part of Bateriku (M) Sdn Bhd, a national growing leader in on-demand automotive services, I contribute to a dynamic team dedicated to developing scalable, high-performance backend systems. Using Ruby on Rails, we design and maintain robust solutions that power services such as on-demand battery replacement and roadside assistance. By working closely with a small, agile team, we ensure the delivery of high-quality software solutions that align with Bateriku's strategic goals. My role spans the entire development lifecycle, from development to deployment, with a focus on upholding best practices and ensuring smooth, real-time communication through tools like Slack. Through our efforts, we are empowering Malaysians with innovative, accessible, and reliable automotive services at their fingertips",
  myRole:
    "As a Software Engineer/Developer at Bateriku (M) Sdn Bhd, my responsibilities include on developing and maintaining backend applications using Ruby on Rails, with a strong focus on stability and performance. Operating within an agile development environment, contributions were made toward product increments while consistently meeting delivery timelines. Daily standups on Slack facilitated clear communication of progress and identification of blockers. Code reviews were conducted through Slack discussions to maintain high standards and ensure adherence to best practices. Close collaboration with cross-functional teams supported the design and implementation of new features, as well as enhancements to existing functionality. Active involvement spanned the full development lifecycle—from planning and design to testing and deployment—ensuring efficiency and quality throughout.",
  keyAchievementsAndContributions: [
    {
      heading: "Rspec",
      details: [
        "Gained proficiency in writing tests for endpoints, ensuring the reliability and robustness of the API endpoints.",
      ],
    },
    {
      heading: "Endpoint Development",
      details: [
        "Developed several production-ready endpoints using available code, ensuring adherence to DRY principles (Don’t Repeat Yourself).",
      ],
    },
    {
      heading: "MVC (Model-View-Controller)",
      details: [
        "Acquired a solid understanding of the MVC architecture and how to structure applications effectively in Ruby on Rails.",
      ],
    },
    {
      heading: "RESTful Routes",
      details: [
        "Designed and implemented RESTful routes using routes.rb, enabling efficient and scalable application routing.",
      ],
    },
    {
      heading: "API Development",
      details: [
        "Built clean, versioned APIs with JSON responses to maintain clarity and consistency in data exchanges.",
      ],
    },
    {
      heading: "Clean, Idiomatic Ruby Code",
      details: [
        "Committed to writing clean, readable, and idiomatic Ruby code that aligns with best practices.",
      ],
    },
    {
      heading: "Metaprogramming & Object-Oriented Design",
      details: [
        "Leveraged metaprogramming techniques and object-oriented design principles to create reusable, flexible code.",
      ],
    },
    {
      heading: "Rails Generators",
      details: [
        "Utilized Rails generators for scaffolding models, controllers, and views, significantly boosting development speed and consistency.",
      ],
    },
    {
      heading: "Test-Driven Development (TDD)",
      details: [
        "Practiced TDD to ensure that the codebase is reliable, well-tested, and maintainable.",
      ],
    },
    {
      heading: "Convention over Configuration",
      details: [
        "Adopted 'Convention over Configuration' to streamline the development process and increase productivity.",
      ],
    },
    {
      heading: "DRY Principles",
      details: [
        "Focused on writing DRY code by identifying reusable patterns and eliminating redundancy.",
      ],
    },
  ],

  impact:
    "At Bateriku, contributions were made to enhance backend system scalability and streamline the development process. A scalable backend endpoint was developed, aligning with company standards and reducing future complexity for developers. Detailed Swagger documentation was created, providing clear and standardized API specifications that facilitate smooth cross-team collaboration. Additionally, local development onboarding documentation was improved, reducing setup time and enabling new developers to quickly integrate into the project, fostering a more efficient and collaborative environment.",
};

export const ExpChemiz = {
  name: "Chemiz (M) Sdn Bhd",
  year: "Sept 2020 - April 2024",
  overview:
    "At Chemiz (M) Sdn. Bhd, we are at the forefront of providing top-tier laboratory chemicals and reagents, supporting industries like pharmaceuticals, research, food, electronics, and personal care. Since our inception in 2004, we’ve built a reputation for excellence by offering a diverse range of products, including Analytical Reagent (AR) Grade, Chemically Pure (CP) Grade, and High-Performance Liquid Chromatography (HPLC) Grade chemicals. As the Production Manager, I lead efforts to uphold the highest international quality standards through our ISO 9001:2015 certification. We are dedicated to delivering premium products with competitive pricing, rapid delivery, and rigorous quality control—ensuring that our customers receive nothing short of the best.",
  myRole:
    "As a Production Manager at Chemiz (M) Sdn Bhd, I was responsible for leading initiatives to optimize production processes, ensuring alignment with international quality standards, and driving innovation across various functional areas. I spearheaded the development and implementation of ISO 9001, ISO 19001, and ISO 13485 standards, ensuring the highest levels of quality and regulatory compliance. My role involved fostering a culture of excellence by training production teams in quality assurance/quality control measures, improving product quality and customer satisfaction. In addition to managing Lab (Formulations) operations, I led product development initiatives, including formulation testing and documentation. I collaborated closely with cross-functional teams to design and implement innovative design systems and operational processes that integrated new products seamlessly and optimized existing operations for cost-effectiveness. Daily operations management encompassed overseeing personnel across production, delivery, and storage units, ensuring a cohesive and high-performing team environment. I orchestrated customer delivery schedules and supervised the delivery unit to ensure timely and efficient order fulfillment. Furthermore, I led recruitment efforts to strategically onboard new talent and supported equipment procurement through the tender process to secure high-quality assets at competitive prices. Through these efforts, I drove significant improvements in operational efficiency, product excellence, and safety protocols, contributing to the organization's overall success.",
  keyAchievementsAndContributions: [
    {
      heading: "ISO Standards Implementation",
      details: [
        "Spearheaded the development and implementation of ISO 9001, ISO 19001, and ISO 13485 standards.",
        "Ensured alignment with international quality management practices and regulatory compliance.",
      ],
    },
    {
      heading: "Cloud-Based Solutions",
      details: [
        "Implemented cloud-based storage solutions, reducing reliance on physical paperwork.",
        "Improved data management efficiency across departments.",
      ],
    },
    {
      heading: "Quality Assurance & Control",
      details: [
        "Led comprehensive training on quality control measures.",
        "Fostered a culture of excellence and drove improvements in product quality and customer satisfaction.",
      ],
    },
    {
      heading: "Operational Process Optimization",
      details: [
        "Developed and implemented innovative design systems and operational processes.",
        "Streamlined product integration and enhanced cost-effectiveness.",
      ],
    },
    {
      heading: "Team Leadership & Development",
      details: [
        "Managed personnel across production, delivery, and storage units.",
        "Led recruitment efforts and aligned team capabilities with organizational goals.",
      ],
    },
    {
      heading: "Product Development & Testing",
      details: [
        "Oversaw product development initiatives, including formulation testing and documentation.",
        "Ensured high-quality products aligned with regulatory requirements.",
      ],
    },
    {
      heading: "Cross-Functional Collaboration",
      details: [
        "Worked closely with cross-functional teams to design, implement, and enhance new product features.",
        "Drove continuous improvements in production processes.",
      ],
    },
    {
      heading: "Inventory & Resource Management",
      details: [
        "Managed daily operations in the production and store areas.",
        "Optimized resource utilization and maintained efficient inventory systems.",
      ],
    },
    {
      heading: "Safety & Compliance",
      details: [
        "Provided guidance on chemical safety protocols.",
        "Promoted a culture of safety and ensured compliance with regulatory requirements.",
      ],
    },
    {
      heading: "Lab Work & Formulations",
      details: [
        "Led formulation and development in the laboratory, ensuring product quality and consistency.",
        "Trained the team on lab safety protocols and best practices for chemical handling.",
        "Maintained thorough documentation of formulation processes and results.",
        "Actively participated in the analysis and refinement of formulations to meet both quality standards and customer expectations.",
      ],
    },
    {
      heading: "SDS (Safety Data Sheet) Training",
      details: [
        "Delivered training on Safety Data Sheets (SDS) to ensure the team was fully informed on the safe handling, storage, and disposal of chemicals.",
        "Fostered a safe and compliant working environment.",
      ],
    },
  ],
  impact: [
    {
      heading: "ISO Standards Implementation",
      details: [
        "Initiated and led the development and implementation of international quality standards ISO 9001, ISO 19001, and ISO 13485.",
        "Established a robust framework for regulatory compliance and significantly enhanced overall product quality and operational standards.",
      ],
    },
    {
      heading: "Quality Control Training Program",
      details: [
        "Developed and launched a comprehensive quality control training program.",
        "Enhanced product quality and customer satisfaction while fostering a culture of excellence across production teams.",
      ],
    },
    {
      heading: "Operational Process Optimization",
      details: [
        "Optimized product integration and existing operations for cost-effectiveness.",
        "Developed and implemented innovative design systems and operational processes.",
      ],
    },
    {
      heading: "Team Leadership & Development",
      details: [
        "Created a high-performing team by effectively managing personnel across production, delivery, and storage units.",
        "Aligned team capabilities with organizational goals.",
      ],
    },
    {
      heading: "Cross-Functional Collaboration",
      details: [
        "Drove continuous improvements in product features and production processes through cross-functional collaboration.",
        "Enhanced efficiency and scalability.",
      ],
    },
    {
      heading: "Resource Utilization & Workflow Optimization",
      details: [
        "Ensured efficient resource utilization and smooth workflow in production and store areas.",
        "Led to reduced downtime and improved operational effectiveness.",
      ],
    },
    {
      heading: "Safety & Compliance Culture",
      details: [
        "Started a culture of safety and compliance by providing guidance on chemical safety protocols.",
        "Ensured adherence to regulatory requirements.",
      ],
    },
    {
      heading: "Lab Safety & Product Consistency",
      details: [
        "Created high standards of lab safety and product consistency by leading formulation testing, analysis, and refinement.",
        "Ensured products met customer expectations.",
      ],
    },
    {
      heading: "SDS (Safety Data Sheet) Training",
      details: [
        "Fostered a safe and compliant working environment by delivering comprehensive SDS training.",
        "Ensured proper handling, storage, and disposal of chemicals.",
      ],
    },
  ],
};
