AFRAME.registerComponent("look-controls-onfullscreen", {
  schema: {
  },

  onEnterFullscreen: function() {
    let camera = this.el.querySelector("[look-controls-enabled='false']");
    if (camera) {
      this.data.lastPosition = camera.getAttribute("position");
      this.data.lastRotation = camera.getAttribute("rotation");
      camera.setAttribute("look-controls-enabled", "true");
    }
  },

  onExitFullscreen: function() {
    let camera = this.el.querySelector("[look-controls-enabled='true']");
    if (camera) {
      camera.setAttribute("position", this.data.lastPosition);
      camera.setAttribute("rotation", this.data.lastRotation);
      camera.setAttribute("look-controls-enabled", "false");
    }
  },

  init: function() {
    this.el.addEventListener('enter-vr', this.onEnterFullscreen.bind(this));
    this.el.addEventListener('exit-vr', this.onExitFullscreen.bind(this));
  }
});
