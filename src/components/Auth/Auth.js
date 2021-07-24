import { Component } from "../../core";
import { Input, InputWithIcon, Button } from "../";
// import { sendRequest } from "../../utils/sendRequest";
import "./Auth.scss";
import { ModalWindow } from "../ModalWindow/ModalWindow";

const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";
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

    this._mode = "SIGN_IN";

    this.addListeners({
      submit: this._handleSubmit.bind(this),
    });

    this.findNode(".auth__fields").after([
      new Button({
        type: "submit",
        className: "btn--primary btn--rect btn--submit",
        title: "Submit",
        text: "Submit",
        // onClick: ,
      }),
      new Button({
        className: "btn--rect auth__btn",
        title: "Sign Up",
        text: "Sign Up",
        onClick: this._handleToggleForm.bind(this),
      }),
    ]);
    this._drawSingInForm();
  }

  _handleSubmit(e) {
    e.preventDefault();

    const formData = {};
    for (const element of this._node.elements) {
      if (!["SELECT", "TEXTAREA", "INPUT"].includes(element.tagName)) continue;

      const { name, value } = element;

      formData[name] = value;
      this.findNode(".backdrop").remove();
      // document.getElementById("modal-root").remove();
    }
    // sendRequest({
    //   url: "https://jsonplaceholder.typicode.com/users",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }).catch(console.log);

    //SENDING REQUEST WITH FETCH
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .catch(console.log);
  }

  _drawSingInForm() {
    this.findNode(".auth__fields")
      .truncate()
      .append([
        new Input({
          className: "auth__field",
          type: "email",
          name: "email",
          placeholder: "E-mail",
          attrs: {
            required: true,
          },
        }),
        new InputWithIcon({
          wrapperClassName: "auth__field",
          inputAttrs: {
            name: "password",
            type: "password",
            placeholder: "Password",
            required: true,
          },
          icon: '<i class="fas fa-eye input-with-icon__icon auth__icon"></i>',
        }),
      ])
      .findNode(".auth__btn")
      .text("Sign Up")
      .findNode(".auth__title")
      .text("Sign In");
  }

  _drawSingUpForm() {
    this.findNode(".auth__fields")
      .truncate()
      .append([
        new Input({
          className: "auth__field",
          name: "firstName",
          placeholder: "First name",
          attrs: {
            required: true,
          },
        }),
        new Input({
          className: "auth__field",
          name: "lastName",
          placeholder: "Last name",
          attrs: {
            required: true,
          },
        }),
        new Input({
          className: "auth__field",
          type: "number",
          name: "age",
          placeholder: "Age",
          attrs: {
            required: true,
          },
        }),
        new Input({
          className: "auth__field",
          type: "email",
          name: "email",
          placeholder: "E-mail",
          attrs: {
            required: true,
          },
        }),
        new InputWithIcon({
          wrapperClassName: "auth__field",
          inputAttrs: {
            name: "password",
            type: "password",
            placeholder: "Password",
            required: true,
          },
          icon: '<i class="fas fa-eye input-with-icon__icon auth__icon"></i>',
        }),
        new InputWithIcon({
          wrapperClassName: "auth__field",
          inputAttrs: {
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm password",
            required: true,
          },
          icon: '<i class="fas fa-eye input-with-icon__icon auth__icon"></i>',
        }),
      ])
      .findNode(".auth__btn")
      .text("Sign In")
      .findNode(".auth__title")
      .text("Sign Up");
  }

  _handleToggleForm() {
    if (this._mode === SIGN_IN) {
      this._mode = SIGN_UP;

      this._drawSingUpForm();
    } else {
      this._mode = SIGN_IN;

      this._drawSingInForm();
    }
  }
}
