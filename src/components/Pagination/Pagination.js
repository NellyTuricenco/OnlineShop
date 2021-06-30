import cn from "classnames";

import { Component } from "../../core";
import { Button } from "../";
import "./Pagination.scss";
import { max } from "bn.js";

export class Pagination extends Component {
  constructor({ gs, perPage, className } = {}) {
    super({
      className: cn("pagination", {
        [className]: className,
      }),
    });
    gs.subscribe(this);

    const { activePage, filteredProducts } = gs.getState();

    const max = Math.ceil(filteredProducts.length / perPage);
    const buttons = [];

    for (let i = 0; i < max; i++) {
      const pageNumber = i + 1;

      buttons.push(
        new Button({
          className: cn("btn--primary pagination__btn", {
            "pagination__btn--active": activePage === pageNumber,
          }),
          attrs: {
            "data-page": pageNumber,
          },
          title: `Page ${pageNumber}`,
          text: pageNumber,
        })
      );
    }
    this.append(buttons);
  }
}
