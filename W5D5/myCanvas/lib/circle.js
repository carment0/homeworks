class Circle {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
    this.ctx.strokeStyle = "blue";
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
    this.ctx.fillStyle = 'rgb(400, 3, 103)';
    this.ctx.fill();
  }
}

module.exports = Circle;
