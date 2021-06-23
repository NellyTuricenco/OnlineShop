export class Component {
  constructor({ tagName = "div", className, attrs, html, text }) {
    this._node = document.createElement(tagName);
    this._foundNode = null;
    if (className) this._node.className = className;
    if (html) this._node.innerHTML = html;
    if (text) this._node.textContent = text;
    for (const key in attrs) {
      const attrValue = attrs[key];
      if (!attrValue) continue;
      this._node.setAttribute(key, attrValue);
    }
  }

  toHTML() {
    return this._node.outerHTML;
  }

  toNode() {
    return this._node;
  }

  findNode(selector) {
    this._foundNode = this._node.querySelector(selector);
    return this;
  }

  _insert(methodName, components) {
    const children = Array.isArray(components) ? components : [components];
    const nodes = children.map((child) => child.toNode());
    (this._foundNode || this._node)[methodName](...nodes); //this._node.append(...nodes)
  }
  append(components) {
    this._insert("append", components);
    return this;
  }

  prepend(components) {
    this._insert("prepend", components);
    return this;
  }

  before(components) {
    this._insert("before", components);
    return this;
  }

  after(components) {
    this._insert("after", components);
    return this;
  }

  truncate() {}
}
