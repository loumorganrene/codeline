class Shape {
  constructor(name) {
    this.name= name;
  }

  getName(){
    return this.name
  }

  getPerimeter(){
    throw new Error('Undefined shape')
  }

  getArea(){
    throw new Error('Undefined shape')
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width= width;
    this.height= height;
  }

  getPerimeter(){
    return 2 * (this.width + this.height)
  }

  getArea(){
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius= radius;
  }

  getPerimeter(){
    return 2 * Math.PI * this.radius
  }

  getArea(){
    return Math.PI * this.radius * this.radius
  }
}

module.exports = { Shape, Rectangle, Circle };
