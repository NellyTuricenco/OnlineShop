import { Component } from "../../core";
import { Product } from "../";
import "./products.scss";

export class Products extends Component {
  constructor({ gs, perPage }) {
    super({ className: "products" });

    gs.subscribe(this);

    const { filteredProducts, activePage } = gs.getState();

    const productList = filteredProducts
      .map((data) => new Product(data))
      .slice((activePage - 1) * perPage, activePage * perPage);

    this.append(productList);
  }
  _render(prevState, nextState) {
    if (prevState.activeCategory === nextState.activeCategory) return;

    const { filteredProducts } = nextState;

    const productsContainer = document.querySelector(".products");
    productsContainer.innerHTML = "";
    productsContainer.append(
      ...filteredProducts.map((data) => new Product(data).toNode())
    );
    //TODO current functionality is not working properly
    // this.truncate().append(filteredProducts.map((data) => new Product(data)));
  }
}
