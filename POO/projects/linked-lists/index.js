
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

    if(nodeIndex <= index) {
      return this
    }

    if(this.head.next && nodeIndex === index + 1) {
        this.head = headCopy.next
        return this
    }
    //while the linked list has a next node and nodeIndex is inférior to nodeIndex - 1
    //go to next link and increment index
    while(headCopy.next && nodeIndex >= index + 2){
      headCopy = headCopy.next
      index++
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

    while(headCopy){ 
      console.log(`${headCopy.value} -> `)
      headCopy = headCopy.next
    }
    console.log(`NULL`)
  }
}

const linkedList = new LinkedList(new ListNode(10))
linkedList.add(20).add(30).add(5).delete(0).displayList()
// console.log({LIST:linkedList.head, head: linkedList.head.next.next});
// linkedList.delete(0).displayList()
// console.log({LIST_FINALE:linkedList.head, head: linkedList.head.next.next});