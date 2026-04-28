const toggleButtons = [
  ...document.querySelectorAll("#theme-toggle, [data-theme-toggle]"),
];

const syncThemeIcon = () => {
  const isDark = document.body.classList.contains("dark-mode");
  toggleButtons.forEach((button) => {
    button.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
    button.setAttribute(
      "title",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
    const icon = button.querySelector(".material-symbols-outlined");
    if (icon) {
      icon.textContent = isDark ? "light_mode" : "dark_mode";
    }
  });
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

syncThemeIcon();

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light",
    );
    syncThemeIcon();
  });
});
