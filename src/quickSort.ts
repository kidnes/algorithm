/**
 * 快排思想：基准，挖坑，填坑
 */
function quickSort(arr: number[], left: number, right: number) {
    if (left >= right) {
        return;
    }

    let index = partition(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
}

function partition(arr: number[], left: number, right: number): number {
    let key = arr[left];
    while (left < right) {
        while (left < right && arr[right] >= key) {
            right--;
        }
        arr[left] = arr[right];
        while (left < right && arr[left] <= key) {
            left++;
        }
        arr[right] = arr[left];
    }

    arr[left] = key;
    return left;
}

export default quickSort;
