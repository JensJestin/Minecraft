var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
playerX = 10;
playerY = 10;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;

        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown );

function my_keydown(e)
{
    keyPressed =e.keyCode;
    if(e.shiftKey == true && keyPressed == '80')
    {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }  
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }      
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }  
    if(keyPressed == '87')
    {
        new_image('wall.jpg');
        console.log("w");
    }  
    if(keyPressed == '71')
    {
        new_image('ground.png');
        console.log("g");
    }
    if(keyPressed == '76')
    {
        new_image('light_green.png');
        console.log("l");
    }  
    if(keyPressed == '84')
    {
        new_image('trunk.jpg');
        console.log("t");
    } 
    if(keyPressed == '82')
    {
        new_image('roof.jpg');
        console.log("r");
    } 
    if(keyPressed == '89')
    {
        new_image('yellow_wall.png');
        console.log("y");
    } 
    if(keyPressed == '68')
    {
        new_image('dark_green.png');
        console.log("d");
    } 
    if(keyPressed == '85')
    {
        new_image('different.png');
        console.log("u");
    } 
    if(keyPressed == '67')
    {
        new_image('cloud.jpg');
        console.log("c");
    } 
}
function up()
{
    if(playerY >0)
    {
     playerY = playerY - block_image_height;
     canvas.remove(player_object);
     player_update();
    }
}

function down()
{
    if(playerY <500)
    {
        playerY = playerY + block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(playerX >0)
    {
        playerX = playerX - block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(playerY <850)
    {
        playerX = playerX + block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}