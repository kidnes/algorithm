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
