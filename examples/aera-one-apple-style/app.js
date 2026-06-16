const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.16 },
);

revealItems.forEach((item) => revealObserver.observe(item));

const finishData = {
  silver: {
    name: "Lunar Silver",
    description:
      "Lunar Silver keeps the details visible and the form weightless.",
    image: "assets/aera-silver.png",
  },
  graphite: {
    name: "Graphite Black",
    description:
      "Graphite Black softens every reflection for a quieter presence.",
    image: "assets/aera-graphite.png",
  },
  blue: {
    name: "Ocean Blue",
    description:
      "Ocean Blue adds a deep, cool tone without competing with the form.",
    image: "assets/aera-blue.png",
  },
};

const finishProduct = document.querySelector(".finish-product");
const finishImage = document.querySelector("#finish-image");
const finishName = document.querySelector("#finish-name");
const finishDescription = document.querySelector("#finish-description");
const swatches = document.querySelectorAll(".swatch");

swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    const finish = swatch.dataset.finish;
    const data = finishData[finish];

    swatches.forEach((item) => {
      const active = item === swatch;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-checked", String(active));
    });

    finishProduct.dataset.finish = finish;
    finishName.textContent = data.name;
    finishDescription.textContent = data.description;
    finishImage.src = data.image;
    finishImage.alt = `Aera One headphones in ${data.name}`;
  });
});

const soundToggle = document.querySelector("#sound-toggle");
const soundStatus = document.querySelector("#sound-status");

soundToggle.addEventListener("click", () => {
  const active = soundToggle.classList.toggle("is-active");
  soundToggle.firstChild.textContent = active ? "Pause the idea " : "Hear the idea ";
  soundStatus.textContent = active
    ? "Spatial preview active: the field stays anchored as you move."
    : "Spatial preview paused.";
});

const orderButton = document.querySelector("#order-button");
const orderStatus = document.querySelector("#order-status");

orderButton.addEventListener("click", () => {
  orderStatus.textContent =
    "You're on the early-access list. This fictional demo did not submit data.";
});
