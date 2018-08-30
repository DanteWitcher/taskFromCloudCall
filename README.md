# JS Task
## Description
Extend BinaryTree class (`BinaryTree.js`) with required methods and fields to pass all the checks in `index.js`.
You must implement next methods:
* insert(str) - adds string to binary tree
* remove(str) - removes string from binary tree (if string exists)
* exists(str) - returns true, if tree contains string
* height() - returns height of the tree
* toArray() - returns sorted array of nodes

### Example
```js
let b = new BinaryTree();
b.insert('b');
b.insert('a');
b.insert('c');
b.height();// 2
b.toArray();// ['a', 'b', 'c']
b.remove('b');
b.insert('b');
b.height();// 3
b.toArray();// ['a', 'b', 'c']
```

### QA
* if you encounter a situation, that has various solutions, accept yours, but throw an error in all other cases.
**Example:** when user tries to remove a string, that does not exist in tree
```js
let b = new BinaryTree();
b.insert('b');
b.remove('b');
b.remove('b');// Error: This tree does not contain a node 'b'
```