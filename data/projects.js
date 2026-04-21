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
];

// default export keeps /projects.json backward compatible
export default { sites, projects };
