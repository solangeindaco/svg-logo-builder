const colorNames = require ("./colorNames.json"); // return a array of a list of color names supported by the browsers

// check  whether a string is a valid hexadecimal number using Regular Expressions
function isValidHexadecimal(str){
    const regexp = /^[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}$/; // equal to new RegExp("^[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}$)
    return regexp.test(str);
  }
  
// Check whether a string is a valid color name
function isValidColorName(str){
    return colorNames.some( (element) => element.toLowerCase() === str.toLowerCase());
}

// Check wheather a string is a valid color name or an hexadecimal number
function isValidColorInput(str){
    return (isValidColorName(str) || isValidHexadecimal(str)) ? true 
        :'You need to provide a valid color name or an Hexadecimal number';
}

// Exports two functions: isValidColorInput and isValidHexadecimal
module.exports = {isValidColorInput, isValidHexadecimal};
