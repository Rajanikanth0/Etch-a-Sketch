function getDivs(count) {
  const squareBox = document.createDocumentFragment();

  for (let n = 1; n <= count; n++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square square" + n);

    squareBox.appendChild(square);
  }

  return squareBox;
}

const container = document.querySelector("#container");

const grid_rowSize = 16;
container.appendChild( getDivs(grid_rowSize * grid_rowSize) );

function hoverEffect(e) {
  if (e.target.classList[0] == 'square') {
    e.target.classList.add("square_hover");
  }
}
container.addEventListener("mouseover", hoverEffect);