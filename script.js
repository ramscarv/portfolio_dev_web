const toggleButton = document.getElementById("switch");
const root = document.documentElement;

toggleButton.addEventListener("click", () => {
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    toggleButton.setAttribute("data-mode", "light");
  } else {
    root.classList.add("dark");
    toggleButton.setAttribute("data-mode", "dark");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  root.classList.add("dark");
});