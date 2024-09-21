import * as Phaser from "phaser";
import Scene from "./scene";
import Setting from "./tools/setting";
import { Listener } from "./listener";

export class Main {
  static instance: Main | null;
  game: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: Phaser.Scene;
  inputs: Map<string, boolean>;

  static getInstance(): Main {
    if (this.instance == null) this.instance = new Main();
    return this.instance;
  }

  constructor() {
    this.inputs = new Map();
    console.log(this.inputs);
    this.scene = new Scene();
    this.config = Setting.createConfig(this.scene);

    this.game = new Phaser.Game(this.config);
  }
}

export function startCanvas() {
  Main.getInstance();
}
