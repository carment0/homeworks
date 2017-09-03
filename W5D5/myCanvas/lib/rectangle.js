class Rectangle {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
  }

  draw() {
    this.ctx.fillStyle = 'rgb(600, 700, 20)';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}

module.exports = Rectangle;
