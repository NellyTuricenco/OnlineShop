import { Component } from "../../core/Component";
import { Button, Input } from "../";
import "./Toolbar.scss";

export class Toolbar extends Component {
  constructor({ categories }) {
    super({
      className: "toolbar",
      html: `
      <div class="content-wrapper toolbar__wrapper">
        <div class="toolbar__nav"></div>
        <div class="toolbar__search"></div>
      </div>
      `,
    });
    this.findNode(".toolbar__nav")
      .append(
        categories.map(
          (category) =>
            new Button({
              className: "btn--primary toolbar__btn",
              attrs: {
                title: category,
              },
              text: category,
            })
        )
      )
      .findNode(".toolbar__search")
      .append(new Input());
  }
}
