
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

  delete(nodeIndex){
    let headCopy = this.head
    let index = 0
    //while the linked list has a next node and nodeIndex is inférior to nodeIndex - 1
    //go to next link and increment index
    while(headCopy.next && index < nodeIndex){ 
      headCopy = headCopy.next
      index++
    }

    if(!headCopy?.next?.next) {
      headCopy.next = null
      return 
    }
    //if the linked list has a next node and nodeIndex is inférior to nodeIndex - 1
    //replace deleted node value & next node with next node value & next
    headCopy.next = headCopy.next.next 

    return this
  }

  displayList() {
    let headCopy = this.head

    //while the linked list has a next node with a next node
    //go to the next node with a null next
    console.log(`${headCopy.value} ->`)
    while(headCopy.next.next){ 
      headCopy = headCopy.next
      console.log(`${headCopy.value} ->`)
    }
    console.log(`${headCopy.next.value} ->`)
    return this
  }
}

const linkedList = new LinkedList(new ListNode(10))
// linkedList.add(20).add(30).add(5).displayList()
// console.log({LIST:linkedList.head, head: linkedList.head.next.next});
linkedList.delete(0)?.displayList()
// console.log({LIST_FINALE:linkedList.head, head: linkedList.head.next.next});