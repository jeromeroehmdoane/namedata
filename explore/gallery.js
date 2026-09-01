const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const thumbnailRotators = new Set();

const thumbnailObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const rotator = entry.target._thumbnailRotator;
    if (!rotator) return;
    if (entry.isIntersecting) rotator.start();
    else rotator.stop();
  });
}, { rootMargin: "120px 0px", threshold: 0.08 });

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    thumbnailRotators.forEach(rotator => rotator.resumeIfActive());
  }
});

export function sectionSlug(category) {
  return String(category)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCategories(visualizations) {
  return [...new Set(visualizations.map(item => item.category))];
}

export function getCategoryBySlug(visualizations, slug) {
  return getCategories(visualizations)
    .find(category => sectionSlug(category) === slug) ?? null;
}

export function categoryHref(category) {
  return `./category.html?section=${encodeURIComponent(sectionSlug(category))}`;
}

export function visualizationHref(item) {
  return `./view.html?section=${encodeURIComponent(sectionSlug(item.category))}&id=${encodeURIComponent(item.id)}`;
}

export function renderCategoryNavigation(container, visualizations, activeSection = null) {
  const allLink = document.createElement("a");
  allLink.className = "filter-button";
  allLink.textContent = "All";
  allLink.href = "./index.html";
  allLink.classList.toggle("active", activeSection === null);
  if (activeSection === null) allLink.setAttribute("aria-current", "page");
  container.append(allLink);

  getCategories(visualizations).forEach(category => {
    const slug = sectionSlug(category);
    const link = document.createElement("a");
    link.className = "filter-button";
    link.textContent = category;
    link.href = categoryHref(category);
    link.dataset.section = slug;
    link.classList.toggle("active", slug === activeSection);
    if (slug === activeSection) link.setAttribute("aria-current", "page");
    container.append(link);
  });
}

export function makeSectionCard(category) {
  const link = document.createElement("a");
  link.className = "section-card section-card-link";
  link.href = categoryHref(category);

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Section";

  const title = document.createElement("h2");
  title.textContent = category;

  link.append(eyebrow, title);
  return link;
}

function setupThumbnailRotation(card, frames, imageA, imageB) {
  if (frames.length <= 1 || reduceMotion.matches) return;

  let frameIndex = 0;
  let front = imageA;
  let back = imageB;
  let timer = null;
  let active = false;

  const schedule = (initial = false) => {
    clearTimeout(timer);
    if (!active || document.hidden) return;
    const duration = Number(frames[frameIndex]?.duration) || 5000;
    const stagger = initial ? (Number(card.dataset.thumbIndex) % 3) * 650 : 0;
    timer = window.setTimeout(advance, duration + stagger);
  };

  const advance = () => {
    if (!active || document.hidden) return;
    const nextIndex = (frameIndex + 1) % frames.length;
    back.src = frames[nextIndex].src;

    const reveal = () => {
      back.classList.add("is-visible");
      front.classList.remove("is-visible");
      [front, back] = [back, front];
      frameIndex = nextIndex;
      schedule(false);
    };

    if (back.complete) reveal();
    else back.addEventListener("load", reveal, { once: true });
  };

  const rotator = {
    start() {
      active = true;
      schedule(true);
    },
    stop() {
      active = false;
      clearTimeout(timer);
    },
    resumeIfActive() {
      if (active) schedule(false);
    }
  };

  card._thumbnailRotator = rotator;
  thumbnailRotators.add(rotator);
}

export function makeVisualizationCard(item, thumbnailIndex) {
  const link = document.createElement("a");
  link.className = "gallery-card gallery-card-link";
  link.dataset.thumbIndex = String(thumbnailIndex);
  link.href = visualizationHref(item);

  const title = document.createElement("h2");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  const thumbnailShell = document.createElement("div");
  thumbnailShell.className = "card-thumbnail-shell";
  thumbnailShell.setAttribute("aria-hidden", "true");

  const frames = (item.thumbnailFrames?.length
    ? item.thumbnailFrames
    : [{ src: item.thumbnail, duration: 3000 }]);

  const imageA = document.createElement("img");
  imageA.className = "card-thumbnail card-thumbnail-a is-visible";
  imageA.src = frames[0].src;
  imageA.alt = "";
  imageA.loading = "lazy";
  imageA.decoding = "async";
  imageA.width = 900;
  imageA.height = 540;

  const imageB = document.createElement("img");
  imageB.className = "card-thumbnail card-thumbnail-b";
  imageB.alt = "";
  imageB.loading = "lazy";
  imageB.decoding = "async";
  imageB.width = 900;
  imageB.height = 540;

  thumbnailShell.append(imageA, imageB);
  link.append(title, description, thumbnailShell);

  setupThumbnailRotation(link, frames, imageA, imageB);
  if (link._thumbnailRotator) thumbnailObserver.observe(link);
  return link;
}
