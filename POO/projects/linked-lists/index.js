class Nodee {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

const firstNode = new Nodee(7);
firstNode.nextNode = new Nodee(8);
console.log(firstNode);

class LinkedList { 
  constructor() {
    this.head = null;
  }

  add(value) {
    return new Nodee(value)
  }
  pop(){

  }

  delete(index){

  }

  insertAt(index, node){

  }

  find(value){
    return
  }
  
  get count(){
    return
  }

  get displayList(){
    return
  }
}