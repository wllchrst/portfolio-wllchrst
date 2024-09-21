import { Main } from "../main";

export default class Character {
  main: Main;

  constructor() {
    this.main = Main.getInstance();
    this.preload();
    this.create();
    this.update();
  }

  preload() {}

  create() {}

  update() {}
}
