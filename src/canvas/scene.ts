export default class Scene extends Phaser.Scene {
  aubrey: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | null = null;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | null = null;
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

    this.aubrey = this.physics.add.sprite(200, 200, "aubrey");

    this.cameras.main.setBounds(0, 0, 2560, 1280);
    this.cameras.main.startFollow(this.aubrey);
    this.cameras.main.setZoom(1.5);

    if (this.input.keyboard == null) return;
    // Create key objects for the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.aubrey == null) return;
    else if (this.cursors == null) return;

    this.aubrey.x += 5;
    console.log("here");
  }
}
