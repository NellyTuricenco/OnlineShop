import { App } from "./App";
import { GlobalState, render } from "./core";
import products from "./assets/database/products.json";
import "./styles/index.scss";

const categories = [...new Set(products.map((p) => p.category))];
const activeCategory = categories[0];

const gs = new GlobalState({
  initialState: {
    activeCategory,
    products,
    filteredProducts: products.filter((p) => p.category === activeCategory),
  },
});

const props = {
  gs,
  title: "Online Shop",
  categories,
};

render(new App(props), document.getElementById("root"));
