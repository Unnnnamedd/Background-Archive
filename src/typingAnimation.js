import { App } from './main.js';
export class TypingAnimation {
  static typing = false;
  static pause = false;
  static accumulator = {
    typing: {
      value: 0,
      limit: 0.2
    },
    pause: {
      value: 0,
      limit: 0.8
    }
  };
  static loop() {
    if (this.accumulator.typing.value >= this.accumulator.typing.limit) {
      this.accumulator.typing.value -= this.accumulator.typing.limit;
    }
    if (this.accumulator.pause.value >= this.accumulator.pause.limit) {
      this.accumulator.pause.value -= this.accumulator.pause.limit;
    }
    this.accumulator.typing.value += App.deltaTime;
    this.accumulator.pause.value += App.deltaTime;
  }
}
