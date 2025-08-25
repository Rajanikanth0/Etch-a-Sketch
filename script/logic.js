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
  function getRandomHex() {
    const raw_hex = Math.floor(Math.random() * 0xffffff)
    const hex = "#" + raw_hex.toString(16).padStart(6, '0');

    return hex;
  }

  const target = e.target;

  if (target.classList[0] == 'cell') {
    const target_bgColor = target.style.backgroundColor;

    // set initial color
    if (!target_bgColor) {
      target.style.backgroundColor = getRandomHex();
      target.style.opacity = "0.1";
      return;
    }

    // increase opacity
    const next_opacity = (+target.style.opacity + 0.1) % 1;
    target.style.opacity = next_opacity.toFixed(1);

    // reset box style if opacity is 0
    if (!+target.style.opacity) {
      target.style.opacity = 1;
      target.style.backgroundColor = "";
    }
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