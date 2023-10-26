const list = document.getElementById("list");
const form = document.querySelector("form");
const input = document.querySelector("input");
const small = document.querySelector("small");

function addItem(text) {
  const item = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = "delete";
  button.setAttribute("id", "delete");
  item.textContent = text;
  item.classList.add("item");
  item.appendChild(button);
  list.appendChild(item);
}

function alert(massege) {
  small.classList.remove("hidden");
  small.textContent = massege;
  setTimeout(() => {
    small.classList.add("hidden");
  }, 3000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim().length == 0) {
    alert("iltimos nimadur yozing 🤷‍♂️");
  } else if (input.value.trim().length <= 4) {
    alert("iltimos 4 dan koproq text yozing 🤷‍♂️");
  } else {
    addItem(input.value);
    input.value = "";
  }
});
document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id" === "delete")) {
    e.target.parentElement.remove();
  }
});
small.style.color = "red";
small.style.marginBottom = "30px";
small.style.fontSize = "20px";
small.style.fontFamily = "San-serif";
