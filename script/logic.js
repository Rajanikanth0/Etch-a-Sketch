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
container.appendChild( getDivs(16) );