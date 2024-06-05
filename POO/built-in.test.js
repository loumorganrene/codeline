const { MySet } = require('./built-in.js');
/* - Ne pas modifier - */
describe("MySet", () => {

  test("has", () => {
    const set = new MySet(["pomme", "banane"]);
    expect(set.has("pomme")).toBe(true);
    expect(set.has("banane")).toBe(true);
    expect(set.has("fraise")).toBe(false);
  });

  test("add", () => {
    const set = new MySet(["pomme", "banane"]);
    set.add("fraise");
    expect(set.has("fraise")).toBe(true);
    set.add("fraise");
    expect(set._values).toEqual(["pomme", "banane", "fraise"]);
  });

  test("delete", () => {
    const set = new MySet(["pomme", "banane"]);
    set.delete("pomme");
    expect(set.has("pomme")).toBe(false);
    expect(set._values).toEqual(["banane"]);
  });

  test("clear", () => {
    const set = new MySet(["pomme", "banane", "fraise"]);
    set.clear();
    expect(set._values).toEqual([]);
  });

  test("size", () => {
    const set = new MySet(["pomme", "banane", "fraise"]);

    expect(set.size).toEqual(3)
  })

});