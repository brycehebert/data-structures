class TreeNode<T> {
  private _data: T;
  public get data(): T {
    return this._data;
  }
  public set data(d: T) {
    this._data = d;
  }

  private _left: Nullable<TreeNode<T>>;
  public get left(): Nullable<TreeNode<T>> {
    return this._left;
  }
  public set left(node: Nullable<TreeNode<T>>) {
    this._left = node;
  }

  private _right: Nullable<TreeNode<T>>;
  public get right(): Nullable<TreeNode<T>> {
    return this._right;
  }
  public set right(node: Nullable<TreeNode<T>>) {
    this._right = node;
  }

  constructor(d: T) {
    this._data = d;
    this._left = null;
    this._right = null;
  }
}

class BinaryTree<T> {
  private _root: Nullable<TreeNode<T>>;
  public get root(): Nullable<TreeNode<T>> {
    return this._root;
  }
  public set root(node: Nullable<TreeNode<T>>) {
    this._root = node;
  }
  constructor() {
    this._root = null;
  }

  insert(data: T): boolean {
    let newNode = new TreeNode<T>(data);

    if (this._root === null) {
      this._root = newNode;
      return true;
    }
    // else
    let currentNode: Nullable<TreeNode<T>> = this._root;
    let parent: Nullable<TreeNode<T>> = null;

    while (currentNode) {
      parent = currentNode;

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (!parent) {
      return false;
    }

    if (data < parent.data) {
      parent.left = newNode;
      return true;
    } else {
      parent.right = newNode;
      return true;
    }
  }
}

type Nullable<T> = T | null;

let tree = new BinaryTree<number>();

tree.insert(12);
tree.insert(3);
tree.insert(21);
tree.insert(18);
console.log(tree);
