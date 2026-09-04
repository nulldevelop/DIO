const state = {
  page: 1,
  limit: 6,
  search: "",
  podcast: "",
  category: "",
  sort: "episode",
};

const grid = document.querySelector("#episode-grid");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const pagination = document.querySelector("#pagination");
const categoryFilters = document.querySelector("#category-filters");
const searchInput = document.querySelector("#search");

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#039;",
  '"': "&quot;",
}[character]));

function queryString() {
  const params = new URLSearchParams({ page: state.page, limit: state.limit, sort: state.sort });
  if (state.search) params.set("q", state.search);
  if (state.podcast) params.set("podcast", state.podcast);
  if (state.category) params.set("category", state.category);
  return params.toString();
}

function renderEpisodes(items) {
  grid.innerHTML = items.map((item, index) => {
    const hasVideo = item.videoId && item.videoId !== "00000";
    const cover = hasVideo ? `https://i.ytimg.com/vi/${encodeURIComponent(item.videoId)}/hqdefault.jpg` : "";
    const tags = item.categories.map((category) => `<span class="tag">${escapeHtml(category)}</span>`).join("");
    const link = hasVideo ? `https://www.youtube.com/watch?v=${encodeURIComponent(item.videoId)}` : "#";

    return `<article class="episode-card">
      <div class="card-art ${hasVideo ? "" : "fallback"}">
        ${hasVideo ? `<img src="${cover}" alt="Capa do episódio ${escapeHtml(item.episode)}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('fallback')">` : ""}
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="card-body">
        <p class="card-kicker">${escapeHtml(item.podcastName)}</p>
        <h3 class="card-title">${escapeHtml(item.episode)}</h3>
        <div class="card-footer">
          <div class="card-tags">${tags}</div>
          ${hasVideo ? `<a class="play-link" href="${link}" target="_blank" rel="noreferrer" aria-label="Abrir episódio no YouTube">↗</a>` : ""}
        </div>
      </div>
    </article>`;
  }).join("");
  emptyState.hidden = items.length > 0;
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }
  pagination.innerHTML = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    return `<button class="page ${page === state.page ? "active" : ""}" data-page="${page}">${page}</button>`;
  }).join("");
}

function renderCategories(items) {
  const categories = [...new Set(items.flatMap((item) => item.categories))].slice(0, 5);
  categoryFilters.innerHTML = categories.map((category) => `<button class="category ${state.category === category ? "active" : ""}" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("");
}

async function loadEpisodes() {
  resultCount.textContent = "atualizando...";
  try {
    const response = await fetch(`/api/podcasts?${queryString()}`);
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Não foi possível carregar o catálogo.");
    renderEpisodes(payload.items);
    renderPagination(payload.pages);
    resultCount.textContent = `${payload.total} ${payload.total === 1 ? "episódio" : "episódios"}`;
  } catch (error) {
    grid.innerHTML = `<div class="empty-state"><span>!</span><h3>Catálogo indisponível.</h3><p>${escapeHtml(error.message)}</p></div>`;
    resultCount.textContent = "erro de conexão";
  }
}

document.querySelectorAll("[data-podcast]").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll("[data-podcast]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  state.podcast = button.dataset.podcast;
  state.page = 1;
  loadEpisodes();
}));

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = state.category === button.dataset.category ? "" : button.dataset.category;
  state.page = 1;
  loadEpisodes();
});

pagination.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (!button) return;
  state.page = Number(button.dataset.page);
  loadEpisodes();
  window.scrollTo({ top: document.querySelector(".catalog-head").offsetTop - 30, behavior: "smooth" });
});

document.querySelector("#sort").addEventListener("change", (event) => {
  state.sort = event.target.value;
  state.page = 1;
  loadEpisodes();
});

let searchTimer;
searchInput.addEventListener("input", (event) => {
  window.clearTimeout(searchTimer);
  searchTimer = window.setTimeout(() => {
    state.search = event.target.value.trim();
    state.page = 1;
    loadEpisodes();
  }, 250);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});

loadEpisodes();
