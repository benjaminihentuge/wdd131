let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#count").textContent = reviewCount;
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  `Last modified: ${document.lastModified}`;
