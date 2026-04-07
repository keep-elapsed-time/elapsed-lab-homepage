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
    name: 'Adversarial Dataset Tracker',
    desc_en: 'Automated catalog of jailbreak & prompt-injection datasets for guardrail model training. Searches HuggingFace, arXiv, GitHub, and the web every 6 hours.',
    desc_zh: '自動蒐集 jailbreak、prompt injection 等對抗性資料集，用於 guardrail 模型訓練。每 6 小時自動更新。',
    url: null,
    repo: 'https://github.com/keep-elapsed-time/adversarial-dataset-tracker',
    tags: ['AI Safety', 'Dataset', 'Automation'],
  },
  {
    name: 'Copilot Studio Guardrail Proxy',
    desc_en: 'Cloudflare Worker that wraps Microsoft Copilot Studio with OpenAI content moderation. Supports Entra user authentication via MSAL.',
    desc_zh: '以 Cloudflare Worker 為 Microsoft Copilot Studio 加上 OpenAI 內容審核層，支援 Entra 使用者驗證。',
    url: 'https://copilot-guardrail-proxy.tingruikp0925.workers.dev',
    repo: 'https://github.com/keep-elapsed-time/copilot-guardrail-proxy',
    tags: ['AI Safety', 'Cloudflare', 'Microsoft'],
  },
];

export default projects;
