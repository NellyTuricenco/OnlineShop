import { Component } from "../../core/Component";

export class Button extends Component {
  constructor() {
    super({
      tagName: "button",
      className: "btn",
    });
  }
}
