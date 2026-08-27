const initializeFlipCards = () => {
  document.querySelectorAll(".flip-card").forEach((card) => {
    const front = card.querySelector(".flip-card-front");
    const back = card.querySelector(".flip-card-back");

    if (!front || !back) {
      return;
    }

    const toggleCard = () => {
      const isFlipped = !card.classList.contains("is-flipped");

      card.classList.toggle("is-flipped", isFlipped);
      card.setAttribute("aria-pressed", String(isFlipped));
      front.setAttribute("aria-hidden", String(isFlipped));
      back.setAttribute("aria-hidden", String(!isFlipped));
    };

    card.addEventListener("click", toggleCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleCard();
      }
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeFlipCards, { once: true });
} else {
  initializeFlipCards();
}
