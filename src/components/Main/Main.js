import { Component } from "../../core/Component";
import { Products } from "../";
import "./Main.scss";

export class Main extends Component {
  constructor({ products }) {
    super({
      tagName: "main",
      className: "main",
      children: new Products({ items: products }),
    });
  }
}
