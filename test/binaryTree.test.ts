import BinaryTree from '../src/binaryTree';
import quickSort from '../src/quickSort';

let tree = new BinaryTree();
let original = [11, 7, 15, 5, 3, 9, 8, 10,13,12, 14, 20, 18, 26, 6];
original.forEach(item => {
    tree.insert(item);
});

it('BinaryTree min max', () => {
    let max = tree.max();
    let min = tree.min();
    expect(max).toBe(26);
    expect(min).toBe(3);
});

it('BinaryTree in order', () => {
    let result: number[] = [];
    tree.inOrderTraverse((key: number) => {
        result.push(key);
    });

    const expected: number[] = [
        3,  5,  6,  7,  8,  9,
       10, 11, 12, 13, 14, 15,
       18, 20, 26
    ];
    expect(result).toEqual(expected);
});

it('BinaryTree post order', () => {
    let result: number[] = [];
    tree.postOrderTraverse((key: number) => result.push(key));

    expect(result.length).toEqual(original.length);
});

it('BinaryTree pre order', () => {
    let result: number[] = [];
    tree.preOrderTraverse((key: number) => result.push(key));

    expect(result.length).toEqual(original.length);
});

it('BinaryTree search', () => {
    expect(tree.search(15)).toBe(true);
    expect(tree.search(16)).toBe(false);
    expect(tree.search(3)).toBe(true);
    expect(tree.search(2)).toBe(false);
});

it('BinaryTree order', () => {
    let newTree = new BinaryTree();
    for (let i = 0; i < 100; i++) {
        let key = Math.floor(Math.random() * 1000);
        newTree.insert(key);
    }
    let result: number[] = [];
    newTree.inOrderTraverse((key: number) => result.push(key));

    let expected = JSON.parse(JSON.stringify(result));
    quickSort(expected, 0, expected.length-1);
    expect(result).toEqual(expected);
});
