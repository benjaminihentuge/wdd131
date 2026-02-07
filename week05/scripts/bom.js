// DOM references
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Initialize array from localStorage or empty array
let chaptersArray = getChapterList() || [];

// Display saved chapters when page loads
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

// Button click handler
button.addEventListener("click", () => {
  if (input.value !== "") {
    displayList(input.value); // display chapter
    chaptersArray.push(input.value); // add to array
    setChapterList(); // update localStorage
    input.value = ""; // clear input
    input.focus(); // refocus input
  }
});

// Function to display a chapter in the list
function displayList(item) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

// Save array to localStorage
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Get array from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// Remove chapter from array and localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // remove ❌
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
