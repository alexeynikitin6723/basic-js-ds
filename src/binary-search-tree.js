const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.root1 = null;
  }
  
  root() {
    if (!this.root1){
      return null;
    }
    return this.root1;
  }

  add(data) {
    this.root1 = addWithin(this.root1, data);
    function addWithin(node,data){
      if (!node){
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }
      if (node.data < data){
        node.left = addWithin(node.left, data);
      }
      else{
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  
  has(data) {
    return searchWithIn(this.root1, data);

    function searchWithIn(node, data) {
      if (!node) return false;
      if (node.data === data) return true;

      return node.data <= data
 ? searchWithIn(node.right, data)
 : searchWithIn(node.left, data);
    }
  }

  find(data) {
    return findNode(this.root1,data);
    function findNode(node,data){
      if (!node){
        return null;
      }
      if (node.data ===data){
        return node;
      }
      if (node.data<data){
        return findNode(node.left, data);
      }
      else{
        return findNode(node.right,data);
      }
    }
  }

  remove(data) {
    this.root1 = removeNode(this.root1, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data <node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (data> node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } 
      else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.root1) return;

    let node = this.root1;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root1){
      return;
    }
    let node = this.root1;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};