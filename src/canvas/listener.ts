import { Main } from "./main";

export class Listener {
  main: Main;

  constructor() {
    this.main = Main.getInstance();

    this.addListeners();
  }

  addListeners() {
    window.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();
      this.main.inputs.set(key, true);
    });

    window.addEventListener("keyup", (event) => {
      const key = event.key.toLowerCase();
      this.main.inputs.set(key, false);
    });
  }
}
