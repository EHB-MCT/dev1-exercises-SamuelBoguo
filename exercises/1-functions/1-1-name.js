"use strict";

alert("rest");

const canvas = document.getElementById("canvas"); 
canvas.width = window.innerWidth
canvas.heigt = window.innerHeight
const context = canvas.getContext("2d");


context.beginPath();
context.moveTo(30,10);
context.lineTo(10,10);
context.lineTo(10,30);
context.lineTo(30,30);
context.lineTo(30,50);
context.lineTo(10,50);
context.strokestyle = "red";
context.stroke();


context.beginPath();
context.moveTo(40,50);
context.lineTo(50,10);
context.lineTo(60,50);
context.moveTo(45,30);
context.lineTo(55,30);
context.strokestyle = "green";
context.stroke();


context.beginPath();
context.moveTo(70,50);
context.lineTo(70,10);
context.lineTo(85,20);
context.lineTo(100,00);
context.lineTo(100,50);
context.strokeStyle = "orange";
context.stroke();


context.beginPath();
context.moveTo(110,10);
context.lineTo(110,50);
context.lineTo(130,50);
context.lineTo(130,10);
context.strokestyle = "yellow";
context.stroke();


context.beginPath();
context.moveTo(160,10)
context.lineTo(140,10)
context.lineTo(140,50)
context.lineTo(160,50)
context.moveTo(140,30)
context.lineTo(160,30)
context.strokeStyle = "blue"
context.stroke();


context.beginPath();
context.moveTo(170,10)
context.lineTo(170,50)
context.lineTo(190,50)
context.strokeStyle = "pink"
context.stroke();
