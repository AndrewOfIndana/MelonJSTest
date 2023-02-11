class EnemyEntity extends me.Sprite {
  constructor(x, y) {
    let image = new Image();
    image.src =
      "data:image/png;base64,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";
    super(x, y, {
      image: image,
      framewidth: 32,
      frameheight: 32,
    });

    // give the sprite a physics body so it can collide and stuff
    this.body = new me.Body(this);
    this.body.addShape(new me.Rect(0, 0, this.width, this.height));

    // ignore gravity so the ship doesn't fall through the bottom of the screen
    this.body.ignoreGravity = true;
  }
}
