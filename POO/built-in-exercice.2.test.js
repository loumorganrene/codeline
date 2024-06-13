import { twoSum } from './built-in-exercices';
/* - Ne pas modifier - */
describe("twoSum", () => {

  test("test case 1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  test("test case 2", () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });    
  
  test("test case 3", () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  test("test case 4", () => {
    const arr1 = [27, 11, 15, 2];
    const target = 42;

    expect(twoSum(arr1, target)).toEqual([0, 2]);
  });
});