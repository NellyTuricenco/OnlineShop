import cn from "classnames";

import { Component } from "../../core";
import { Input } from "../";
import "./InputWithIcon.scss";

const DEFAULT_INPUT_ATTRS = {
  type: "text",
  autocomplete: "off",
};

export class InputWithIcon extends Component {
  constructor({
    wrapperClassName,
    inputClassName,
    wrapperAttrs,
    inputAttrs = DEFAULT_INPUT_ATTRS,
    icon = '<i class="fas fa-search input-with-icon__icon"></i>',
  } = {}) {
    super({
      className: cn("input-with-icon", {
        [wrapperClassName]: wrapperClassName,
      }),
      attrs: wrapperAttrs,
      html: icon,
    });
    this.prepend(
      new Input({
        className: cn("input-with-icon__input", {
          [inputClassName]: inputClassName,
        }),
        attrs: {
          ...inputAttrs,
          type: inputAttrs.type || DEFAULT_INPUT_ATTRS.type,
          autocomplete:
            inputAttrs.autocomplete || DEFAULT_INPUT_ATTRS.autocomplete,
        },
      })
    );
  }
}
