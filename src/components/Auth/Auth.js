import { Component } from "../../core";
import { Input, InputWithIcon, Button } from "../";
import "./Auth.scss";

export class Auth extends Component {
  constructor() {
    super({
      tagName: "form",
      className: "auth",
      attrs: {
        autocomplete: "off",
      },
      html: `
      <h1 class="auth__title"> Sign In</h1>      
      <fieldset class="auth__fields"></fieldset>
      `,
    });
    this.findNode(".auth__fields")
      .append([
        new Input({
          className: "auth__field",
          type: "email",
          name: "email",
          placeholder: "E-mail",
        }),
        new InputWithIcon({
          wrapperClassName: "auth__field",
          inputAttrs: {
            name: "password",
            type: "password",
            placeholder: "Password",
          },
          icon: '<i class="fas fa-eye input-with-icon__icon auth__icon"></i>',
        }),
      ])
      .after([
        new Button({
          type: "submit",
          className: "btn--primary btn--rect ",
          title: "Submit",
          text: "Submit",
        }),
        new Button({
          className: "btn--rect auth__btn",
          title: "Sign Up",
          text: "Sign Up",
        }),
      ]);
  }
}
