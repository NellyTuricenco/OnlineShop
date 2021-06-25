import { App } from "./App";
import { render } from "./core/render";
import products from "./assets/database/products.json";
import "./styles/index.scss";

const props = {
  title: "Online Shop",
  products,
  categories: [...new Set(products.map((p) => p.category))],
};

render(new App(props), document.getElementById("root"));
