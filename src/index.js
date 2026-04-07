import projects from '../data/projects.js';

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);

    if (pathname === '/projects.json') {
      return new Response(JSON.stringify(projects, null, 2), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(renderHTML(), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};

function renderHTML() {
  const projectCards = projects.map(p => `
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

  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Elapsed Lab</title>
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
    .nav-links { display: flex; gap: 1.5rem; }
    .nav-links a {
      font-size: .8rem;
      color: var(--muted);
      text-decoration: none;
      transition: color .15s;
    }
    .nav-links a:hover { color: var(--text); }

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

    /* ── Events ── */
    .events-grid { display: flex; flex-wrap: wrap; gap: 1.5rem; }
    .event-card { flex: 1; min-width: 280px; max-width: 560px; }
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

    /* ── Footer ── */
    footer {
      margin-top: auto;
      padding: 1.5rem 2rem;
      border-top: 1px solid var(--border);
      text-align: center;
      font-size: .75rem;
      color: var(--muted);
    }

    @media (max-width: 480px) {
      .hero { padding: 3rem 1.25rem 2.5rem; }
      .section { padding: 0 1.25rem 3rem; }
      .grid { grid-template-columns: 1fr; }
      nav { padding: 1rem 1.25rem; }
    }
  </style>
</head>
<body>

<nav>
  <a class="nav-brand" href="/">ELAPSED LAB</a>
  <div class="nav-links">
    <a href="https://github.com/keep-elapsed-time" target="_blank" rel="noopener">GitHub</a>
    <a href="https://github.com/keepelapsedtime" target="_blank" rel="noopener">GitHub (alt)</a>
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
    ${projectCards}
  </div>
</section>

<section class="section">
  <p class="section-title">Events</p>
  <div class="events-grid">
    <div class="event-card">
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
