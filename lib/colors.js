const colorNames = require ("./colorNames.json");

function isValidHexadecimal(str){
    const regexp = /^[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}$/; // equal to new RegExp("^[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}$)
    return regexp.test(str);
  }
  
function isValidColorName(str){
    return colorNames.some( (element) => element.toLowerCase() === str.toLowerCase());
}

function isValidColorInput(str){
    return (isValidColorName(str) || isValidHexadecimal(str)) ? true 
        :'You need to provide a valid color name or an Hexadecimal number';
}

module.exports = {isValidColorInput, isValidHexadecimal};
