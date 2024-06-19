
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// let headNode = new ListNode(10);
// console.log({value: headNode.value, nextNode: headNode.next});
// headNode.next = new ListNode(20);
// console.log({value: headNode.value, nextNode: headNode.next});
// headNode.next.next = new ListNode(30);
// console.log({value: headNode.value, nextNode: headNode.next});

// while(headNode.next.next){
//   headNode = headNode.next
//   console.log(headNode.next)
// }

// headNode.next = null

// console.log(headNode)

class LinkedList { 
  constructor(node) {
    this.head = node;
  }

  add(node) {
    let headCopy = this.head
    //while the linked list has a next node
    //go to the next node until it's null
    while(headCopy.next){ 
      headCopy = headCopy.next
    }
    //if the linked list doesn't have a next node
    //add the node to the end of the list
    headCopy.next = new ListNode(node)
    return this
  }

  pop() {
    let headCopy = this.head
    //while the linked list has a next node with a next node
    //go to the next node with a null next
    while(headCopy.next.next){ 
      headCopy = headCopy.next
    }
    //if the linked list have a next node with a null next
    //set the next node to null
    headCopy.next = null
    return this
  }
}

const linkedList = new LinkedList(new ListNode(10))
linkedList.add(20).add(30).pop().add(5)
console.log({LIST_FINALE:linkedList.head, head: linkedList.head.next});