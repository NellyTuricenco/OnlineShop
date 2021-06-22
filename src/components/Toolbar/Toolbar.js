import { Component } from "../../core/Component";
import "./Toolbar.scss";

export class Toolbar extends Component {
  constructor() {
    super({
      className: "toolbar",
      text: "Toolbar",
    });
  }
}
