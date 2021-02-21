class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.length++;
    }

    insertAtIndex(index, data) {
        if (index === 0) return this.insert(data);
        const prevNode = this.getByIndex(index - 1);
        if (!prevNode) return null;
        prevNode.next = new Node(data, prevNode.next);
        this.length++;
    }

    fromValues(...values) {
        for (let index = values.length - 1; index >= 0; index--) {
            this.insert(values[index]);
        }
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null;

        let head = this.head;

        for (let i = 0; i < index; i++) {
            head = head.next;
        }

        return head;
    }

    deleteHead() {
        this.head = this.head.next;
        this.length--;
    }

    deleteAtIndex(index) {
        // if (index < 0 || index >= this.length) return null;

        if (index === 0) return this.deleteHead();

        const prevNode = this.getByIndex(index - 1);
        if (!prevNode) return null;

        prevNode.next = prevNode.next.next;
        this.length--;
    }

    print() {
        let output = "";
        let current = this.head;

        // for (let index = 0; index < this.length; index++) {
        //     output = `${output}${current.data} -> `
        //     current = current.next;
        // }

        while (current) {
            output = `${output}${current.data} -> `;
            current = current.next;
        }

        console.log(`${output}null`);
    }
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

module.exports = LinkedList;
