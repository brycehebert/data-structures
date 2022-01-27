type Nullable<T> = T | null;

class TreeNode<T> {
  constructor(d: T) {
    this._data = d;
    this._left = null;
    this._right = null;
  }

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
}

class BinaryTree<T> {
  constructor() {
    this._root = null;
  }

  private _root: Nullable<TreeNode<T>>;
  public get root(): Nullable<TreeNode<T>> {
    return this._root;
  }
  public set root(node: Nullable<TreeNode<T>>) {
    this._root = node;
  }
  /**
   * Insert a new node into the binary search tree.
   * @param data The data to be added to the tree structure
   * @returns true if operation is successful, false if failed.
   */
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

  /**
   * Searches the binary tree.
   * @param query The data that is being searched for
   * @returns The TreeNode the data is stored on or null if not found.
   */
  find(query: T): Nullable<TreeNode<T>> | null {
    if (!this._root) {
      return null;
    }
    let current = this._root;

    while (current.data !== query) {
      if (current.data < query) {
        if (!current.right) {
          console.log(current);
          return null;
        }
        current = current.right;
      } else if (current.data > query) {
        if (!current.left) {
          return null;
        }
        current = current.left;
      }
    }
    return current;
  }
}

let tree = new BinaryTree<number>();

tree.insert(12);
tree.insert(3);
tree.insert(21);
tree.insert(18);
console.log(tree.find(13));


