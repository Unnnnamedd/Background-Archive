import { Input } from './input.js';
import { TypingAnimation } from './typingAnimation.js';
import('./init.js')
  .then((module) => {
    console.log('init.js loaded');
    module.Init.run();
  })
  .catch((error) => {
    console.error('Error loading module init.js:', error);
  });

export class App {
  static deltaTime = 0;
  static lastTime = 0;
  static loop(t) {
    this.deltaTime = (t - this.lastTime) / 1000;
    this.lastTime = t;
    //  other loops
    TypingAnimation.loop();
    //  not in final place; will be moved
    document.getElementById('glowing-circle').style.transform = `translate(${Input.mouse.x}px, ${Input.mouse.y}px)`;
    requestAnimationFrame((t) => App.loop(t));
  }
}
requestAnimationFrame((t) => App.loop(t));
