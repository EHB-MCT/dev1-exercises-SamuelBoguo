"use strict";


let canvas = document.querySelector("canvas"); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width =context.canvas.width;
let height =context.canvas.height;

context.fillStyle = "yellow";
context.fillRect(0, 0, width, height/4);

context.fillStyle = "orange";
context.fillRect(0,height/4, width, height/4);

context.fillStyle = "red";
context.fillRect(0,height/4*2, width, height/4);

context.fillStyle = "white";
context.beginPath();
context.arc(width/2, height/4*3, width/4, 0, 2*Math.PI, false);
context.fill();

context.fillStyle = "darkblue";
context.fillRect(0, height/4*3, width, height/4);


