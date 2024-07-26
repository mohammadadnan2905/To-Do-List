const newItem = document.getElementById("new-item");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");

function addItem() {
  const item = newItem.value;
  if (item === "") return;
  const li = document.createElement("li");
  li.innerText = item;
  li.addEventListener("click", completeItem);
  li.addEventListener("contextmenu", deleteItem);
  pendingList.appendChild(li);
  newItem.value = "";
}

function completeItem() {
  const li = this;
  li.removeEventListener("click", completeItem);
  li.addEventListener("click", uncompleteItem);
  li.style.textDecoration = "line-through";
  completedList.appendChild(li);
}

function uncompleteItem() {
  const li = this;
  li.removeEventListener("click", uncompleteItem);
  li.addEventListener("click", completeItem);
  li.style.textDecoration = "none";
  pendingList.appendChild(li);
}

function deleteItem(event) {
  event.preventDefault();
  const li = this;
  li.parentNode.removeChild(li);
}
