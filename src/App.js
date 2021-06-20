import { Component } from "./core/Component";
import { Header, Sidebar, Main, Footer } from "./components";
import "./App.scss";
export class App extends Component {
  constructor() {
    const sidebar = new Sidebar();
    const main = new Main();
    super({
      className: "app",
      html: `
      <div class="app__content">
      ${sidebar.toHTML()}
      ${main.toHTML()}
      </div>`,
    });
    // const header = new Header();
    // const footer = new Footer();

    // const content = document.createElement("div");
    // content.className = "content";
    // content.append(sidebar.toNode(), main.toNode());

    // this._node.append(header.toNode(), content, footer.toNode());
    this.findNode(".app__content").before(new Header()).after(new Footer());
  }
}
