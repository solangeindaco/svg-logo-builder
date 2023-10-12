const shapeTypes = [{name: 'Triangle', value: 'Triangle'}, {name: 'Circle', value: 'Circle'}, {name: 'Square', value: 'Square'}];

class Shape {
    constructor (color){
        this.color = color;
    }

    setColor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }

    render(){}
}

class Circle extends Shape {
    constructor (color){
        super(color);
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    };

}

class Square extends Shape {

    render(){
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}"/>`;
    };
}

class Triangle extends Shape {

    render(){
        return `<polygon points="150 20, 280 180, 20 180" fill="${this.color}"/>`;
    };
}

module.exports = {shapeTypes, Circle, Square, Triangle, Shape};