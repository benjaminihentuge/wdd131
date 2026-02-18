const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const catalogue = document.querySelector(".cta-button");

catalogue.addEventListener("click", () => {
  window.location.href = "catalogue.html";
});

const categories = [
  {
    categoryName: "Men",
    description: "Trendy and classic styles for men",
    imageUrl: "images/men-large.webp",
  },
  {
    categoryName: "Women",
    description: "Chic and elegant outfits for women",
    imageUrl: "images/women-large.webp",
  },
  {
    categoryName: "Fabric",
    description: "Linen, Ankara, Corduroy, and more.",
    imageUrl: "images/fabric-large.webp",
  },
];

function displayCategories(categoryArray) {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.innerHTML = "";

  categoryArray.forEach((category) => {
    const card = document.createElement("div");
    card.classList.add("category-card");

    card.innerHTML = `
      <figure>
        <figcaption>
          <h2>${category.categoryName}</h2>
          
        </figcaption>
        <img 
          src="${category.imageUrl}" 
          alt="${category.categoryName}" 
          loading="lazy"
          width="400"
          height="600"
        >
        <h2>${category.description}</h2>
      </figure>
    `;

    gridContainer.appendChild(card);
  });
}

// Display all categories on page load
document.addEventListener("DOMContentLoaded", () => {
  displayCategories(categories);
});
