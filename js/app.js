"use strict"

let img = new Image();
let canvas = d3.select("canvas").node();
let ctx = canvas.getContext("2d");

img.src = "/img/mother_of_god.jpg";
img.onload = function(x) {
  console.log(x);
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0,0);
}
