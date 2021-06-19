import { App } from "./App";
import "./styles/index.scss";

const app = new App();

const root = document.getElementById("root");
root.append(app.toNode());
