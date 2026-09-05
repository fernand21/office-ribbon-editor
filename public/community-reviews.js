(() => {
  const REPOSITORY = "https://github.com/fernand21/ribbon-ui-studio";
  const API = "https://api.github.com/repos/fernand21/ribbon-ui-studio/issues?state=all&per_page=100&sort=created&direction=desc";
  const RATE_URL = `${REPOSITORY}/issues/new?template=user-experience.yml`;
  const LANGS = new Set(["en","es","pt","fr","de","it","ru","zh","ja","hi"]);

  const text = {
    en:{badge:"Multilingual interface",eyebrow:"Community ratings",title:"Built with developers, improved by their experience.",body:"Rate Ribbon UI Studio and tell other developers how you use it with Excel, Word or PowerPoint. Reviews are public on GitHub so they can be read and verified by anyone.",rate:"Rate Ribbon UI Studio",all:"See all experiences",none:"No public ratings yet",first:"Be the first to rate the editor and share what you built.",ratings:"ratings",latest:"Recent experiences",loading:"Loading public ratings…",verified:"Public GitHub experience"},
    es:{badge:"Interfaz multilingüe",eyebrow:"Calificaciones de la comunidad",title:"Creado con desarrolladores y mejorado con su experiencia.",body:"Califica Ribbon UI Studio y cuéntale a otros desarrolladores cómo lo utilizas con Excel, Word o PowerPoint. Las opiniones son públicas en GitHub para que cualquiera pueda leerlas y verificarlas.",rate:"Calificar Ribbon UI Studio",all:"Ver todas las experiencias",none:"Aún no hay calificaciones públicas",first:"Sé la primera persona en calificar el editor y contar qué creaste.",ratings:"calificaciones",latest:"Experiencias recientes",loading:"Cargando calificaciones públicas…",verified:"Experiencia pública en GitHub"},
    pt:{badge:"Interface multilíngue",eyebrow:"Avaliações da comunidade",title:"Feito com desenvolvedores e melhorado pela experiência deles.",body:"Avalie o Ribbon UI Studio e conte a outros desenvolvedores como você o usa com Excel, Word ou PowerPoint. As avaliações são públicas no GitHub.",rate:"Avaliar Ribbon UI Studio",all:"Ver todas as experiências",none:"Ainda não há avaliações públicas",first:"Seja a primeira pessoa a avaliar o editor e contar o que criou.",ratings:"avaliações",latest:"Experiências recentes",loading:"Carregando avaliações públicas…",verified:"Experiência pública no GitHub"},
    fr:{badge:"Interface multilingue",eyebrow:"Avis de la communauté",title:"Créé avec les développeurs, amélioré grâce à leur expérience.",body:"Évaluez Ribbon UI Studio et expliquez comment vous l’utilisez avec Excel, Word ou PowerPoint. Les avis sont publics sur GitHub.",rate:"Évaluer Ribbon UI Studio",all:"Voir toutes les expériences",none:"Aucune note publique pour le moment",first:"Soyez la première personne à évaluer l’éditeur et à partager votre projet.",ratings:"avis",latest:"Expériences récentes",loading:"Chargement des avis publics…",verified:"Expérience publique sur GitHub"},
    de:{badge:"Mehrsprachige Oberfläche",eyebrow:"Community-Bewertungen",title:"Mit Entwicklern erstellt und durch ihre Erfahrungen verbessert.",body:"Bewerten Sie Ribbon UI Studio und zeigen Sie anderen Entwicklern, wie Sie es mit Excel, Word oder PowerPoint einsetzen. Bewertungen sind öffentlich auf GitHub.",rate:"Ribbon UI Studio bewerten",all:"Alle Erfahrungen ansehen",none:"Noch keine öffentlichen Bewertungen",first:"Seien Sie die erste Person, die den Editor bewertet und ihr Projekt teilt.",ratings:"Bewertungen",latest:"Neueste Erfahrungen",loading:"Öffentliche Bewertungen werden geladen…",verified:"Öffentliche GitHub-Erfahrung"},
    it:{badge:"Interfaccia multilingue",eyebrow:"Valutazioni della community",title:"Creato con gli sviluppatori e migliorato dalla loro esperienza.",body:"Valuta Ribbon UI Studio e racconta agli altri sviluppatori come lo usi con Excel, Word o PowerPoint. Le recensioni sono pubbliche su GitHub.",rate:"Valuta Ribbon UI Studio",all:"Vedi tutte le esperienze",none:"Non ci sono ancora valutazioni pubbliche",first:"Sii il primo a valutare l’editor e raccontare cosa hai creato.",ratings:"valutazioni",latest:"Esperienze recenti",loading:"Caricamento delle valutazioni pubbliche…",verified:"Esperienza pubblica su GitHub"},
    ru:{badge:"Многоязычный интерфейс",eyebrow:"Оценки сообщества",title:"Создано вместе с разработчиками и улучшается благодаря их опыту.",body:"Оцените Ribbon UI Studio и расскажите другим разработчикам, как вы используете его с Excel, Word или PowerPoint. Отзывы публикуются на GitHub.",rate:"Оценить Ribbon UI Studio",all:"Все отзывы",none:"Публичных оценок пока нет",first:"Оставьте первую оценку и расскажите о своём проекте.",ratings:"оценок",latest:"Последние отзывы",loading:"Загрузка публичных оценок…",verified:"Публичный отзыв на GitHub"},
    zh:{badge:"多语言界面",eyebrow:"社区评分",title:"与开发者共同打造，并根据真实体验持续改进。",body:"为 Ribbon UI Studio 评分，并告诉其他开发者您如何将它用于 Excel、Word 或 PowerPoint。评价公开发布在 GitHub 上。",rate:"为 Ribbon UI Studio 评分",all:"查看所有体验",none:"暂无公开评分",first:"成为第一位评分并分享项目体验的用户。",ratings:"条评分",latest:"最近体验",loading:"正在加载公开评分…",verified:"GitHub 公开体验"},
    ja:{badge:"多言語インターフェース",eyebrow:"コミュニティ評価",title:"開発者とともに作り、実際の体験から改善します。",body:"Ribbon UI Studioを評価し、Excel、Word、PowerPointでの使い方を共有してください。レビューはGitHubで公開され、誰でも確認できます。",rate:"Ribbon UI Studioを評価",all:"すべての体験を見る",none:"公開評価はまだありません",first:"最初の評価者として、作成したものを共有してください。",ratings:"件の評価",latest:"最近の体験",loading:"公開評価を読み込み中…",verified:"GitHub公開レビュー"},
    hi:{badge:"बहुभाषी इंटरफ़ेस",eyebrow:"समुदाय रेटिंग",title:"डेवलपर्स के साथ बनाया गया और उनके अनुभव से बेहतर किया गया।",body:"Ribbon UI Studio को रेट करें और बताएं कि आप इसे Excel, Word या PowerPoint के साथ कैसे उपयोग करते हैं। समीक्षाएँ GitHub पर सार्वजनिक रहती हैं।",rate:"Ribbon UI Studio को रेट करें",all:"सभी अनुभव देखें",none:"अभी कोई सार्वजनिक रेटिंग नहीं",first:"एडिटर को रेट करने और अपना काम साझा करने वाले पहले व्यक्ति बनें।",ratings:"रेटिंग",latest:"हाल के अनुभव",loading:"सार्वजनिक रेटिंग लोड हो रही हैं…",verified:"GitHub पर सार्वजनिक अनुभव"}
  };

  let reviews = [];
  let loaded = false;

  function lang() {
    const stored = (localStorage.getItem("ore-language") || "").slice(0,2).toLowerCase();
    const html = (document.documentElement.lang || "").slice(0,2).toLowerCase();
    return LANGS.has(html) ? html : (LANGS.has(stored) ? stored : "en");
  }

  function ratingFrom(body = "") {
    const section = body.match(/###\s*(?:Rating\s*\/\s*Calificaci[oó]n|Rating|Calificaci[oó]n)\s*\r?\n+([^\r\n]+)/i);
    const line = section?.[1] || "";
    const fraction = line.match(/([1-5])\s*\/\s*5/);
    if (fraction) return Number(fraction[1]);
    const stars = (line.match(/★/g) || []).length;
    return stars >= 1 && stars <= 5 ? stars : 0;
  }

  function experienceFrom(body = "") {
    const match = body.match(/###\s*(?:Your experience\s*\/\s*Tu experiencia|Your experience|Tu experiencia)\s*\r?\n+([\s\S]*?)(?=\r?\n###|$)/i);
    return (match?.[1] || "").replace(/<!--.*?-->/gs, "").trim();
  }

  function officeFrom(body = "") {
    const match = body.match(/###\s*(?:Office app\s*\/\s*Aplicaci[oó]n de Office|Office app|Aplicaci[oó]n de Office)\s*\r?\n+([^\r\n]+)/i);
    return (match?.[1] || "").trim();
  }

  function stars(value) {
    return `<span class="community-stars" aria-label="${value} out of 5">${"★".repeat(value)}${"☆".repeat(5-value)}</span>`;
  }

  function stats() {
    const rated = reviews.filter(r => r.rating > 0);
    const average = rated.length ? rated.reduce((sum,r)=>sum+r.rating,0) / rated.length : 0;
    return { rated, average };
  }

  function badge() {
    document.querySelectorAll(".hero-copy").forEach(hero => {
      if (hero.querySelector(".multilingual-product-badge")) return;
      const node = document.createElement("div");
      node.className = "multilingual-product-badge";
      node.textContent = `🌐 ${text[lang()].badge}`;
      const fine = hero.querySelector(".fine-print");
      if (fine) fine.before(node); else hero.append(node);
    });
  }

  function ratingMarkup(fullSection) {
    const l = text[lang()];
    const { rated, average } = stats();
    const summary = rated.length
      ? `<div class="community-rating-summary"><strong>${average.toFixed(1)}</strong><div>${stars(Math.round(average))}<span>${rated.length} ${l.ratings}</span></div></div>`
      : `<div class="community-rating-summary empty"><strong>—</strong><div>${stars(0)}<span>${l.none}</span></div></div>`;
    const cards = rated.length
      ? `<div class="community-review-list">${rated.slice(0,6).map(r=>`<a class="community-review" href="${r.url}" target="_blank" rel="noreferrer"><div><b>@${escapeHtml(r.user || "Office user")}</b>${stars(r.rating)}</div>${r.office ? `<small>${escapeHtml(r.office)}</small>` : ""}<p>${escapeHtml((r.experience || r.title).slice(0,260))}</p><span>${l.verified} ↗</span></a>`).join("")}</div>`
      : `<div class="community-review-empty"><b>${loaded ? l.none : l.loading}</b><span>${l.first}</span></div>`;
    const inner = `<div class="community-rating-head"><div><p class="community-rating-eyebrow">${l.eyebrow}</p><h2>${l.title}</h2><p>${l.body}</p></div>${summary}</div><div class="community-rating-actions"><a class="button button-primary" href="${RATE_URL}" target="_blank" rel="noreferrer">${l.rate}<span>★</span></a><a class="text-link" href="${REPOSITORY}/issues?q=${encodeURIComponent('is:issue "[Experience]"')}" target="_blank" rel="noreferrer">${l.all} →</a></div>${cards}`;
    return fullSection ? `<section class="public-rating-section" id="ratings">${inner}</section>` : `<div class="community-rating-panel" id="ratings">${inner}</div>`;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  }

  function render() {
    badge();
    const feedbackCard = document.querySelector(".feedback-card");
    if (feedbackCard) {
      let panel = feedbackCard.querySelector(".community-rating-panel");
      if (!panel) {
        panel = document.createElement("div");
        panel.className = "community-rating-panel";
        panel.id = "ratings";
        feedbackCard.append(panel);
      }
      panel.outerHTML = ratingMarkup(false);
      return;
    }
    const footer = document.querySelector("footer");
    if (!footer) return;
    const existing = document.querySelector(".public-rating-section");
    if (existing) existing.outerHTML = ratingMarkup(true);
    else footer.insertAdjacentHTML("beforebegin", ratingMarkup(true));
  }

  fetch(API, { headers:{ Accept:"application/vnd.github+json" } })
    .then(r => r.ok ? r.json() : [])
    .then(items => {
      reviews = items
        .filter(i => !i.pull_request && /^\[Experience\]/i.test(i.title || ""))
        .map(i => ({
          title:i.title,
          url:i.html_url,
          user:i.user?.login || "",
          rating:ratingFrom(i.body || ""),
          experience:experienceFrom(i.body || ""),
          office:officeFrom(i.body || "")
        }));
    })
    .catch(() => { reviews = []; })
    .finally(() => { loaded = true; render(); });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();

  new MutationObserver(() => render()).observe(document.documentElement, { attributes:true, attributeFilter:["lang"] });
})();
