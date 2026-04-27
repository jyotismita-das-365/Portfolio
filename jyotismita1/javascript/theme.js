const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = toggleBtn?.querySelector(".material-symbols-outlined");

const syncThemeIcon = () => {
  if (!themeIcon) return;
  themeIcon.textContent = document.body.classList.contains("dark-mode")
    ? "light_mode"
    : "dark_mode";
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

syncThemeIcon();

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light",
    );
    syncThemeIcon();
  });
}
