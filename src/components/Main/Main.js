import { Component } from "../../core/Component";
import "./Main.scss";

export class Main extends Component {
  constructor() {
    super({
      tagName: "main",
      className: "main",
      text: "Main",
    });
  }
}
