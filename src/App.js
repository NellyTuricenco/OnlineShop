import { Component } from "./core/Component";
import { Header, Toolbar, Sidebar, Main, Footer } from "./components";
import "./App.scss";
export class App extends Component {
  constructor({ title, products, categories }) {
    const sidebar = new Sidebar();
    const main = new Main({ products });
    super({
      className: "app",
      html: `
      <div class="app__content content-wrapper">
      ${sidebar.toHTML()}
      ${main.toHTML()}
      </div>`,
    });

    this.findNode(".app__content")
      .before([new Header({ title }), new Toolbar({ categories })])
      .after(new Footer());
  }
}
