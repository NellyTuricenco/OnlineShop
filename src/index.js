import { App } from "./App";
import { render } from "./core/render";
import "./styles/index.scss";

const props = {
  title: "Online Shop",
};

render(new App(props), document.getElementById("root"));
