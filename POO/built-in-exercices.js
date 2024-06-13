function intersection(arr1, arr2) {
  // TODO
  let uniqueArray = new Set()

  arr1.forEach(element => {
    arr2.includes(element) && uniqueArray.add(element)
  });

  return Array.from(uniqueArray)
}

const twoSum = (nums, target) => {
  // 🦁 Code ici
  let numsMap = new Map(nums)



  return console.log(numsMap)
}

module.exports = { intersection, twoSum }