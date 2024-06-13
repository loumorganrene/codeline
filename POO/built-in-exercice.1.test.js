import { intersection } from './built-in-exercices';


/* - Ne pas modifier - */
describe("intersection", () => {

  test("test case 1", () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [1, 1, 1, 5, 5, 5];
    expect(intersection(arr1, arr2)).toEqual([1, 5]);
  });

  test("test case 2", () => {
    const arr1 = ["JS", 1, "Python", "Python"];
    const arr2 = ["JS", "JS", 3, 4];
    expect(intersection(arr1, arr2)).toEqual(["JS"]);
  });    
  
  test("test case 3", () => {
    const arr1 = [{}, false, 1];
    const arr2 = [false, 1, {}];

    expect(intersection(arr1, arr2)).toEqual([false, 1]);
  });

  test("test case 4", () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [10, 20, 30, 40, 50, 60];
    expect(intersection(arr1, arr2)).toEqual([]);
  });
});