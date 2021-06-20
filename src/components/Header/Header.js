import { Component } from "../../core/Component";
import "./Header.scss";

export class Header extends Component {
  constructor() {
    super({
      tagName: "header",
      className: "header",
      text: "Header",
    });
  }
}
