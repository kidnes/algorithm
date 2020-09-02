/**
 * 斐波那契数列核心：
 * 1. 递归要有结束条件
 * 2. 动态归划：明确子问题域
 */
function fibonacciRecursive(n: number): number {
    if (n <= 2) {
        return 1;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacci(n: number): number[] {
    let arr = [1, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

export {fibonacciRecursive, fibonacci};
