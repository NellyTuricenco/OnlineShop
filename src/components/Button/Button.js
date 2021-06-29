import cn from "classnames";

import { Component } from "../../core";
import "./Button.scss";

export class Button extends Component {
  constructor({ className, title, attrs = {}, text, html } = {}) {
    super({
      tagName: "button",
      className: cn("btn", {
        [className]: className,
      }),
      attrs: {
        title,
        ...attrs,
      },
      text,
      html,
    });
  }
}
