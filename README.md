# 算法学习

## 项目工程
项目创建非常简单，为帮助理解工程化，详细介绍从头创建过程：
1. 项目初使化
``` shell
npm init
tsc --init
yarn add typescript jest @types/jest ts-jest
```
2. 配置 `jest.config.js`
```javascript
module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};
```

3. 配置VSCode调试，通过F5调试&运行ts文件
``` json
{
    "type": "node",
    "request": "launch",
    "name": "启动程序",
    "args": ["-r", "/Users/liubin29/.nvm/versions/node/v12.13.0/lib/node_modules/ts-node/register", "${file}"]​
}
```

## 快排
核心思路：找基准，填坑，挖坑

## 二分法查找
核心：找 mid 中间值

## 双向链表
核心：定义 `Node` 节点基本数据结构，通过双向列表的类，实现方法：
- push(value: T)：向列表增加元素
- pop()：列表移除最后元素
- insert(index: number, value: T)：向 `index` 元素之后插入新元素
- getElementAt(index: number): ENode<T> | null：获取 `index` 元素
- getSize(): number：获取元素个数

## 二叉树
二叉树分为两部分：树的创建和树的操作
- insert (key: number) ：插入新的元素
- search(key: number): boolean：查找是否存在
- preOrderTraverse(callback: Function)：先序遍历
- postOrderTraverse(callback: Function)：后序遍历
- inOrderTraverse(callback: Function)：中序遍历
- max()：最大值
- min()：最小值