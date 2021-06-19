export class Component {
  constructor({ tagName = "div", className }) {
    this._node = document.createElement(tagName);
    if (className) this._node.className = className;
  }
  toNode() {
    return this._node;
  }
}
