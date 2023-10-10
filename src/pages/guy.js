import React from 'react'
import MrGuy from '../guy.jpg'
function Guy() {
  let names = "3amy el rajl";
let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign = "center";
let hello = (names) => {
  let cards = document.createElement("div");
  let head = document.createElement("h2");
  let prgh = document.createElement("p");
  let image = document.createElement("img");

  let content = document.createTextNode(names);
  let pip = document.createTextNode("unknown");
  image.src = MrGuy;
  head.appendChild(content);
  prgh.appendChild(pip);

  cards.style.width = "200px";
  cards.style.background = "#444";
  cards.style.color = "#fa0";
  cards.style.padding = "10px";
  cards.style.borderTop = "4px solid #fa0";
  cards.style.margin = "2px";
  cards.style.display = "inline-block";

  image.style.width = "100%";
  cards.appendChild(head);
  cards.appendChild(prgh);
  cards.appendChild(image);
  container.appendChild(cards);
};
for (let i = 0; i < 10; i++) {
  hello(names);
}
  return (
    <div></div>
  )
}

export default Guy