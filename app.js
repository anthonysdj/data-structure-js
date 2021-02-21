const LinkedList = require("./linked-list/linked-list");

const list = new LinkedList

// list.insert(40)
// list.insert(30)
// list.insert(20)
// list.insert(10)

list.fromValues(10, 20, 30, 40)
list.print()
list.deleteHead()
list.print()
list.insertAtIndex(0,10)
list.print()
list.deleteAtIndex(0)
list.print()