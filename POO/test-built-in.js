// let fruits = new Set();
// fruits.add('pomme');
// fruits.add('banane');


//   for (let fruit of fruits.values()) {
//     console.log({fruit});
//   }

//   fruits.forEach(fruit=>{
//     console.log(fruit + " miam")
//   })

let map = new Map();
map.set('fruit', 'pomme');
map.set('animal', 'chat');

// for (let key of map.keys()) {
//   console.log({key});
// }

// console.log({map: map.keys()});

// const map = new Map();

// const arrayKey1 = [];
// map.set(arrayKey1, "Mon array 1 !")

// console.log(map.get([]))

const set = new Set(map)
console.log(set)

const array = [...map]