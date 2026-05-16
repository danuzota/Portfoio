const projectsCardWrapper = document.querySelector(".projects__card-wrapper");
let projectsCards = [];
let cardIndex = 0;

function showNextCard() {
  if (!projectsCards || projectsCards.length === 0) return;
  projectsCards.forEach((item) => (item.style.display = "none"));
  projectsCards[cardIndex].style.display = "block";
  cardIndex = (cardIndex + 1) % projectsCards.length;
}

if (projectsCardWrapper) {
  projectsCards = projectsCardWrapper.querySelectorAll(".projects__card");
  setInterval(showNextCard, 3000);
  showNextCard();
}

const menuIcon = document.querySelector(".menu__icon");
const header = document.querySelector(".header");

if (menuIcon && header) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("menu__icon--active");
    header.classList.toggle("header__mobile");
  });
}
