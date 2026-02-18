const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const catalogue = [
  // ================= CREEPE =================
  {
    title: "Creepe Short Sleeve Shirt",
    material: "Creepe",
    type: "Short Sleeve",
    category: "Men",
    imageUrl: "images/crepe-shirt-large.webp",
  },
  {
    title: "Creepe Matching Set",
    material: "Creepe",
    type: "Matching Set",
    category: "Unisex",
    imageUrl: "images/crepe-set-large.webp",
  },
  {
    title: "Creepe Pants",
    material: "Creepe",
    type: "Pants",
    category: "Men",
    imageUrl: "images/crepe-pants-large.webp",
  },
  {
    title: "Creepe Long Sleeve Shirt",
    material: "Creepe",
    type: "Long Sleeve",
    category: "Men",
    imageUrl: "images/crepe-lshirt-large.webp",
  },
  {
    title: "Creepe Dress",
    material: "Creepe",
    type: "Dress",
    category: "Women",
    imageUrl: "images/crepe-dress-large.webp",
  },

  // ================= LINEN =================
  {
    title: "Linen Shirt",
    material: "Linen",
    type: "Shirt",
    category: "Men",
    imageUrl: "images/linen-shirt-large.webp",
  },
  {
    title: "Linen Matching Set",
    material: "Linen",
    type: "Matching Set",
    category: "Unisex",
    imageUrl: "images/men-large.webp",
  },
  {
    title: "Linen Pants",
    material: "Linen",
    type: "Pants",
    category: "Men",
    imageUrl: "images/linen-pants-large.webp",
  },
  {
    title: "Linen Long Sleeve Shirt",
    material: "Linen",
    type: "Long Sleeve",
    category: "Men",
    imageUrl: "images/linen-lsleeve-large.webp",
  },
  {
    title: "Linen Dress",
    material: "Linen",
    type: "Dress",
    category: "Women",
    imageUrl: "images/linen-dress-large.webp",
  },

  // ================= CORDUROY =================
  {
    title: "Corduroy Shirt",
    material: "Corduroy",
    type: "Shirt",
    category: "Men",
    imageUrl: "images/corduroy-sshirt-large.webp",
  },
  {
    title: "Corduroy Matching Set",
    material: "Corduroy",
    type: "Matching Set",
    category: "Unisex",
    imageUrl: "images/corduroy-set-large.webp",
  },
  {
    title: "Corduroy Pants",
    material: "Corduroy",
    type: "Pants",
    category: "Men",
    imageUrl: "images/corduroy-pant-large.webp",
  },
  {
    title: "Corduroy Long Sleeve Shirt",
    material: "Corduroy",
    type: "Long Sleeve",
    category: "Men",
    imageUrl: "images/corduroy-shirt-large.webp",
  },

  // ================= SWEATS =================
  {
    title: "Sweats Shirt",
    material: "Sweats",
    type: "Shirt",
    category: "Unisex",
    imageUrl: "images/sweat-shirt-large.webp",
  },
  {
    title: "Sweats Matching Set",
    material: "Sweats",
    type: "Matching Set",
    category: "Unisex",
    imageUrl: "images/sweat-set-large.webp",
  },
  {
    title: "Sweats Pants",
    material: "Sweats",
    type: "Pants",
    category: "Unisex",
    imageUrl: "images/sweat-pant-large.webp",
  },
  {
    title: "Sweats Long Sleeve Shirt",
    material: "Sweats",
    type: "Long Sleeve",
    category: "Unisex",
    imageUrl: "images/sweat-sshirt-large.webp",
  },

  // ================= ANKARA =================
  {
    title: "Ankara Shirt",
    material: "Ankara",
    type: "Shirt",
    category: "Men",
    imageUrl: "images/ankara-shirt-large.webp",
  },
  {
    title: "Ankara Matching Set",
    material: "Ankara",
    type: "Matching Set",
    category: "Unisex",
    imageUrl: "images/ankara-set-large.webp",
  },
  {
    title: "Ankara Pants",
    material: "Ankara",
    type: "Pants",
    category: "Men",
    imageUrl: "images/ankara-pants-large.webp",
  },
  {
    title: "Ankara Long Sleeve Shirt",
    material: "Ankara",
    type: "Long Sleeve",
    category: "Men",
    imageUrl: "images/ankara-sshirt-large.webp",
  },
  {
    title: "Ankara Dress",
    material: "Ankara",
    type: "Dress",
    category: "Women",
    imageUrl: "images/ankara-dress-large.webp",
  },
  // ================= FABRIC =================
  {
    title: "Linen ",
    material: "Linen",
    type: "Linen",
    category: "Fabric",
    imageUrl: "images/fabric-large.webp",
  },
  {
    title: "Corduroy ",
    material: "Corduroy",
    type: "Corduroy",
    category: "Fabric",
    imageUrl: "images/corduroy-fabric-large.webp",
  },
  {
    title: "Crepe",
    material: "Crepe",
    type: "Crepe",
    category: "Fabric",
    imageUrl: "images/crepe-fabric-large.webp",
  },
  {
    title: "Twill ",
    material: "Twill",
    type: "Twill",
    category: "Fabric",
    imageUrl: "images/twill-fabric-large.webp",
  },
];

const gridContainer = document.querySelector(".grid-container");
const filterButtons = document.querySelectorAll(".filter-buttons button");

function displayCatalogue(items) {
  gridContainer.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("catalogue-card");

    card.innerHTML = `
      <figure>
        <img 
          src="${item.imageUrl}" 
          alt="${item.title}" 
          width="384"
          height="484"
          loading="lazy"
        />
        <figcaption>
          <h2>${item.title}</h2>
          <p>${item.category}</p>
        </figcaption>
      </figure>
    `;

    gridContainer.appendChild(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Active button styling
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    if (filter === "All") {
      displayCatalogue(catalogue);
    } else {
      const filteredItems = catalogue.filter(
        (item) => item.category === filter,
      );
      displayCatalogue(filteredItems);
    }
  });
});

// Load all designs on page load
document.addEventListener("DOMContentLoaded", () => {
  displayCatalogue(catalogue);
});
