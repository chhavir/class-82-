
canvas= document.getElementById("canvas-1");
ctx= canvas.getContext("2d");
var lp_x;
 var lp_y;

color= "red";
mylineWidth= 2 ;
radius= 30;

var mouseEvent= "empty";


canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e)
{
    color= document.getElementById("color").value;
    mylineWidth= document.getElementById("width_of_line");
    radius= document.getElementById("radius").value;
    mouseEvent= "mouseDown";
}
canvas.addEventListener("mousemove" , mymousemove)
function mymousemove(e)
{
    mylineWidth= document.getElementById("width_of_line").value;
    color= document.getElementById("color").value;
    mouse_x= e.clientX-canvas.offsetLeft;
    mouse_Y= e.clientY-canvas.offsetTop;
    if(mouseEvent== "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= mylineWidth;
        console.log(lp_x,lp_y);
        ctx.moveTo(lp_x,lp_y);
        ctx.lineTo(mouse_x,mouse_Y);
        ctx.stroke(); 
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);     
    }
    console.log(lp_x,lp_y);

lp_x= mouse_x;
lp_y= mouse_Y;
   
}

canvas.addEventListener("mouseup" , mymouseup)
canvas.addEventListener("mouseleave" , mymouseleave)
function mymouseup(e)
{
    mouseEvent= "mouseup";
}

function mymouseleave(e)
{
    mouseEvent= "mouseleave";
}



function clear_area()
{
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
}