const Squarebase = require("./5-square");

class Square extends Squarebase {
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
