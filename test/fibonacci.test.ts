import {fibonacciRecursive, fibonacci} from '../src/fibonacci';

it('fibonacciRecursive', () => {
    expect(fibonacciRecursive(5)).toBe(5);
});

it('fibonacci', () => {
    const expected: number[]= fibonacci(5);
    expect(expected[4]).toBe(5);
});
