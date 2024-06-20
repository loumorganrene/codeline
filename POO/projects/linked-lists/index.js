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

    while (headCopy.next) {
      headCopy = headCopy.next
    }

    headCopy.next = new ListNode(node)
    return this
  }

  pop() {
    let headCopy = this.head

    while (headCopy.next.next) {
      headCopy = headCopy.next
    }

    headCopy.next = null
    return this
  }

  delete(nodeIndex) {
    let headCopy = this.head
    let index = 0

    if (nodeIndex <= index) {
      return this
    }

    if (this.head.next && nodeIndex === index + 1) {
      this.head = headCopy.next
      return this
    }

    while (headCopy.next && index < nodeIndex - 2) {
      headCopy = headCopy.next
      index++
    }

    headCopy.next = headCopy.next.next
    return this
  }

  insertAt(nodeIndex, node) {
    let headCopy = this.head
    let newNode = new ListNode(node)
    let index = 0

    if (nodeIndex <= index) {
      return this
    }

    if (this.head.next && nodeIndex === index + 1) {
      let newNode = new ListNode(node)
      this.head = newNode
      this.head.next = headCopy
      return this
    }

    while (headCopy.next && index < nodeIndex - 2) {
      headCopy = headCopy.next
      index++
    }

    const spliceNodes = headCopy.next
    headCopy.next = newNode
    newNode.next = spliceNodes

    return this
  }

  get count() {
    let headCopy = this.head
    let nodeCount = 0

    while (headCopy) {
      headCopy = headCopy.next
      nodeCount++
    }

    return console.log(`${nodeCount}`)
  }

  find(value) {
    let headCopy = this.head

    while (headCopy.next && headCopy.value !== value ) {
      headCopy = headCopy.next
    }

    return new LinkedList(headCopy)
  }

  displayList() {
    let headCopy = this.head

    while (headCopy) {
      console.log(`${headCopy.value} -> `)
      headCopy = headCopy.next
    }
    console.log(`NULL`)
  }
}

const linkedList = new LinkedList(new ListNode(10))
linkedList.add(20).add(30).add(5).insertAt(3, 77).displayList()
linkedList.find(30).insertAt(2, 4).displayList()
// console.log({LIST:linkedList.head, head: linkedList.head.next.next});