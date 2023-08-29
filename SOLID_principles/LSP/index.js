// we need to get rectangle and sequre area and we need to set color for both.

class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor(color) {
    return (this.color = color);
  }
  getColor() {
    return this.color;
  }
}

class Rectangle extends Shape {
  constructor(color) {
    super(color);
  }
  setWidth(width) {
    this.width = width;
    return this;
  }
  setHeight(height) {
    this.height = height;
    return this;
  }
  getArea() {
    document.getElementById("rectangle").innerHTML = `The area of rectangle: ${
      this.width * this.height
    }`;
  }
}

class Sequre extends Shape {
  constructor(color) {
    super(color);
  }
  setSide(side) {
    this.side = side;
    return this;
  }
  getArea() {
    document.getElementById("sequre").innerHTML = `The area of sequre: ${
      this.side * 2
    }, and color: ${sequre.color}`;
  }
}

//shape color
const shape = new Shape();
shape.setColor("Yellow");
console.log(shape.getColor(), "Shape");

//regtangle area
const rectangle = new Rectangle("Green");
rectangle.setWidth(10).setHeight(4).getArea();
console.log(rectangle.getColor(), "Rectangle");

//sequre area
const sequre = new Sequre('Pink');
sequre.setSide(4).getArea();
sequre.setColor("Red");
console.log(sequre.getColor(), "Sequre");
console.log(sequre)
