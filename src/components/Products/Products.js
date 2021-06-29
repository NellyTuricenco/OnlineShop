import { Component } from "../../core";
import { Product } from "../";
import "./products.scss";

export class Products extends Component {
  constructor({ gs }) {
    super({ className: "products" });

    gs.subscribe(this);

    const { filteredProducts } = gs.getState();

    this.append(filteredProducts.map((data) => new Product(data)));
  }
  _render(prevState, nextState) {
    if (prevState.activeCategory === nextState.activeCategory) return;

    const { filteredProducts } = nextState;

    const productsContainer = document.querySelector(".products");
    productsContainer.innerHTML = "";
    productsContainer.append(
      ...filteredProducts.map((data) => new Product(data).toNode())
    );
    // this.truncate().append(filteredProducts.map((data) => new Product(data)));
  }
}
