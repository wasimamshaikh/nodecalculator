const assert = require('assert');
const { add, subtract, multiply, divide } = require('../calculator/calculator');

describe('Calculator', () => {
    it('should add two numbers', () => {
        assert.strictEqual(add(2, 3), 5);
    });

    it('should subtract two numbers', () => {
        assert.strictEqual(subtract(5, 2), 3);
    });

    it('should multiply two numbers', () => {
        assert.strictEqual(multiply(3, 4), 12);
    });

    it('should divide two numbers', () => {
        assert.strictEqual(divide(10, 2), 5);
    });

    it('should throw error on divide by zero', () => {
        assert.throws(() => divide(5, 0), /Cannot divide by zero/);
    });
});