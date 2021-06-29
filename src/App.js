import { Component } from "./core";
import { Header, Toolbar, Sidebar, Main, Footer } from "./components";
import "./App.scss";
export class App extends Component {
  constructor({ gs, title, categories }) {
    const sidebar = new Sidebar();
    const main = new Main({ gs });
    super({
      className: "app",
      html: `
      <div class="app__content content-wrapper">
      ${sidebar.toHTML()}
      ${main.toHTML()}
      </div>`,
    });

    this.findNode(".app__content")
      .before([new Header({ title }), new Toolbar({ gs, categories })])
      .after(new Footer());
  }
}
