class PlayerEntity extends me.Sprite {
  /**
   * constructor
   */
  constructor() {
    let image = new Image();
    image.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAnklEQVRYhe2UMQ6CQBBF/xCvYOf9KCw4jQfyBtxBK72DzwYLARHHTVaT/xoSlj/zMjtBMpWJTOiwE+N3+3OuVpMJlSRlDUwmEBH/OYFGkoAWOAKn4dmWbrTYA+h5pn9TbMIKgdke8Sg4DizdaWYHXmV+YwcsYAEL1GQDdHMHa/5u33w/ZLq4wSWk7afhEiBdI2Nekuo7YAELWMACFrgDD+qLOIeIBR8AAAAASUVORK5CYII=";

    super(
      me.game.viewport.width / 2 - image.width / 2,
      me.game.viewport.height - image.height - 20,
      { image: image, width: 32, height: 32 }
    );

    this.velx = 450;
    this.maxX = me.game.viewport.width - this.width;
  }

  /**
   * update the sprite
   */
  update(dt) {
    super.update(dt);

    if (me.input.isKeyPressed("left")) {
      this.pos.x -= (this.velx * dt) / 1000;
    }

    if (me.input.isKeyPressed("right")) {
      this.pos.x += (this.velx * dt) / 1000;
    }

    this.pos.x = me.Math.clamp(this.pos.x, 32, this.maxX);
    return true;
  }

  /**
   * collision handler
   * (called when colliding with other objects)
   */
}
