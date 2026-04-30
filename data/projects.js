/**
 * Elapsed Lab — Project List
 * Edit this file and push to update the homepage.
 *
 * sites    — deployed websites / blogs
 * projects — other work (retail, hardware, events, etc.)
 */

export const sites = [
  {
    name: 'Friday Blog',
    desc_en: 'Personal blog covering tech, AI, and everything in between.',
    desc_zh: '個人技術部落格，涵蓋 AI、工具與各種技術紀錄。',
    url: 'https://blog.friday.kevin.taipei',
    repo: null,
    tags: ['Blog', 'Tech'],
  },
  {
    name: 'kevin.taipei',
    desc_en: 'Personal website — travel notes, tech perspectives, and knowledge management.',
    desc_zh: '個人網站，旅遊紀錄、技術觀點與知識管理。',
    url: 'https://www.kevin.taipei',
    repo: null,
    tags: ['Personal', 'Travel', 'Tech'],
  },
];

export const projects = [
  {
    name: 'Wacom 光華華得展示中心',
    desc_en: 'Authorized Wacom dealer and support hub in Taipei — products, demos, courses, and technical support for digital creators.',
    desc_zh: 'Wacom 台北光華授權展示中心，提供產品展示、驅動下載、線上課程與技術支援。',
    url: 'https://sites.google.com/view/gh3c-wacom-huade',
    repo: null,
    tags: ['Hardware', 'Wacom', 'Retail'],
  },
  {
    name: '臺北商業論叢',
    desc_en: 'Academic journal platform by National Taipei University of Business — peer-reviewed business and management research, open-access since 2023.',
    desc_zh: '國立臺北商業大學出版之學術期刊，2023 年起轉型為開放取用電子期刊，收錄商業與管理領域研究。',
    url: 'https://journal.ntub.edu.tw/',
    repo: null,
    tags: ['Academic', 'Journal', 'NTUB'],
  },
];

export const jobs = [
  {
    name: 'Vulcan Lab',
    desc_en: 'AI security research and product development — building the next generation of GenAI safety infrastructure.',
    desc_zh: 'AI 安全研究與產品開發，打造下一代生成式 AI 安全基礎設施。',
    url: 'https://vulcanlab.ai/',
    repo: null,
    tags: ['AI Security', 'GenAI', 'Research'],
  },
  {
    name: 'OASEC',
    desc_en: 'Open AI Security — community and resources for AI security practitioners, researchers, and organizations.',
    desc_zh: '開放式 AI 安全社群，提供 AI 安全從業者、研究人員與組織所需的資源與交流平台。',
    url: 'https://oasec.org/',
    repo: null,
    tags: ['AI Security', 'Community', 'Open Source'],
  },
];

// default export keeps /projects.json backward compatible
export default { sites, projects, jobs };
