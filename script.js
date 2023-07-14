'use strict';

const containerHeight = 500;
const container = document.querySelector('.container');
let dimension = Number(prompt('Enter the number of squares'));

while (dimension > 100 || dimension === 0) {
  dimension = Number(prompt('Enter the number of squares'));
}

const gridCount = dimension ** 2;

const gridSize = containerHeight / dimension;

console.log(gridSize, gridCount, containerHeight);

for (let i = 0; i < gridCount; i++) {
  const grid = document.createElement('div');
  grid.classList.add('grids');
  grid.setAttribute('style', `width:${gridSize}px;height:${gridSize}px`);
  container.appendChild(grid);
}
