const shapeTypes = [{name: 'Triangle', value: 'Triangle'}, {name: 'Circle', value: 'Circle'}, {name: 'Square', value: 'Square'}];

class Shape {
    constructor (color){
        this.color = color;
    }

    setColor(color){
        this.color = color;
    }

    getColor(color){
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
    constructor (color){
        super(color);
    }

    render(){
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}"/>`;
    };
}

class Triangle extends Shape {

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    };
}

module.exports = {shapeTypes, Circle, Square, Triangle};