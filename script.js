'use strict';

const containerHeight = 500;
const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset-grids');
const rainbowButton = document.querySelector('.rainbow-btn');
const defalutButton = document.querySelector('.default-btn');
const eraserButton = document.querySelector('.eraser-btn');
const colorPickerButton = document.getElementById('colorpicker');
console.log(colorPickerButton);

const eraserColor = `#ffeedb`;

let colorPicker;
let dimension = 16;
let grids;
let totalGrids = dimension ** 2;
let gridSize = containerHeight / dimension;
let rainbowMode = false;
let eraserMode = false;

const generateRandomColor = () => Math.trunc(Math.random() * 255 + 1);

const defaultTrail = function (i) {
  colorPicker = document.getElementById('colorpicker').value;
  grids[i].setAttribute(
    'style',
    `width:${gridSize}px;height:${gridSize}px;background-color: ${colorPicker}`
  );
};

const rainbowTrail = function (i) {
  const randomColor = `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`;
  grids[i].setAttribute(
    'style',
    `width:${gridSize}px;height:${gridSize}px;background-color: ${randomColor}`
  );
};

const eraseTrail = function (i) {
  grids[i].setAttribute(
    'style',
    `width:${gridSize}px;height:${gridSize}px;background-color: ${eraserColor}`
  );
};

const leaveTrail = function () {
  for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener('mouseover', function () {
      if (rainbowMode === true) {
        rainbowTrail(i);
      } else if (eraserMode === true) {
        eraseTrail(i);
      } else {
        defaultTrail(i);
      }
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
  leaveTrail();

  console.log(`TotalGrids: ${totalGrids}, GridSize: ${gridSize}px`);
};

//Erases grids by iterating over the nodelist
const removeGrids = function () {
  grids = document.querySelectorAll('.grids');
  for (let i = 0; i < grids.length; i++) {
    grids[i].remove();
  }
};

const resetGrids = function () {
  dimension = Number(prompt('Enter the dimension of the grid (1 to 50)'));
  while (dimension > 50 || dimension === 0) {
    dimension = Number(prompt('The dimension should be between 1 to 50'));
  }

  totalGrids = dimension ** 2;
  gridSize = containerHeight / dimension;
  removeGrids();
  drawGrids(dimension);
};

drawGrids(dimension); //Invoking function to create default 16x16 grid at the start

resetButton.addEventListener('click', resetGrids);

rainbowButton.addEventListener('click', function () {
  rainbowMode = rainbowMode === true ? false : true;
});

defalutButton.addEventListener('click', function () {
  rainbowMode = false;
  eraserMode = false;
});

eraserButton.addEventListener('click', function () {
  eraserMode = true;
  rainbowMode = false;
});

colorPickerButton.addEventListener('click', function () {
  rainbowMode = false;
  eraserMode = false;
});
