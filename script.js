'use strict';

const containerHeight = 500;
const container = document.querySelector('.container');

let dimension = 16;

const gridCount = dimension ** 2;

const gridSize = containerHeight / dimension;

while (dimension > 50 || dimension === 0) {
  dimension = Number(prompt('The dimension should be between 1 to 100'));
}

console.log(`Total Squares: ${gridCount}, GridSize: ${gridSize}px`);

for (let i = 0; i < gridCount; i++) {
  const grid = document.createElement('div');
  grid.classList.add('grids');
  grid.setAttribute('style', `width:${gridSize}px;height:${gridSize}px`);
  container.appendChild(grid);
}

const grids = document.querySelectorAll('.grids');

//Change bg-color while mouse enters
for (let i = 0; i < grids.length; i++) {
  grids[i].addEventListener('mouseover', function () {
    grids[i].classList.add('hover-effect');
  });
}
