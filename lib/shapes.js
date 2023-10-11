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

    render(){
        `<polygon points="150, 18 244, 182 56, 182" fill= ${this.shapeColor}/>`;
    };

}

class Circle extends Shape {
    constructor (text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render(){
        `<circle cx="150" cy="100" r="80" fill= ${this.shapeColor}/>`;
    };

}

class Square extends Shape {
    constructor (text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render(){
        `<rect x="10" y="10" width="80" height="80" fill= ${this.shapeColor}/>`;
    };
}

module.exports = {shapeTypes};