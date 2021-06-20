import { Component } from "./core/Component";
import { Header, Sidebar, Main, Footer } from "./components";
export class App extends Component {
  constructor() {
    super({ className: "app" });
    const header = new Header();
    const sidebar = new Sidebar();
    const main = new Main();
    const footer = new Footer();

    const content = document.createElement("div");
    content.className = "content";
    content.append(sidebar.toNode(), main.toNode());

    this._node.append(header.toNode(), content, footer.toNode());
  }
}
