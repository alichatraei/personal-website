type TExperiences = Array<{
  name: string;
  label: string;
  jobTitle: string;
  jobDuration: string;
  companyLink: string;
  companyName: string;
  description: string;
}>;

const experiencesMock: TExperiences = [
  {
    name: "tab1_fanap",
    label: "Fanap Co",
    jobTitle: "Frontend Developer",
    jobDuration: "Oct 2021 - Oct 2022",
    companyLink: "https://www.fanap.ir",
    companyName: "Fanap Co / IR - Isfahan",
    description: `During my tenure at Fanap, I've been pivotal in crafting a cutting-edge E-School platform, harnessing a diverse skill set:
    <ul className="list-disc pl-4">
    <li>React.js: Creating seamless user interfaces and dynamic components.</li>
    <li>Axios: Ensuring secure communication with backend systems for smooth data exchange</li>
    <li>Material UI: Implementing sleek aesthetics and user-friendly design with its UI library.</li>
    <li>JWT Token Authentication: Guaranteeing robust login security within the authentication panel.</li>
   
  </ul>
    In this dynamic project, I adeptly managed four distinct panels - Admin, Student, Parent, and Super Admin - tailoring functionalities to cater to various user needs. Despite the challenges of the COVID era, our platform has empowered schools to efficiently handle online operations, from student enrollment to grade submissions, fostering a seamless educational journey.`,
  },
  {
    name: "tab2_bimer",
    label: "Bimer Co",
    jobTitle: "Frontend Developer",
    jobDuration: "Oct 2022 - Jun 2023",
    companyLink: "https://www.bimer.ir",
    companyName: "Bimer.ir / IR - Isfahan",
    description: `Skills:
    <ul className="list-disc pl-4">
      <li>TypeScript Development: I've elevated our projects with the robustness and type safety of TypeScript, ensuring code reliability and scalability. 🧩</li>
      <li>SWR for Caching and Data Fetching: Leveraging SWR, I've optimized data retrieval processes, enhancing performance and user experience while maintaining consistency. 🔄</li>
      <li>Material UI for UI Library: With Material UI, I've crafted visually appealing and intuitive interfaces, fostering seamless interactions and elevating user satisfaction. 🎨</li>
      <li>Clean Code Principles: I've championed clean code practices, emphasizing readability, maintainability, and efficiency in our projects, ensuring long-term success and ease of collaboration. 🧹</li>
      <li>Proficiency in Git Flow: Mastering Git flow, I've navigated project workflows with finesse, ensuring smooth collaboration, version control, and deployment. 🛠️</li>
    </ul>
    <p>
    🚀 During my tenure at Bimer Co, I've honed a versatile skill set that includes:
    In my role, I've seamlessly tackled challenges across both admin and client panels, utilizing my expertise to drive innovation and foster collaboration. Together, these skills have fueled a journey of growth, innovation, and success. 🌟
    </p>`,
  },
  {
    name: "tab3_graph",
    label: "Graph Inc",
    jobTitle: "Frontend Developer",
    jobDuration: "Jun 2023 - Present",
    companyLink: "https://www.graph-inc.ir",
    companyName: "Graph Inc / IR - Tehran",
    description: `Skills:
    <ul className="list-disc pl-4">
      <li>React.js: Utilizing the power of React.js ⚛️, I've crafted dynamic and responsive user interfaces, enhancing user experience and interaction.
      </li>
      <li>Leveraging Redux Toolkit 🧰, I've efficiently managed state across complex applications, ensuring data consistency and scalability.
      </li>
      <li>Axios: With Axios, I've seamlessly integrated backend communication, facilitating smooth data exchange and enhancing application performance.
      </li>
      <li>TypeScript: I've embraced the type safety and scalability of TypeScript 🧩, ensuring code reliability and maintainability in security-critical environments.
      </li>
      <li>Clean Code Principles: Embracing clean code principles 🧹, I've prioritized readability, maintainability, and security in all aspects of development, fortifying code integrity and reducing vulnerabilities.
      </li>
      <li>Front-end Security Bugs: My keen eye for front-end security bugs enables me to proactively identify and address potential vulnerabilities, safeguarding digital assets against cyber threats.
      </li>
    </ul>
    <p>
    🛡️ Transitioning to a role at a security company 🕵️, I've cultivated a robust skill set tailored for developing Extended Detection and Response (XDR) solutions and combating malware 🦠.
    In my role focusing on the front-end Advanced Threat Detection (ATD) panel, I've collaborated closely with security experts to develop a user-friendly interface for threat analysis and response. Through the strategic integration of React.js, Redux Toolkit, and TypeScript, I've infused the panel with dynamic features to streamline threat detection processes. By upholding clean code principles, I've reinforced security standards, ensuring the integrity and resilience of our solutions against evolving cyber threats.
    </p>`,
  },
];

export default experiencesMock;
