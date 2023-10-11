const logoWidth = 300;
const logoHeigth = 200;
const fontSize = 60;

function  generateLogo(text, textColor, shape, shapeColor){
    `<svg  xmlns="http://www.w3.org/2000/svg" width=${logoWidth} height=${logoHeigth}>
     <circle cx="50" cy="50" r="50" />
     <text x="150" y="125" font-size=${fontSize} text-anchor="middle" fill=${textColor}>${text}</text>
     </svg>`;
}

module.exports = {generateLogo};