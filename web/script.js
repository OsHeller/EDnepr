const clampFontSize = (element) => {
  const maxSize = Number(element.dataset.maxSize) || 18;
  const minSize = Number(element.dataset.minSize) || 14;

  element.style.fontSize = `${maxSize}px`;

  // Reduce the font size until it fits into its container.
  while (element.scrollWidth > element.clientWidth && element.style.fontSize.replace("px", "") > minSize) {
    const nextSize = Number(element.style.fontSize.replace("px", "")) - 0.5;
    element.style.fontSize = `${Math.max(nextSize, minSize)}px`;
  }
};

const applyFioAutoSize = () => {
  document.querySelectorAll(".card__fio").forEach((node) => clampFontSize(node));
};

window.addEventListener("resize", applyFioAutoSize);
window.addEventListener("DOMContentLoaded", applyFioAutoSize);
