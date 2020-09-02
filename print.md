# 快排

``` typescript
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
```

# 斐波那契数列

```typescript
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
```

# 二分法查找

```typescript
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
```



# 双向列表

```typescript
/**
 * 双向列表核心：
 * 1. Node 数据结构定义
 * 2. head 头指针
 * 3. length 长度
 */
class ENode<T> {
    value: T | undefined;
    next: ENode<T> | null;
    prev: ENode<T> | null;
    constructor(value?: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLink<T> {
    head: ENode<T>;
    length: number;
    constructor() {
        this.head = new ENode<T>();
        this.length = 0;
    }

    push(value: T) {
        const node = new ENode(value);

        const lastNode: ENode<T> | null = this.getElementAt(this.length - 1);
        if (!lastNode) {
            node.prev = this.head;
            this.head.next = node;
        }
        else {
            node.prev = lastNode;
            lastNode.next = node;
        }
        return ++this.length;
    }

    pop() {
        const lastNode = this.getElementAt(this.length - 1);
        if (!lastNode) {
            return;
        }

        let prevNode: ENode<T> = lastNode.prev as ENode<T>;

        lastNode.prev = null;
        lastNode.next = null;
        prevNode.next = null;
        
        this.length--;
        return lastNode.value;
    }

    insert(index: number, value: T) {
        let currentNode = this.getElementAt(index);
        if (!currentNode) {
            return;
        }
        const node = new ENode(value);
        node.next = currentNode.next;
        node.prev = currentNode;
        currentNode.next = node;
        if (node.next) {
            node.next.prev = node;
        }

        return ++this.length;
    }

    getElementAt(index: number): ENode<T> | null {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let count = 0;
        let current: ENode<T> | null= this.head;
        while (current && count <= index) {
            current = current.next;
            count++;
        }
        return current;
    }
    getSize(): number {
        return this.length;
    }
}

export default DoubleLink;

```

# 二叉树

```typescript
/**
 * 二叉树核心：
 * 1. Node 数据结构
 * 2. root 根节点
 * 3. insert 二叉树的创建
 * 4. 中序遍历 <-> 排序
 */
class TNode {
    key: number;
    left: TNode | null;
    right: TNode | null;
    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: TNode | null;
    constructor() {
        this.root = null;
    }
    insert (key: number) {
        if (this.root === null) {
            this.root = new TNode(key);
        }
        else {
            this.insertNode(this.root, key);
        }
    }
    private insertNode(node: TNode, key: number) {
        if (key > node.key) {
            if (node.right === null) {
                node.right = new TNode(key);
            }
            else {
                this.insertNode(node.right, key);
            }
        }
        else {
            if (node.left === null) {
                node.left = new TNode(key);
            }
            else {
                this.insertNode(node.left, key);
            }
        }
    }
    search(key: number): boolean {
        return this.searchNode(this.root, key);
    }
    private searchNode(node: TNode | null, key: number): boolean {
        if (node) {
            if (node.key === key) {
                return true;
            }
            if (key > node.key) {
                return this.searchNode(node.right, key);
            }
            return this.searchNode(node.left, key);
        }
        return false;
    }
    preOrderTraverse(callback: Function) {
        this.preOrderTraverseNode(this.root, callback);
    }
    private preOrderTraverseNode(node: TNode | null, callback: Function) {
        if (node) {
            callback(node.key);

            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    postOrderTraverse(callback: Function) {
        this.postOrderTraverseNode(this.root, callback);
    }
    private postOrderTraverseNode(node: TNode | null, callback: Function) {
        if (node) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);

            callback(node.key);
        }
    }
    inOrderTraverse(callback: Function) {
        this.inOrderTraverseNode(this.root, callback);
    }
    private inOrderTraverseNode(node: TNode | null, callback: Function) {
        if (node) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    max() {
        let max = -Infinity;
        this.preOrderTraverse((key: number) => {
            if (key > max) {
                max = key;
            }
        });
        return max;
    }
    min() {
        let min = Infinity;
        this.preOrderTraverse((key: number) => {
            if (key < min) {
                min = key;
            }
        });
        return min;
    }
}

export default BinaryTree;
```

# 备注

Github地址：

https://github.com/kidnes/algorithm