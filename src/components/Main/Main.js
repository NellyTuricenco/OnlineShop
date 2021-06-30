import { Component } from "../../core";
import { Products, Pagination } from "../";
import "./Main.scss";

export class Main extends Component {
  constructor({ gs, perPage }) {
    super({
      tagName: "main",
      className: "main",
      children: [
        new Products({ gs, perPage }),
        new Pagination({ gs, perPage }),
      ],
    });
  }
}
