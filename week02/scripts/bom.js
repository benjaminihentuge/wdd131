const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const userlist = document.querySelector("ul");

function processItem(event) {
  event.preventDefault();

  const value = input.value.trim();
  if (value === "") return;

  const list = document.createElement("li");
  list.textContent = value;
  userlist.append(list);

  const dltbtn = document.createElement("button");
  dltbtn.textContent = "❌";
  list.appendChild(dltbtn);

  input.focus();

  dltbtn.addEventListener("click", function () {
    list.remove(list);
    input.focus();
  });
}

button.addEventListener("click", processItem);
