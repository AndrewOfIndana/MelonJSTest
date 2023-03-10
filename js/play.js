game.PlayScreen = me.Stage.extend({
  /**
   *  action to perform on state change
   */
  onResetEvent: function () {
    me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);

    this.player = new PlayerEntity();
    me.game.world.addChild(this.player, 1);

    this.enemyManager = new EnemyManager();
    this.enemyManager.createEnemies();
    me.game.world.addChild(this.enemyManager, 2);

    me.input.bindKey(me.input.KEY.LEFT, "left");
    me.input.bindKey(me.input.KEY.RIGHT, "right");
    me.input.bindKey(me.input.KEY.A, "left");
    me.input.bindKey(me.input.KEY.D, "right");
  },

  onDestroyEvent: function () {
    me.input.unbindKey(me.input.KEY.LEFT);
    me.input.unbindKey(me.input.KEY.RIGHT);
    me.input.unbindKey(me.input.KEY.A);
    me.input.unbindKey(me.input.KEY.D);
  },
});
