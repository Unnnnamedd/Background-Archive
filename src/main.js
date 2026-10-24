class app {
  static loop() {
    document.getElementById('glowing-circle').style.transform = `translate(${mouseX}px, ${mouseY}px)`
    requestAnimationFrame(app.loop);
  }
}
let mouseX, mouseY;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
requestAnimationFrame(app.loop);
