/**
 * 二分法查找核心：中间值
 */
function binarySearchRecursion<T>(arr: T[], key: T, start: number, end: number): number {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
        return mid;
    }
    if (arr[mid] < key) {
        return binarySearchRecursion(arr, key, mid + 1, end);
    }
    return binarySearchRecursion(arr, key, start, mid - 1);
}

function binarySearch<T>(arr: T[], key: T) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        if (arr[mid] < key) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return -1;
}

export {binarySearchRecursion, binarySearch};
