export default class Setting {
  // config for the game
  static createConfig(scene: Phaser.Scene): Phaser.Types.Core.GameConfig {
    return {
      type: Phaser.AUTO,
      width: 2560,
      height: 1280,
      scene: scene,
      fps: {
        limit: 30,
      },
      physics: {
        default: "arcade", // Enable arcade physics
        arcade: {
          gravity: { y: 0, x: 0 }, // Set gravity if needed
          debug: false, // Optionally enable debug mode
        },
      },
    };
  }

  static movePower = 4;
}
