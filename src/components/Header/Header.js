import { Component } from "../../core/Component";
import { Button } from "../";
import "./Header.scss";

export class Header extends Component {
  constructor({ title }) {
    super({
      tagName: "header",
      className: "header",
      html: `
      <div class="content-wrapper header__wrapper">
      <h1 class="header__title">${title}</h1>
      </div>
      `,
    });
    this.findNode(".header__title").after(
      new Button({
        className: "btn--secondary header__btn",
        attrs: {
          title: "Sign In",
        },
        text: "Sign In",
      })
    );
  }
}
