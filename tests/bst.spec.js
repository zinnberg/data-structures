const {
    BinarySearchTree,
} = require('./../');

describe('Binary Search Tree Test', () => {
    test('Inserts Correctly', () => {
        const tree = new BinarySearchTree();
        let results = [];
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.preOrder((val) => {
            results.push(val);
        });
        
        expect(results.length).toBe(3);
        expect(results).toEqual([2, 3, 4])
    });

    describe('Removing a node', () => {
        test('Can Delete Root Node', () => {
                const tree = new BinarySearchTree();
                let results = [];
                tree.insert(2);
                tree.remove(2);
                tree.preOrder((val) => {
                    results.push(val);
                });

                expect(results.length).toBe(0);
        });

        test('Can Delete With Only Left Child', () => {
            const tree = new BinarySearchTree();
            let results = [];
            tree.insert(2);
            tree.insert(1);
            tree.remove(2);
            tree.preOrder((val) => {
                results.push(val);
            });

            expect(results.length).toBe(1);
            expect(results).toEqual([1]);
        });

        test('Can Delete With Only Right Child', () => {
            const tree = new BinarySearchTree();
            let results = [];
            tree.insert(2);
            tree.insert(3);
            tree.remove(2);
            tree.preOrder((val) => {
                results.push(val);
            });

            expect(results.length).toBe(1);
            expect(results).toEqual([3]);
        });
    });
});