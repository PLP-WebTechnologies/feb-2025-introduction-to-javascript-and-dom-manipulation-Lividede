function changeText() {
  document.getElementById("main-title").textContent = "You changed the title!";
}

function changeStyle() {
  const para = document.getElementById("highlight");
  para.style.backgroundColor = "lightblue";
  para.style.fontWeight = "bold";
}

function toggleElement() {
  const existing = document.getElementById("new-element");
  if (existing) {
    existing.remove();
  } else {
    const newEl = document.createElement("p");
    newEl.textContent = "I'm a dynamically added paragraph!";
    newEl.id = "new-element";
    document.body.appendChild(newEl);
  }
}
