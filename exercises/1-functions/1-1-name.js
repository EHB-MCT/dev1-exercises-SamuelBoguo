"use strict";

alert("rest")

const canvas = document.getElementById("canvas") 
canvas.width = window.innerWidth
canvas.heigt = window.innerHeight
const context = canvas.getContext("2d")


context.beginPath();
context.moveTo(300,100)
context.lineTo(100,100)
context.lineTo(100,300)
context.lineTo(300,300)
context.lineTo(300,500)
context.lineTo(100,500)
context.strokestyle = "red"
context.stroke();


context.beginPath();
context.moveTo(400,500)
context.lineTo(500,100)
context.lineTo(600,500)
context.moveTo(450,300)
context.lineTo(550,300)
context.strokestyle = "green"
context.stroke();


context.beginPath();
context.moveTo(700,500)
context.lineTo(700,100)
context.lineTo(850,200)
context.lineTo(1000,100)
context.lineTo(1000,500)
context.strokeStyle = "orange"
context.stroke();


context.beginPath();
context.moveTo(1100,100)
context.lineTo(1100,500)
context.lineTo(1300,500)
context.lineTo(1300,100)
context.strokestyle = "yellow"
context.stroke();


context.beginPath();
context.moveTo(1600,100)
context.lineTo(1400,100)
context.lineTo(1400,500)
context.lineTo(1600,500)
context.moveTo(1400,300)
context.lineTo(1600,300)
context.strokeStyle = "blue"
context.stroke();


context.beginPath();
context.moveTo(1700,100)
context.lineTo(1700,500)
context.lineTo(1900,500)
context.strokeStyle = "pink"
context.stroke();