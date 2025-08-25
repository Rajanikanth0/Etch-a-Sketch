const GRID_SIZE = 640;
const GRID_GAP = 0.5;

function getCells(grid_row_size) {
  const cell_count = grid_row_size * grid_row_size;
  const cell_size = (100 / grid_row_size) - GRID_GAP;
  const cell_container = document.createDocumentFragment();

  // generate cells
  for (let n = 1; n <= cell_count; n++) {
    const cell = document.createElement("div");
    cell.style.cssText = `width: ${cell_size}%; height: ${cell_size}%`;
    cell.setAttribute("class", "cell cell" + n);

    cell_container.appendChild(cell);
  }

  return cell_container;
}

const container = document.querySelector("#container");
const cells = getCells(16);
container.appendChild( cells );

// cell hover section
function hoverEffect(e) {
  if (e.target.classList[0] == 'cell') {
    e.target.classList.add("cell_hover");
  }
}
container.addEventListener("mouseover", hoverEffect);

// cell replacer
function replaceGrid() {
  const user_input = +prompt("Enter the size of a row or column");

  // Check for positive integer
  if (!user_input || user_input < 0) {
    throw new Error("Enter a valid positive integer");
  }

  // Remove previous grid
  container.innerHTML = "";

  const cells = getCells(user_input);
  container.appendChild( cells );
}

// button effects
const grid_sizeButton = document.querySelector("#grid_sizeButton");
grid_sizeButton.onclick = replaceGrid;