// Shapes is imported.
const shapes = require('./shapes.js');

// A testing for Circle is created.
describe('Circle', () => {
    // A test is created to check that render return a svg code to produce a Circle.
    describe('render', () => {
      it('should create a svg code to display an orange Circle', () => {
          const shape = new shapes.Circle();
          shape.setColor("red");
          expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
      });
    });
  });

  // A testing for Square is created.
describe('Square', () => {
    // A test is created to check that render return a svg code to produce a Square.
    describe('render', () => {
      it('should create a svg code to display an orange Square', () => {
          const shape = new shapes.Square();
          shape.setColor("green");
          expect(shape.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="green"/>');
      });
    });
  });

// A testing for Triangle is created.
describe('Triangle', () => {
  // A test is created to check that render return a svg code to produce a Triangle.
  describe('render', () => {
    it('should create a svg code to display an orange Triangle', () => {
        const shape = new shapes.Triangle();
        shape.setColor("orange");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="orange"/>');
    });
  });
});
