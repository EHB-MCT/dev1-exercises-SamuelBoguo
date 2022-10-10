"use strict"

alert(rest)

drawLine();
function drawLine()


context.beginPath();
context.moveTo(50,50);
context.lineTo(200,50);
context.lineTo(200,200);
context.lineTo(50,200);
context.strokeStyle = "black";
context.stroke();


context.beginPath();
context.moveTo(50,50);
context.lineTo(200,200);
context.strokeStyle = "red";
context.stroke();

context.beginPath();
context.moveTo(50,200);
context.lineTo(200,50);
context.strokeStyle = "red";
context.stroke();