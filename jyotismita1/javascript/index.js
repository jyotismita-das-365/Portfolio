const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("main-navbar");
const navLinks = document.querySelectorAll(".nav-link");
const menuIcon = menuToggle?.querySelector(".material-symbols-outlined");

const setMenuState = (isOpen) => {
  if (!navbar || !menuToggle) return;
  navbar.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  if (menuIcon) {
    menuIcon.textContent = isOpen ? "close" : "menu";
  }
};

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !navbar.classList.contains("open");
    setMenuState(isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        setMenuState(false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      setMenuState(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (
      window.innerWidth <= 900 &&
      navbar.classList.contains("open") &&
      !navbar.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  setMenuState(false);
}

const clickableProjectCards = document.querySelectorAll(
  ".project-card[data-href]",
);

clickableProjectCards.forEach((card) => {
  card.setAttribute("role", "link");
  card.setAttribute("tabindex", "0");

  const navigateFromCard = () => {
    const target = card.getAttribute("data-href");
    if (target) {
      window.location.href = target;
    }
  };

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    navigateFromCard();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigateFromCard();
    }
  });
});
