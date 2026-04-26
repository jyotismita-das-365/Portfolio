const toggleBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});