const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent =
  `Last Modified: ${lastModifiedDate}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April 6",
    area: 253015,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August 24",
    area: 14761,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg",
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March 10",
    area: 40000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
  },
];

function displayTemples(templeArray) {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.innerHTML = "";

  templeArray.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
    <figure>

         <figcaption>
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
        <img 
            src="${temple.imageUrl}" 
            alt="${temple.templeName}" 
            loading="lazy"
            width="400"
            height="250"
        >
       
    </figure>
`;

    gridContainer.appendChild(card);
  });
}

document.querySelector(".navigation").addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "A") {
    event.preventDefault();
    const filterType = target.textContent;

    switch (filterType) {
      case "Old":
        displayTemples(
          temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() < 1900,
          ),
        );
        break;
      case "New":
        displayTemples(
          temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() > 2000,
          ),
        );
        break;
      case "Large":
        displayTemples(temples.filter((temple) => temple.area > 90000));
        break;
      case "Small":
        displayTemples(temples.filter((temple) => temple.area < 10000));
        break;
      case "Home":
        displayTemples(temples);
        break;
      default:
        break;
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
});
