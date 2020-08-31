import {binarySearch, binarySearchRecursion} from '../src/binarySearch';

it('binary search', () => {
    const arr = [13, 14, 15, 17, 19, 20, 23, 28];
    expect(binarySearch(arr, 17)).toBe(3);
    expect(binarySearch(arr, 18)).toBe(-1);
});

it('binary search recusrion', () => {
    const arr = [13, 14, 15, 17, 19, 20, 23, 28];
    expect(binarySearchRecursion(arr, 17, 0, arr.length)).toBe(3);
    expect(binarySearchRecursion(arr, 18, 0, arr.length)).toBe(-1);
});
