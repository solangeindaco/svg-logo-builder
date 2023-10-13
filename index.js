// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const svgLogo = require('./lib/svgLogo');
const shapes = require('./lib/shapes');
const { writeFile } = fs.promises;
const color = require('./lib/colors');

// Creates an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Please enter up to three characters for the Logo',
      validate: function (input) {
        if (input.length <= 3) {
          console.log;
          return true;
        }else{
          return 'You need to provide up to 3 characters';
        }
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter the color of the text',
      validate: input => color.isValidColorInput(input),
      default: "",
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
      default: "",
      validate: (input) => color.isValidColorInput(input),
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
