import data from '../data/projects.js';

const { sites, projects, jobs } = data;

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);

    if (pathname === '/projects.json') {
      return new Response(JSON.stringify(data, null, 2), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(renderHTML(), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};

function renderCards(items) {
  return items.map(p => `
    <div class="card">
      <div class="card-header">
        <h3>${p.name}</h3>
        <div class="card-links">
          ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener">↗ Live</a>` : ''}
          ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">⌥ Repo</a>` : ''}
        </div>
      </div>
      <p class="desc-en">${p.desc_en}</p>
      <p class="desc-zh">${p.desc_zh}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderHTML() {
  const siteCards    = renderCards(sites);
  const projectCards = renderCards(projects);
  const jobCards     = renderCards(jobs);

  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Elapsed Lab</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⏱</text></svg>"/>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RFXR7LC1E3"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-RFXR7LC1E3');
  </script>
  <style>
    :root {
      --bg: #0d0d0d;
      --surface: #141414;
      --border: #222;
      --text: #e0e0e0;
      --muted: #666;
      --accent: #00d4aa;
      --tag-bg: #1a1a1a;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace, system-ui, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* ── Nav ── */
    nav {
      padding: 1.25rem 2rem;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-brand {
      font-size: .85rem;
      font-weight: 600;
      color: var(--accent);
      text-decoration: none;
      letter-spacing: .05em;
    }
    .nav-links { display: flex; gap: 1.25rem; align-items: center; }
    .nav-links a {
      font-size: .8rem;
      color: var(--muted);
      text-decoration: none;
      transition: color .15s;
      display: inline-flex;
      align-items: center;
      gap: .3rem;
    }
    .nav-links a:hover { color: var(--text); }
    .nav-links svg { width: 14px; height: 14px; fill: currentColor; flex-shrink: 0; }

    /* ── Hero ── */
    .hero {
      padding: 5rem 2rem 4rem;
      max-width: 860px;
      margin: 0 auto;
      width: 100%;
    }
    .hero-label {
      font-size: .75rem;
      color: var(--accent);
      letter-spacing: .15em;
      text-transform: uppercase;
      margin-bottom: .75rem;
    }
    .hero h1 {
      font-size: clamp(2.2rem, 5vw, 3.5rem);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -.02em;
      color: #fff;
      margin-bottom: 1.25rem;
    }
    .hero h1 span { color: var(--accent); }
    .tagline {
      font-size: .9rem;
      color: var(--muted);
      letter-spacing: .08em;
    }

    /* ── Projects ── */
    .section {
      max-width: 860px;
      margin: 0 auto;
      width: 100%;
      padding: 0 2rem 5rem;
    }
    .section-title {
      font-size: .75rem;
      color: var(--accent);
      letter-spacing: .15em;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      padding-bottom: .5rem;
      border-bottom: 1px solid var(--border);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
    }
    .card {
      background: var(--surface);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: .75rem;
    }
    .card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }
    .card h3 {
      font-size: .95rem;
      font-weight: 600;
      color: #fff;
      line-height: 1.3;
    }
    .card-links {
      display: flex;
      gap: .5rem;
      flex-shrink: 0;
    }
    .card-links a {
      font-size: .72rem;
      color: var(--accent);
      text-decoration: none;
      padding: .2rem .5rem;
      border: 1px solid var(--accent);
      border-radius: 3px;
      white-space: nowrap;
      transition: background .15s;
    }
    .card-links a:hover { background: rgba(0,212,170,.1); }
    .desc-en {
      font-size: .82rem;
      color: var(--text);
      line-height: 1.6;
    }
    .desc-zh {
      font-size: .8rem;
      color: var(--muted);
      line-height: 1.6;
    }
    .tags { display: flex; flex-wrap: wrap; gap: .4rem; margin-top: .25rem; }
    .tag {
      font-size: .68rem;
      color: var(--muted);
      background: var(--tag-bg);
      border: 1px solid var(--border);
      padding: .15rem .5rem;
      border-radius: 2px;
      letter-spacing: .03em;
    }

    /* ── Speech & Events ── */
    .events-grid { display: flex; flex-wrap: wrap; gap: 1.5rem; }
    .event-card { flex: 1; min-width: 280px; max-width: 560px; display: flex; flex-direction: column; gap: .75rem; }
    .event-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: .5rem;
    }
    .event-label {
      font-size: .68rem;
      color: var(--muted);
      background: var(--tag-bg);
      border: 1px solid var(--border);
      padding: .15rem .5rem;
      border-radius: 2px;
      letter-spacing: .05em;
      text-transform: uppercase;
    }
    .event-link {
      font-size: .72rem;
      color: var(--accent);
      text-decoration: none;
      padding: .2rem .5rem;
      border: 1px solid var(--accent);
      border-radius: 3px;
      white-space: nowrap;
      transition: background .15s;
    }
    .event-link:hover { background: rgba(0,212,170,.1); }
    .event-title {
      font-size: .88rem;
      font-weight: 600;
      color: #fff;
      line-height: 1.4;
    }
    .event-desc {
      font-size: .8rem;
      color: var(--muted);
      line-height: 1.6;
    }
    .video-wrap {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      background: var(--surface);
      border: 1px solid var(--border);
    }
    .video-wrap iframe {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      border: none;
    }
    .article-card {
      background: var(--surface);
      border: 1px solid var(--border);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: .75rem;
      flex: 1;
    }

    /* ── Footer ── */
    footer {
      margin-top: auto;
      padding: 1.5rem 2rem;
      border-top: 1px solid var(--border);
      text-align: center;
      font-size: .75rem;
      color: var(--muted);
    }

    @media (max-width: 768px) {
      nav {
        padding: 1rem 1.25rem;
        flex-direction: column;
        align-items: flex-start;
        gap: .6rem;
      }
      .nav-links {
        flex-wrap: wrap;
        gap: .6rem 1rem;
      }
      .nav-links a { font-size: .75rem; }
      .hero { padding: 3rem 1.25rem 2.5rem; }
      .section { padding: 0 1.25rem 3rem; }
      .grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<nav>
  <a class="nav-brand" href="/">ELAPSED LAB</a>
  <div class="nav-links">
    <a href="https://www.kevin.taipei" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
      Home
    </a>
    <a href="https://kevin.taipei" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
      Landing
    </a>
    <a href="https://github.com/keep-elapsed-time" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
      Lab
    </a>
    <a href="https://github.com/keepelapsedtime" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
      Kevin
    </a>
    <a href="https://www.linkedin.com/in/kevink-trk" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      LinkedIn
    </a>
  </div>
</nav>

<section class="hero">
  <p class="hero-label">Elapsed Lab</p>
  <h1>Keep Run<br/>Keep Try<br/><span>Keep Elapsed Time.</span></h1>
  <p class="tagline">// Building things, one elapsed second at a time.</p>
</section>

<section class="section">
  <p class="section-title">Sites</p>
  <div class="grid">
    ${siteCards}
  </div>
</section>

<section class="section">
  <p class="section-title">Current Jobs</p>
  <div class="grid">
    ${jobCards}
  </div>
</section>

<section class="section">
  <p class="section-title">Past Projects</p>
  <div class="grid">
    ${projectCards}
  </div>
</section>

<section class="section">
  <p class="section-title">Speech &amp; Events</p>
  <div class="events-grid">
    <div class="event-card">
      <div class="event-meta">
        <span class="event-label">Talk · Vulcan Lab</span>
        <a class="event-link" href="https://vulcanlab.ai/confidently-deploying-genai-trends-risks-and-zero-trust-defense-strategies/" target="_blank" rel="noopener">↗ Read</a>
      </div>
      <div class="article-card" style="padding:0;border:none;background:transparent;">
        <p class="event-title">Confidently Deploying GenAI: Trends, Risks, and Zero Trust Defense Strategies</p>
        <p class="event-desc">An in-depth look at how organizations can safely adopt GenAI — covering the latest deployment trends, security risks, and how Zero Trust principles apply to LLM-based systems.</p>
      </div>
    </div>
    <div class="event-card">
      <div class="event-meta">
        <span class="event-label">Talk · 資安人論壇</span>
        <a class="event-link" href="https://www.informationsecurity.com.tw/article/article_detail.aspx?aid=11933" target="_blank" rel="noopener">↗ Read</a>
      </div>
      <div class="article-card" style="padding:0;border:none;background:transparent;">
        <p class="event-title">生成式 AI 資安風險與防護策略</p>
        <p class="event-desc">資安人論壇講者 — 深入探討企業導入 GenAI 的資安挑戰，涵蓋提示注入、資料外洩與防護架構設計。</p>
      </div>
    </div>
    <div class="event-card">
      <div class="event-meta">
        <span class="event-label">Talk · YouTube</span>
        <a class="event-link" href="https://www.youtube.com/watch?v=9gcZ7j3a5MQ" target="_blank" rel="noopener">↗ Watch</a>
      </div>
      <div class="video-wrap">
        <iframe src="https://www.youtube.com/embed/9gcZ7j3a5MQ?si=Ig-l9bFAawdZTvsU"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>

<footer>
  © Elapsed Lab · <a href="https://github.com/keep-elapsed-time" style="color:inherit">keep-elapsed-time</a>
</footer>

</body>
</html>`;
}
