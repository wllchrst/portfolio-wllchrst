import * as Phaser from "phaser";
import Scene from "./scene";

export class Main {
  static instance: Main | null;
  game: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: Phaser.Scene;

  static getInstance(): Main {
    if (this.instance == null) this.instance = new Main();
    return this.instance;
  }

  constructor() {
    this.scene = new Scene();

    this.config = {
      type: Phaser.AUTO,
      width: 2560,
      height: 1280,
      scene: this.scene,
    };

    this.game = new Phaser.Game(this.config);
  }
}

export function startCanvas() {
  Main.getInstance();
}
