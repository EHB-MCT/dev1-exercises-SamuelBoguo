"use strict";

let canvas = document.querySelector("canvas"); 
canvas.width = window.innerWidth;
canvas.heigt = window.innerHeight;
let context = canvas.getContext("2d");

let width =context.canvas.width;
let heigt =context.canvas.height;

let argin = 50;
let spacing = 50;

drawLines();

function drawLines() { 

    context.beginPath();
    context.moveTo(argin, 50);
    context.lineTo(width );
    context.lineTo();
    context.lineTo();
    context.lineTo();
    context.lineTo();
    context.lineTo();
    context.lineTo();
    context.lineTo();
    context.stroke();


}

