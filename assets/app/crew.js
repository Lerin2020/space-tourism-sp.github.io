const buttons = document.querySelectorAll(".button");
const buttonList = [...buttons];
const image = document.querySelector(".crew-image");
const title = document.querySelector(".title");
const fullName = document.querySelector(".full");
const description = document.querySelector(".description");
window.addEventListener("DOMContentLoaded", () => {
  description.style.opacity = "1";
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    Animation();
  });
});

function Animation() {
  setTimeout(() => {
    description.style.opacity = "0";
    description.style.transform = 'translateY(2vw)'
    image.style.opacity = "0";
    image.style.transform = 'translateY(2vw)'
    fullName.style.opacity = "0"
    fullName.style.transform = 'translateY(2vw)'
    title.style.opacity = "0";
    title.style.transform = 'translateY(2vw)'
  }, 0);
  setTimeout(() => {
    description.style.opacity = "1";
    description.style.transform = ''
    image.style.transform = ''
    image.style.opacity = '1'
    image.style.transform = ''
    fullName.style.opacity ='1'
    fullName.style.transform = ''
    title.style.opacity = '1'
    title.style.transform = ''
  }, 500);
}
buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    updateSelection(index, e);
    if (buttonList[0].classList.contains("active")) {
      setTimeout(() => {
        image.src = "./assets/crew/image-douglas-hurley.png";
        title.textContent = "Commander";
        fullName.textContent = "Douglas Hurley";
        description.textContent =
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
      }, 250);
    } else if (buttonList[1].classList.contains("active")) {
      setTimeout(() => {
        image.src = "./assets/crew/image-mark-shuttleworth.png";
        title.textContent = "Mission Specialist";
        fullName.textContent = "Mark Shuttleworth";
        description.textContent =
          "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
      }, 250);
    } else if (buttonList[2].classList.contains("active")) {
      setTimeout(() => {
        image.src = "./assets/crew/image-victor-glover.png";
        title.textContent = "Pilot";
        fullName.textContent = "Victor Glover";
        description.textContent =
          "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
      }, 250);
    } else if (buttonList[3].classList.contains("active")) {
      setTimeout(() => {
        image.src = "./assets/crew/image-anousheh-ansari.png";
        title.textContent = "Flight Engineer";
        fullName.textContent = "Anousheh Ansari";
        description.textContent =
          "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
      }, 250);
    } else {
      image.src = "./assets/crew/image-douglas-hurley.png";
    }
  });
});

function updateSelection(index, e) {
  buttons.forEach((button, i) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      e.target.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
