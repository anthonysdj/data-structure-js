const LinkedList = require("./linked-list")

describe('#insert', () => {
    test('Insert data in the beginning of the list', () => {
        const list = new LinkedList
        list.insert(100)
        const oldHead = list.head
        list.insert(200)

        expect(list.head.data).toBe(200)
        expect(list.head.next).toBe(oldHead)
        expect(list.length).toBe(2)
    })
})

describe('#fromValues', () => {
    test('Insert data using multiple values', () => {
        const list = new LinkedList
        list.fromValues(200, 100)

        expect(list.head.data).toBe(200)
        expect(list.head.next.data).toBe(100)
    })
})

describe('#getByIndex', () => {
    describe('With index less than zero', () => {
        test('should return null', () => {
            const list = new LinkedList
            list.fromValues(200, 100)
            expect(list.getByIndex(-1)).toBeNull()
        })
    })

    describe('With index greater than list length', () => {
        test('should return null', () => {
            const list = new LinkedList
            list.fromValues(200,100)
            expect(list.getByIndex(3)).toBeNull()
        })
    })

    describe('With index 0', () => {
        test('should return head', () => {
            const list = new LinkedList
            list.fromValues(200,100)
            expect(list.getByIndex(0).data).toBe(200)
        })
    })

    describe('With random index that is not less than 0 or greater than list length', () => {
        test('should return head of the specific index', () => {
            const list = new LinkedList
            list.fromValues(10,20,30,40)
            expect(list.getByIndex(2).data).toBe(30)
        })
    })
})

describe('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        test('should not insert', () => {
            const list = new LinkedList
            list.fromValues(100,300)
            list.insertAtIndex(-1, 200)
            expect(list.length).toBe(2)
        })
    })

    describe('with index greater than list length', () => {
        test('should not insert', () => {
            const list = new LinkedList
            list.fromValues(100,200,300)
            list.insertAtIndex(4)
            expect(list.length).toBe(3)
        })
    })

    describe('with index 0', () => {
        test('should insert at head', () => {
            const list = new LinkedList
            list.insertAtIndex(0,777)
            expect(list.head.data).toBe(777)
            expect(list.length).toBe(1)
        })
    })

    describe('with index somewhere in the middle', () => {
        test('should insert at selected index', () => {
            const list = new LinkedList
            list.fromValues(1,2,3)
            list.insertAtIndex(1,777)
            const node = list.getByIndex(1)
            expect(node.data).toBe(777)
            expect(node.next.data).toBe(2)
        })
    })
})

describe('#deleteHead', () => {
    test('remove head', () => {
        const list = new LinkedList
        list.fromValues(100,200,300)
        list.deleteHead()
        expect(list.head.data).toBe(200)
        expect(list.length).toBe(2)
    })
})

describe('#deleteAtIndex', () => {
    describe('with index less than 0', () => {
        test('should not remove', () => {
            const list = new LinkedList
            list.fromValues(100,300)
            list.deleteAtIndex(-1,)
            expect(list.length).toBe(2)
        })
    })

    describe('with index greater than list length', () => {
        test('should not remove', () => {
            const list = new LinkedList
            list.fromValues(100,200,300)
            list.deleteAtIndex(4)
            expect(list.length).toBe(3)
        })
    })

    describe('with index 0', () => {
        test('should remove head and be replaced by the next element in list', () => {
            const list = new LinkedList
            list.fromValues(1,2,3)
            list.deleteAtIndex(0)
            expect(list.head.data).toBe(2)
            expect(list.length).toBe(2)
        })
    })

    describe('with index somewhere in the middle', () => {
        test('should remove at selected index and be replaced by next element in list', () => {
            const list = new LinkedList
            list.fromValues(1,2,3,4)
            list.deleteAtIndex(1)
            const node = list.getByIndex(1)
            expect(node.data).toBe(3)
            expect(node.next.data).toBe(4)
        })
    })
})