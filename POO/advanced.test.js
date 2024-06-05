const { Shape, Rectangle, Circle } = require('./advanced-1.js');
/* - Ne pas modifier - */
describe("Extends test", () => {
  it("should return the correct area", () => {
    const rectangle = new Rectangle(10, 20);
    const circle = new Circle(10);

    expect(rectangle.getArea()).toBe(200);
    expect(circle.getArea()).toBe(314.1592653589793);
  });

  it("should return the correct perimeter", () => {
    const rectangle = new Rectangle(10, 20);
    const circle = new Circle(10);

    expect(rectangle.getPerimeter()).toBe(60);
    expect(circle.getPerimeter()).toBe(62.83185307179586);
  });

  it("should return the correct name", () => {
    const rectangle = new Rectangle(10, 20);
    const circle = new Circle(10);

    expect(rectangle.getName()).toBe("Rectangle");
    expect(circle.getName()).toBe("Circle");
  });
});