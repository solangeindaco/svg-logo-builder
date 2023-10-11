// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const shapes;
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
      choices: shapes,
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter the color of the shape',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, generateMarkdown.generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('./examples/logo.svg', answers))
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();