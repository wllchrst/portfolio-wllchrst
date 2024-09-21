import Character from "../parent/character";
import Setting from "../tools/setting";

export default class MainCharacter extends Character {
  inputs: Map<string, boolean>;
  character: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  constructor(character: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody) {
    super();

    console.log(`FROM MAIN CHARACTER ${this.main.inputs}`);

    this.inputs = this.main.inputs;
    this.character = character;
  }

  update() {
    this.movement();
  }

  // control movement of the main character based on the input.
  movement() {
    if (this.inputs == undefined) return;
    const left = this.inputs.has("a") ? this.inputs.get("a") : false;
    const right = this.inputs.has("d") ? this.inputs.get("d") : false;
    const up = this.inputs.has("w") ? this.inputs.get("w") : false;
    const down = this.inputs.has("s") ? this.inputs.get("s") : false;

    const power = Setting.movePower;

    if (left == true) {
      this.character.x -= power;
    } else if (right == true) {
      this.character.x += power;
    } else if (down == true) {
      this.character.y += power;
    } else if (up == true) {
      this.character.y -= power;
    }
  }
}
