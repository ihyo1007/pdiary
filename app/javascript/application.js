document.addEventListener("turbo:load", () => {
  const likeButtons = document.querySelectorAll(".like-overlay-btn");

  likeButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.add("animate-like");

      setTimeout(() => {
        button.classList.remove("animate-like");
      }, 300);
    });
  });
});