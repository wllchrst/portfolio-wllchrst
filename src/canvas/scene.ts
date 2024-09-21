import { Listener } from "./listener";
import MainCharacter from "./object/main-character";
import Setting from "./tools/setting";

export default class Scene extends Phaser.Scene {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | null = null;
  mainCharacter: MainCharacter | null = null;

  constructor() {
    super();
  }

  preload() {
    this.load.image(
      "aubrey",
      "../../public/Sprites/aubrey/walking/forward/0.png"
    );

    this.load.image(
      "PC Computer - Omori - Faraway Town Buildings Day",
      "../../public/Sprites/PC Computer - Omori - Faraway Town Exterior Day.png"
    );

    this.load.image(
      "PC Computer - Omori - Faraway Town Exterior Day",
      "../../public/Sprites/PC Computer - Omori - Faraway Town Buildings Day.png"
    );

    this.load.tilemapTiledJSON(
      "tilemap",
      "../../public/Sprites/tilemap-data.json"
    );

    new Listener();
  }

  create() {
    // create the Tilemap
    const map = this.make.tilemap({ key: "tilemap" });

    // add the tileset image we are using
    const tileset = map.addTilesetImage(
      "PC Computer - Omori - Faraway Town Exterior Day",
      "PC Computer - Omori - Faraway Town Buildings Day"
    );

    if (tileset == null) return;

    const layerNames = [
      "Ground",
      "Tree",
      "Basketball Base",
      "Basketball court",
      "Decoration",
      "RightBuilding",
      "RightBuildingDecoration",
    ];

    for (const name of layerNames) {
      map.createLayer(name, tileset);
    }

    const mainCharacterSprite = this.physics.add.sprite(200, 200, "aubrey");
    this.mainCharacter = new MainCharacter(mainCharacterSprite);

    this.cameras.main.setBounds(0, 0, 2560, 1280);
    this.cameras.main.startFollow(this.mainCharacter.character);
    this.cameras.main.setZoom(1.5);

    if (this.input.keyboard == null) return;
    // Create key objects for the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.mainCharacter != null) this.mainCharacter.update();
  }
}
