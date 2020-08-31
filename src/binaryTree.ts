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
