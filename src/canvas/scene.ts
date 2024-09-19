export default class Scene extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
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
  }

  update() {}
}
