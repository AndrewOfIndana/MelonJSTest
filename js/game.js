/* Game namespace */
var game = {
  onload: function () {
    // initialize the display canvas once the device/browser is ready
    if (
      !me.video.init(1218, 562, {
        parent: "screen",
        scale: "auto",
        scaleMethod: "flex-width",
      })
    ) {
      alert("Your browser does not support HTML5 canvas.");
      return;
    }

    // Initialize the audio.
    me.audio.init("mp3,ogg");

    // // allow cross-origin for image/texture loading
    // Load the resources.
    me.loader.preload(new PlayerEntity(), this.loaded.bind(this));
  },
  // Run on game resources loaded.
  loaded: function () {
    me.state.set(me.state.PLAY, new game.PlayScreen());
    // Start the game.
    me.state.change(me.state.PLAY);
  },
};
