/**
 * Elapsed Lab — Project List
 * Edit this file and push to update the homepage.
 *
 * Fields:
 *   name         — project name (shown as card title)
 *   desc_en      — English description
 *   desc_zh      — Traditional Chinese description
 *   url          — live URL (optional, null if not deployed)
 *   repo         — GitHub repo URL (optional)
 *   tags         — array of tag strings
 */

const projects = [
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
  {
    name: 'Pokémon Card Trade',
    desc_en: 'My Pokémon trading card shop.',
    desc_zh: '我的寶可夢集換式卡牌交易頁面。',
    url: 'https://trade.kapaipai.tw/shop/11240381',
    repo: null,
    tags: ['Pokémon', 'TCG'],
  },
];

export default projects;
