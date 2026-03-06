const themeToggle = document.getElementById("theme-toggle");
const THEME_KEY = "theme";

function applyTheme(theme) {
  const isLight = theme === "light";

  document.body.classList.toggle("light", isLight);

  if (themeToggle) {
    themeToggle.textContent = isLight ? "Modo escuro" : "Modo claro";
    themeToggle.setAttribute("aria-label", isLight ? "Ativar modo escuro" : "Ativar modo claro");
    themeToggle.setAttribute("aria-pressed", String(isLight));
  }
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

if (themeToggle) {
  applyTheme(getInitialTheme());

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light") ? "dark" : "light";

    applyTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  });
}
