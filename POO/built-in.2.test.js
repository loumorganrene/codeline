const { MyMap } = require('./built-in.js');

/* - MyMap test - */
describe("MyMap", () => {

  test("set", () => {
    const map = new MyMap();
    map.set("fruit", "pomme");
    expect(map._values).toEqual({ fruit: "pomme" });
  });

  test("get", () => {
    const map = new MyMap();
    map.set("fruit", "pomme");
    expect(map.get("fruit")).toEqual("pomme");
    expect(map.get("animal")).toEqual(undefined);
  });

  test("has", () => {
    const map = new MyMap();
    map.set("fruit", "pomme");
    map.set("test", undefined);
    expect(map.has("fruit")).toBe(true);
    expect(map.has("test")).toBe(true);
    expect(map.has("animal")).toBe(false);
  });

  test("delete", () => {
    const map = new MyMap();
    map.set("fruit", "pomme");
    map.delete("fruit");
    expect(map.has("fruit")).toBe(false);
  });

  test("clear", () => {
    const map = new MyMap();
    map.set("fruit", "pomme");
    map.set("animal", "chat");
    map.clear();
    expect(map._values).toEqual({});
  });

  test("size", () => {
    const map = new MyMap();
    map.set("fruit", "pomme");
    map.set("animal", "chat");
    expect(map.size).toEqual(2);
  });

});