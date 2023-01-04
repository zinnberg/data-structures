const {
    SinglyLinkedList,
} = require('./../');

describe('Singly Linked List', () => {
    test('Append inserts at the end of the list', () => {
        const list = new SinglyLinkedList();

        list.append(3);
        expect(list.indexOf(3)).toBe(0);
        expect(list.size()).toBe(1);

        list.append(2);
        expect(list.indexOf(2)).toBe(1);
        expect(list.size()).toBe(2);
    });

    test("Clear removes all elements from the list", () => {
        const list = new SinglyLinkedList();

        list
            .append(1)
            .append(2)
            .append(3)
            .append(4)
            .append(5)
            .append(6);
        
        expect(list.size()).toBe(6)

        list.clear();
        expect(list.size()).toBe(0);
    });

    test('Prepend add an element at the front of the list', () => {
        const list = new SinglyLinkedList();

        list.prepend(3);
        expect(list.indexOf(3)).toBe(0);
        expect(list.size()).toBe(1);

        list.prepend(2);
        expect(list.indexOf(2)).toBe(0);
        expect(list.size()).toBe(2);
    });

    test("Insert adds an element at any position in the list", () => {
        const list = new SinglyLinkedList();

        list.insert(0,0);
        expect(list.indexOf(0)).toBe(0);
        expect(list.size()).toBe(1);

        list
            .append(1)
            .append(2)
            .append(4)
            .append(5)
            .append(6);
        expect(list.size()).toBe(6);

        list.insert(3, 3);
        expect(list.size()).toBe(7);
        expect(list.indexOf(3)).toBe(3);
        expect(list.indexOf(4)).toBe(4);

        list.insert(7, 34);
        expect(list.indexOf(34)).toBe(7);
    });

    test("Can remove elements by value", ()=> {
        const list = new SinglyLinkedList();

        list.prepend(3);
        list.remove(3);
        expect(list.size()).toBe(0);

        list
            .append(1)
            .append(2)
            .append(3)
            .append(4);

        list.remove(4);
        expect(list.size()).toBe(3);
        expect(list.get(2)).toBe(3);

        list.remove(2)
        expect(list.size()).toBe(2);
        expect(list.get(1)).toBe(3);
    });

    test("Can remove elements by index", () => {
        const list = new SinglyLinkedList();
        list.prepend(3);
        list.removeAt(0);
        
        expect(list.size()).toBe(0);

        list
            .prepend(3)
            .prepend(4)
            .removeAt(0);

        expect(list.size()).toBe(1);
        expect(list.get(0)).toBe(3);

        list.clear();

        list
            .prepend(3)
            .prepend(4)
            .removeAt(1);

        expect(list.size()).toBe(1);
        expect(list.get(0)).toBe(4);
        
    });

    test("Can get element from the correct position in the list", () => {
        const list = new SinglyLinkedList();

        list.append(3);
        expect(list.get(0)).toBe(3);
    });
});