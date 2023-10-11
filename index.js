// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const svgLogo = require('./lib/svgLogo');
const shapes = require('./lib/shapes');
const { writeFile } = fs.promises;

// Creates an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Please enter up to three characters for the Logo',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter the color of the text',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please select the shape for the logo',
      choices: shapes.shapeTypes,
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter the color of the shape',
    },
  ];

// Writes SVG logo file
function writeToFile(fileName, data) {
  const {text, textColor, shape, shapeColor} = data;
  writeFile(fileName, svgLogo.generateLogo(text, textColor, shape, shapeColor));
}

// Initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('./examples/logo.svg', answers))
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => console.error(err));
}

// Initialize app
init();
