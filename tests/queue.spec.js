const {
    Queue,
}= require('./../');

describe('Queue Tests',  () => {
    describe('isEmpty', () => {
        test('Should return true when empty', () => {
            const queue = new Queue();
            expect(queue.isEmpty()).toBe(true);
        });
    });

    describe('enqueue', () => {
        test('can add element to the queue', () => {
            const queue = new Queue();
            queue.enqueue(12)
            expect(queue.isEmpty()).toBe(false);
        });
    });

    describe('dequeue', () => {
        test('can remove element from the queue', () => {
            const queue = new Queue();
            queue.enqueue(12)
            queue.dequeue();
            expect(queue.isEmpty()).toBe(true);
        });
    });
});