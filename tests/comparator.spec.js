const Comparator = require("./../src/comparator");

describe('Comparator Test', () => {
    test('Default Equal Should Work', () => {
        const comparator = new Comparator();

        expect(comparator.isEqual(2, 2)).toBe(true);
        expect(comparator.isEqual(3, 2)).toBe(false);
        expect(comparator.isEqual(4, 2)).toBe(false);
    });

    test('Default isGreaterThan Should Work', () => {
        const comparator = new Comparator();

        expect(comparator.isGreaterThan(3, 2)).toBe(true);
        expect(comparator.isGreaterThan(2, 2)).toBe(false);
        expect(comparator.isGreaterThan(1, 2)).toBe(false);
    });

    test('Default isLessThan Should Work', () => {
        const comparator = new Comparator();

        expect(comparator.isLessThan(1, 2)).toBe(true);
        expect(comparator.isLessThan(2, 2)).toBe(false);
        expect(comparator.isLessThan(3, 2)).toBe(false);
    });

    test('Default isGreaterThanOrEqual Should Work', () => {
        const comparator = new Comparator();

        expect(comparator.isGreaterThanOrEqual(2, 2)).toBe(true);
        expect(comparator.isGreaterThanOrEqual(3, 2)).toBe(true);
        expect(comparator.isGreaterThanOrEqual(1, 2)).toBe(false);
    });

    test('Default isLessThanOrEqual Should Work', () => {
        const comparator = new Comparator();

        expect(comparator.isLessThanOrEqual(2, 2)).toBe(true);
        expect(comparator.isLessThanOrEqual(1, 2)).toBe(true);
        expect(comparator.isLessThanOrEqual(3, 2)).toBe(false);
    });
});