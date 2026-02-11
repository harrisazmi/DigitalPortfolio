export type ToolItem = {
  name: string
  path: string
  type: string
}

export const ToolsImages: ToolItem[] = [
  //Language
  { name: 'C++', path: '/tools/languages/cpp.png', type: 'languages' },
  {
    name: 'Javascript',
    path: '/tools/languages/javascript.png',
    type: 'languages',
  },
  { name: 'Python', path: '/tools/languages/python.png', type: 'languages' },
  {
    name: 'TypeScript',
    path: '/tools/languages/typescript.png',
    type: 'languages',
  },

  //Fullstack
  { name: 'NextJs', path: '/tools/fullstack/nextjs.png', type: 'fullstack' },

  //Frontend
  { name: 'HTML5', path: '/tools/frontend/html.png', type: 'frontend' },
  { name: 'CSS3', path: '/tools/frontend/css.png', type: 'frontend' },
  {
    name: 'TailwindCSS',
    path: '/tools/frontend/tailwind.png',
    type: 'frontend',
  },
  { name: 'React', path: '/tools/frontend/react.png', type: 'frontend' },
  { name: 'Vite', path: '/tools/frontend/vite.png', type: 'frontend' },
  { name: 'jQuery', path: '/tools/frontend/jquery.png', type: 'frontend' },
  { name: 'Fumadocs', path: '/tools/frontend/fumadocs.png', type: 'frontend' },
  {
    name: 'Storybook',
    path: '/tools/frontend/storybook.png',
    type: 'frontend',
  },

  //Backend
  { name: 'Node.js', path: '/tools/backend/nodejs.png', type: 'backend' },
  { name: 'Express.js', path: '/tools/backend/expressjs.png', type: 'backend' },
  { name: 'Mongoose', path: '/tools/backend/mongoose.png', type: 'backend' },
  { name: 'Puppeteer', path: '/tools/backend/puppeteer.png', type: 'backend' },

  //Database
  { name: 'MongoDB', path: '/tools/database/mongodb.png', type: 'database' },
  { name: 'MySQL', path: '/tools/database/mysql.png', type: 'database' },
  {
    name: 'Oracle Database',
    path: '/tools/database/oracle.png',
    type: 'database',
  },
  { name: 'SQL', path: '/tools/database/sql.png', type: 'database' },
  {
    name: 'Oracle PL/SQL',
    path: '/tools/database/oracleplsql.png',
    type: 'database',
  },
  {
    name: 'PostgreSQLs',
    path: '/tools/database/postgres.png',
    type: 'database',
  },
  {
    name: 'Elastic Search',
    path: '/tools/database/elasticsearch.png',
    type: 'database',
  },

  //Devops used
  { name: 'Docker', path: '/tools/devops/docker.png', type: 'devops' },
  { name: 'DockerHub', path: '/tools/devops/dockerhub.png', type: 'devops' },
  { name: 'Spinnaker', path: '/tools/devops/spinnaker.png', type: 'devops' },
  { name: 'GitHubActions', path: '/tools/devops/gha.png', type: 'devops' },
  { name: 'Kubernetes', path: '/tools/devops/k8s.png', type: 'devops' },
  {
    name: 'Linux Container (LXC)',
    path: '/tools/devops/lxc.png',
    type: 'devops',
  },
  { name: 'Portainer', path: '/tools/devops/portainer.png', type: 'devops' },
  { name: 'Proxmox', path: '/tools/devops/proxmox.png', type: 'devops' },
  { name: 'ESXI', path: '/tools/devops/esxi.png', type: 'devops' },
  { name: 'Ubuntu LTS', path: '/tools/devops/ubuntu.png', type: 'devops' },
  { name: 'Nginx', path: '/tools/devops/nginx.png', type: 'devops' },
  { name: 'Cloudflare', path: '/tools/devops/cloudflare.png', type: 'devops' },
  { name: 'Terraform', path: '/tools/devops/terraform.png', type: 'devops' },

  { name: 'AWS', path: '/tools/devops/aws.png', type: 'devops' },
  { name: 'AWS ECR', path: '/tools/devops/awsecr.png', type: 'devops' },

  //Next Version Bump
  // { name: "Ansible", path: "/tools/devops/13.png", type: "devops" },
  // { name: "LogStash", path: "/tools/devops/13.png", type: "devops" },
  // { name: "Kibana", path: "/tools/devops/13.png", type: "devops" },
  // { name: "Sentry", path: "/tools/devops/13.png", type: "devops" },

  //Others
  { name: 'Postman', path: '/tools/others/postman.png', type: 'others' },
  { name: 'Git', path: '/tools/others/git.png', type: 'others' },
  { name: 'GitHub', path: '/tools/others/github.png', type: 'others' },
  { name: 'Jest', path: '/tools/others/jest.png', type: 'others' },

  //Management Tools
  { name: 'Jira', path: '/tools/management/1.png', type: 'management' },
  { name: 'Linear', path: '/tools/management/2.png', type: 'management' },
  { name: 'Slack', path: '/tools/management/3.png', type: 'management' },
]
