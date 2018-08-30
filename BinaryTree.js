/* jshint esversion: 6 */

'use strict;';

class Node {
	constructor(data, left, right) {
		this.data = data || null;
		this.left = left || null;
		this.right = right || null;
	}
}

function cmp(str1, str2) {
    return str1 < str2;
}

exports.BinaryTree = class BinaryTree {
    constructor(comparator = cmp) {
        this.comparator = comparator;
        this.root = null;
    }

    insert(str) {

        if (str == null || ((typeof str) != 'string')) {
            console.error(`this is node isn't string or it's empty`);
            return;
        }
        else {
            let node = new Node(),
                data = node.data = str;

            if (!this.root) {
                this.root = node;
            }
            else {
                let current = this.root,
                    parent;

                while(true) {
                    parent = current;

                    if (data === current.data) {
                        throw Error(`This tree already contains ${data}`);
                        
                    }
                    // Если меньше корневого значения, то идём влево
                    if (cmp(data, current.data)) {
                        current = current.left;
                        // Если левый лист равен 'null' (т.е пустой) присваиваем ему данное значение
                        if (current == null) {
                            parent.left = node;
                            return;
                        }
                        if (current.data === data) {
                            throw Error(`This tree already contains ${data}`);
                        }
                    }
                    else if (!cmp(data, current.data)) {
                        current = current.right;
                        if (current == null) {
                            parent.right = node;
                            return;
                        }
                        if (current.data === data) {
                            throw Error(`This tree already contains ${data}`);
                        }
                    }
                }
            }
            
        }
    }
    remove(str) {
        

        let current = this.root,
            parent = this.root,
            data = str,
            isLeftChild = true;

        // to do while will not find

        while(current.data !== data) {

            parent = current;
            
            if(data < current.data) {
                isLeftChild = true;
                current = current.left;
            }
            //to go in the left
            else {
                isLeftChild = false;
                current = current.right;
            }
            //if value doesn't exist
            if(current === null) {
                throw Error(`This tree does not contain ${data}`);
            }   
        }
        //delete
        if(current.left === null && current.right === null) {
            if(current === this.root) {
                this.root = null; 
            }
            if(isLeftChild) {
                parent.left = null;
            }  
            else {
                parent.right = null;
            }
        }

        else if(current.left === null || current.right === null) {
            
            if(current.left === null ) {
                if (current === this.root) {
                    this.root = current.right;
                }
                else if(parent.left === current) {
                    parent.left = current.right;
                }
                else {
                    parent.right = current.right;
                } 
            }
            else {
                if (current === this.root) {
                    this.root = current.left;
                }
                else if(parent.left === current) {
                    parent.left = current.left;
                }
                else {
                    parent.right = current.left;
                }
            }
        }

        else {
            let arr = getSuccessor(current.data, this),
                successor = arr[0],
                parentS = arr[1];
            current.data = successor.data;
            if(parentS.left === successor) {
                parentS.left = successor.right;
            }
            else {
                parentS.right = successor.left;
            }
        }

        function getSuccessor(x, tree) {
            let successor = null,
                parentSuccessor = null,
                curr = tree.root;
            while(curr !== null) {
                if(curr.data > x) {
                    successor = curr;
                    if(curr.left !== null) {
                        parentSuccessor = curr;
                    }
                    curr = curr.left;
                }
                else {
                    if(curr.right !== null) {
                        parentSuccessor = curr;
                    }
                    curr = curr.right;
                }
            }
            return [successor, parentSuccessor];
        }
    }

    height() {
        let countLeft = 0,
            countRight = 0,
            node = this.root;
      
        
        return countHeight(node);
    
        function countHeight(node) {
            if(node === null) {
                return 0;
            }
            else {         
                return 1 + Math.max(countHeight(node.left), countHeight(node.right));
        }
    }
}

    toArray() {
        let arr = [],
            node = this.root;
        function find(node) {
            for (let prop in node) {
                if (typeof node[prop] === 'string') {
                    arr.push(node[prop]);
                }
                if (typeof node[prop] === 'object') {
                    find(node[prop]);
                }
            }
        }
        find(node);
        return arr.sort();
    }
    
};

exports.cmp = cmp;