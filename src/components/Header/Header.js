import { Component } from "../../core";
import { Button, ModalWindow, Auth } from "../";
import { render } from "../../core/render";
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
        className: "btn--secondary btn--rect header__btn",
        title: "Sign In",
        text: "Sign In",
        onClick: this.handleModalOpen.bind(this),
      })
    );
  }
  handleModalOpen() {
    const modalWindow = new ModalWindow({
      children: new Auth(),
    });
    render(modalWindow, document.getElementById("modal-root"));
  }
}
