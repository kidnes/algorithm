import DoubleLink from '../src/doubleLink';

it('doubleLink insert', () => {
    debugger;
    let link = new DoubleLink();
    link.push(3);
    link.push(5);
    link.insert(1, 8);
    
    let result = [];
    let current: any = link.head.next;
    while (current) {
        result.push(current.value);
        current = current.next;
    }

    let expected = [3, 5, 8];
    expect(result).toEqual(expected);

    expect(link.insert(3, 10)).toBe(undefined);
    expect(link.insert(1, 10)).toBe(4);
});

it('doubleLink pop', () => {
    debugger;
    let link = new DoubleLink();

    link.push(3);
    link.push(5);
    link.push(8);

    expect(link.getSize()).toEqual(3);
    expect(link.pop()).toEqual(8);
    expect(link.getSize()).toEqual(2);
    expect(link.pop()).toEqual(5);
    expect(link.pop()).toEqual(3);
    expect(link.pop()).toEqual(undefined);
});
