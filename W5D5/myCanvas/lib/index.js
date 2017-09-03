const Rectangle = require('./rectangle.js');
const Circle = require('./circle.js');

document.addEventListener('DOMContentLoaded', function() {
  const canvasEl = document.getElementById('myCanvas');
  canvasEl.height = 500;
  canvasEl.width = 500;

  const context2d = canvasEl.getContext('2d');

  const rect1 = new Rectangle(context2d, 50, 50);
  rect1.draw();

  const cir1 = new Circle(context2d, 50, 50);
  cir1.draw();
});
