const {
    DoublyLinkedList,
 } = require('./../');

describe('Doubly Linked List', () => {
    describe('Size', () => {
        test('Should be 0 when no elements in list', () => {
            const linkedList = new DoublyLinkedList();
            expect(linkedList.size()).toBe(0);
        });
    })

    describe('Prepend', () => {
        test(`Given there are no elements in the list
                When I prepend an element to the list
                Then there should be 1 element in the list
                and the size should should be 1`, () => {
            
            const linkedList = new DoublyLinkedList();
            linkedList.prepend(12);
            expect(linkedList.size()).toBe(1);
            expect(linkedList.head()).toBe(12);
            expect(linkedList.tail()).toBe(12);
        });
        
        test(`Given there is at least one element in the list
                    When I prepend an element to the list
                    Then the size should be incremented by 1
                    and the element should be placed at the front of the list`, () => {
            
            const linkedList = new DoublyLinkedList();
            linkedList.prepend(12);
            linkedList.prepend(34);
            expect(linkedList.size()).toBe(2);
            expect(linkedList.head()).toBe(34);
            expect(linkedList.tail()).toBe(12);
        });
    });

    describe('Append', () => {
        test(`Given there are no elements in the list
                When I append an element to the list
                Then the size should be incremented by 1
                and the element should be the only element in the list`,
        () => {
            const linkedList = new DoublyLinkedList();
            linkedList.append(12);
            expect(linkedList.size()).toBe(1);
            expect(linkedList.head()).toBe(12);
            expect(linkedList.tail()).toBe(12);
        });

        test(`Given there are more than one element in a list
                When I append an element to the list
                Then the size should be incremented by 1
                and the element should be placed at the end of the list`,
        () => {
            const linkedList = new DoublyLinkedList();
            linkedList.append(13);
            linkedList.append(14);
            linkedList.append(12);
            expect(linkedList.size()).toBe(3);
            expect(linkedList.head()).toBe(13);
            expect(linkedList.tail()).toBe(12);
        });
    });

    describe('Clear', () => {
        test(`Given there are more than one element in element in a list
                When the list is cleared
                Then all elements should be removed the list`, 
        () => {
            const linkedList = new DoublyLinkedList();
            linkedList.append(13);
            linkedList.append(14);
            linkedList.append(12);
            linkedList.clear();
            expect(linkedList.size()).toBe(0);
        });
    });

    describe('Insert', () => {
        test(`Given there are 0 or more elements in the list 
                When I insert at index 0
                then the first element in the list should be the newly inserted element`, 
        () => {
            const linkedList = new DoublyLinkedList();
            linkedList.insert(0, 13);
            expect(linkedList.size()).toBe(1);
            expect(linkedList.head()).toBe(13);
        });

        test(`Given there are 1 or more elements in the list
                When I insert at the end of the list
                the last element in the list should be the newly inserted element`, 
        () => {
            const linkedList = new DoublyLinkedList();
            linkedList.append(13);
            linkedList.append(14);
            linkedList.insert(2, 12);
            expect(linkedList.size()).toBe(3);
            expect(linkedList.tail()).toBe(12);
        });

        test(`Given there are 2 or more elements in the list
                When I insert in the middle of the list
                the last element in the list should be the newly inserted element`, 
        () => {
            const linkedList = new DoublyLinkedList();
            linkedList.prepend(13);
            linkedList.prepend(14);
            linkedList.insert(1, 12);
            expect(linkedList.size()).toBe(3);
            expect(linkedList.head()).toBe(14);
            expect(linkedList.tail()).toBe(13);
            expect(linkedList.get(1)).toBe(12);
            expect(linkedList.get(2)).toBe(13);
        });
        
    });
});