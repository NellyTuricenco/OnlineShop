import { Component } from "../../core/Component";
import { Product } from "../";
import "./products.scss";

export class Products extends Component {
  constructor({ items }) {
    super({ className: "products" });
    this.append(items.map((data) => new Product(data)));
  }
}
