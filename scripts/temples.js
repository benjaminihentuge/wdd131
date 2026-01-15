const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// getdates.js
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById(
  "lastModified"
).textContent = `Last modified: ${document.lastModified}`;
document.title = "My Website";
