"use strict";


let canvas = document.querySelector("canvas"); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width =context.canvas.width;
let heigt =context.canvas.height;

let size = 500;
let randomX = Math.floor(Math.random()*(width-size));
let randomY = Math.floor(Math.random()*(heigt-size));

for(let i = 0;i < 10;i++){
    size-=40;
    drawRect();
}

function drawRect(){
    context.fillStyle = getRandomColor();
    let positionX = window.innerWidth/2-size/2;
    let positionY = window.innerHeight/2-size/2;
    context.fillRect(positionX, positionY, size, size);
}

function getRandomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" +r+ "," +g+ "," +b+ ")";
}

