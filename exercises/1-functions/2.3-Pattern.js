"use strict";


let canvas = document.querySelector("canvas"); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width =context.canvas.width;
let height =context.canvas.height;

let rect1width = width;
let rect1height = height;
context.fillStyle = "blue";
context.fillRect(0, 0, rect1width, rect1height);

let rect2width = width;
let rect2height = height/3;
context.fillStyle = "lightblue";
context.fillRect(0, height/3*2, rect2width, rect2height);

let rect3width = width/3;
let rect3height = height;
context.fillStyle = "grey";
context.fillRect(width/3, 0, rect3width, rect3height);

let rect4width = width;
let rect4height = height/3;
context.fillStyle = "red";
context.fillRect(0, height/6, rect4width, rect4height);