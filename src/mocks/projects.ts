export interface IProjects {
  projectImage: string;
  projectName: string;
  projectDetail: string;
  projectToolsUsed: string;
  githubLink?: string;
  projectLink?: string;
}

const projectsMock: Array<IProjects> = [
  {
    projectImage: "images/personal-website.png",
    projectName: "Personal website",
    projectDetail:
      "I develop it for mine, after that I decided to redesign and change it.",
    projectToolsUsed: "Next.js - Tailwind CSS - Daisy UI",
    githubLink: "https://github.com/alichatraei/ali-chatraei",
    projectLink: "https://alichatraei.github.io/ali-chatraei/",
  },
  {
    projectImage: "images/gold-market.png",
    projectName: "Gold management system",
    projectDetail: `It’s a Comprehensive gold inquiry system that’s has three
      panels:
      Gold seller : sell identified gold, Producer: Add its gold,
      assign gold to a gold seller, Union : Accept producers,
      gold sellers,Accept golds added by producer.`,
    projectToolsUsed: "React.js - Redux toolkit - Formik - MUI",
    githubLink: "https://github.com/alichatraei/gold-market",
    projectLink: "http://185.252.86.133/",
  },
  {
    projectImage: "images/nft-marketplace.png",
    projectName: "NFT Marketplace",
    projectDetail:
      "and deploying a custom NFT smart contract on a blockchain network, enabling the creation, minting, and trading of non-fungible tokens (NFTs) securely and transparently.      ",
    projectToolsUsed: "Next.js - Tailwind CSS - Hardhat",
    githubLink: "https://github.com/alichatraei/NFT-Marketplace",
  },
];
export default projectsMock