/* jshint esversion: 6*/ 

'use strict;';

const BinaryTree = require('./BinaryTree');

let tree = new BinaryTree.BinaryTree();

tree.insert('b');
tree.insert('a');
tree.insert('c');

console.log(tree.height());// 2
console.log(tree.toArray());// ['a','b','c']

tree.remove('b');
tree.insert('b');

console.log(tree.height());// 3
console.log(tree.toArray());// ['a','b','c']

tree.insert('z');

console.log(tree.height());// 3
console.log(tree.toArray());// ['a','b','c','z']

tree.insert('y');
tree.insert('x');

console.log(tree.height());// 4
console.log(tree.toArray());// ['a','b','c','x','y','z']
console.log(tree.exists('a'));
console.log(tree.exists('z'));
console.log(tree.exists('e'));
try{
    tree.insert('x');
} catch({message}){
    console.log(message);// This tree already contains 'x'
}

try{
    tree.remove('x');
    tree.remove('x');
} catch({message}){
    console.log(message);// This tree does not contain 'x'
}

tree = new BinaryTree.BinaryTree();

tree.insert('a');
tree.insert('b');
tree.insert('c');
tree.insert('d');
tree.insert('e');

console.log(tree.height());// 5
console.log(tree.toArray());// ['a','b','c','d','e']

tree.remove('b');
tree.remove('a');
tree.remove('c');
tree.remove('d');
tree.remove('e');

console.log(tree.height());// 0
console.log(tree.toArray());// []