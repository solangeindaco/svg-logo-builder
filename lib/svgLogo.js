const shapes = require('./shapes.js');
const logoWidth = 300;
const logoHeigth = 200;
const fontSize = 60;
const shapePositionX = 150;
const shapePositionY = 125;
const textPositionX = 150;
const textPositionY = 125;


function  generateLogo(text, textColor, shape, shapeColor){
    let shapeObj;
    switch (shape) {
        case 'Circle': shapeObj = new shapes.Circle(shapeColor); break;
        case 'Square': shapeObj = new shapes.Square(shapeColor); break;
        default: shapeObj = new shapes.Triangle(shapeColor);
    }
    const logo = 
    `<svg  xmlns="http://www.w3.org/2000/svg" width="${logoWidth}" height="${logoHeigth}">
        ${shapeObj.render()}
        <text x="${textPositionX}" y="${textPositionY}" font-size="${fontSize}" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
        </svg>`;
    return logo;
}

module.exports = {generateLogo};