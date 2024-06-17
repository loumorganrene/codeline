export function intersection(arr1, arr2) {
  // TODO
  let uniArr1 = new Set(arr1)
  let uniArr2 = new Set(arr2)
  let uniArr = []
  uniArr1.forEach(element => {
    if (uniArr2.has(element)) {
      uniArr.push(element)
    }
  })

  return uniArr
}

export const twoSum = (nums, target) => {
  // 🦁 Code ici
  let numsMap = new Map(nums)



  return console.log(numsMap)
}