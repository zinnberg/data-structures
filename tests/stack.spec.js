const {
    Stack
} = require('./../');

describe('Stack Test', () => {
    describe('Peek', () => {
        test('Returns null when there are no elements on the stack', () => {
            const stack = new Stack();
            expect(stack.peek()).toEqual(null);
        });

        test('Should return top element', () => {
            const stack = new Stack();

            stack
                .push(1)
                .push(2)
                .push(3);
            
            expect(stack.peek()).toEqual(3);
        });
    });

    describe('Pop', () => {
        test('Removes Top Element', () => {
            const stack = new Stack();

            stack
                .push(1)
                .push(2)
                .push(3);
            
            expect(stack.pop()).toEqual(3);
        });
    });
});
