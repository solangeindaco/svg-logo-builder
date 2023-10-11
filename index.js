// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const svgLogo = require('./lib/svgLogo');
const { writeFile } = fs.promises;

// TODO: Create an array of questions for user input
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
      type: 'input',
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

// Write SVG logo file
function writeToFile(fileName, data) {
  writeFile(fileName, svgLogo.generateLogo(data));
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
