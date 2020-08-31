import quickSort from '../src/quickSort';

it('test1', () => {
    const arr = [19, 20, 17, 13, 28, 14, 23, 15];
    const expected = [13, 14, 15, 17, 19, 20, 23, 28];
    quickSort(arr, 0, arr.length-1);
    expect(arr).toStrictEqual(expected);
});
