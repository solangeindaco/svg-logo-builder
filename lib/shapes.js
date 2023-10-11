const shapeTypes = ['Triangle', 'Circle', 'Square'];

class Shape {
    constructor (text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render(){

    };
}

class Triangle extends Shape {
    constructor (text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

}

class Circle extends Shape {
    constructor (text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

}

class Square extends Shape {
    constructor (text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
}

module.exports = {shapeTypes};