import cn from "classnames";

import { Component } from "../../core/Component";
import "./Button.scss";

export class Button extends Component {
  constructor({ className, text, attrs } = {}) {
    super({
      tagName: "button",
      className: cn("btn", {
        [className]: className,
      }),
      attrs,
      text,
    });
  }
}
