import { Component } from "../../core";
import { Products } from "../";
import "./Main.scss";

export class Main extends Component {
  constructor({ gs }) {
    super({
      tagName: "main",
      className: "main",
      children: new Products({ gs }),
    });
  }
}
