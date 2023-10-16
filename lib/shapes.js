const colors = require('./colors.js');
const shapeTypes = [{name: 'Triangle', value: 'Triangle'}, {name: 'Circle', value: 'Circle'}, {name: 'Square', value: 'Square'}];

// Definition of Parent class Shape
class Shape {
    constructor (color){
        this.setColor(color);
    }

    setColor(color){
        this.color = (colors.isValidHexadecimal(color)) ? `#${color}` : color;
    }

    getColor(){
        return this.color;
    }

    render(){}
}

// Definition of the class Circle that inherence from Shape class
class Circle extends Shape {
    constructor (color){
        super(color);
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    };

}

// Definition of the class Square that inherence from Shape class
class Square extends Shape {

    render(){
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}"/>`;
    };
}

// Definition of the class Triangle that inherence from Shape class
class Triangle extends Shape {

    render(){
        return `<polygon points="150 10, 270 190, 30 190" fill="${this.color}"/>`;
    };
}

module.exports = {shapeTypes, Circle, Square, Triangle, Shape};