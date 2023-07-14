'use strict';

const containerHeight = 500;
const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset-grids');

let dimension = 16;

let grids;

let totalGrids = dimension ** 2;

let gridSize = containerHeight / dimension;

//Hover Effect Function
const leaveTrail = function () {
  for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener('mouseover', function () {
      grids[i].classList.add('hover-effect');
    });
  }
};

const drawGrids = function (dimension) {
  for (let i = 0; i < totalGrids; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grids');
    grid.setAttribute('style', `width:${gridSize}px;height:${gridSize}px`);
    container.appendChild(grid);
  }

  grids = document.querySelectorAll('.grids');
  leaveTrial();

  console.log(`TotalGrids: ${totalGrids}, GridSize: ${gridSize}px`);
};

//Erases grids by iterating over the nodelist
const eraseGrids = function () {
  grids = document.querySelectorAll('.grids');
  for (let i = 0; i < grids.length; i++) {
    grids[i].remove();
  }
};

drawGrids(dimension); //Invoking function to create default 16x16 grid at the start

resetButton.addEventListener('click', function () {
  dimension = Number(prompt('Enter the dimension of the grid'));
  while (dimension > 50 || dimension === 0) {
    dimension = Number(prompt('The dimension should be between 1 to 50'));
  }

  totalGrids = dimension ** 2;
  gridSize = containerHeight / dimension;
  eraseGrids();
  drawGrids(dimension);
});
