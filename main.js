canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var mouseEvent = "";
canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mousemove", my_mousemove);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mouseleave", my_mouseleave);
canvas.addEventListener("touchmove", my_touchmove);
canvas.addEventListener("touchstart", my_touchstart);
var last_position_of_touch_x = 0;
var last_position_of_touch_y = 0;

function my_touchmove(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}


function my_mousemove(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;    
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();    
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y)
        ctx.lineTO(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y
}

function my_mouseleave(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    
}

function my_touchstart(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "touchStart";
}


function my_mouseup(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseUp";
}

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}