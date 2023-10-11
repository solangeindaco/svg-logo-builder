const shapeTypes = [{name: 'Triangle', value: 'Triangle'}, {name: 'Circle', value: 'Circle'}, {name: 'Square', value: 'Square'}];

class Shape {
    constructor (shapeColor){
        this.shapeColor = shapeColor;
    }

    render(){
    };
}

class Circle extends Shape {
    constructor (shapeColor){
        super(shapeColor);
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    };

}

class Square extends Shape {
    constructor (shapeColor){
        super(shapeColor);
    }

    render(){
        return `<rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}"/>`;
    };
}

class Triangle extends Shape {
    constructor (shapeColor){
        super(shapeColor);
    }

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
    };
}

module.exports = {shapeTypes, Circle, Square, Triangle};