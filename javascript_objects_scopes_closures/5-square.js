#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      Object.create(null);
    }
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      console.log("X".repeat(this.width));
    }
  }

  rotate() {
    [this.height, this.width] = [this.width, this.height];
  }

  double() {
    this.height *= 2;
    this.width *= 2;
  }
}

module.exports = Rectangle;

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  charPrint(c) {
    if (c !== undefined) {
      for (let i = 0; i < this.size; i++) {
        console.log("c".repeat(this.size));
      }
    } else {
      for (let i = 0; i < this.size; i++) {
        console.log("X".repeat(this.size));
      }
    }
  }
}
module.exports = Square;
