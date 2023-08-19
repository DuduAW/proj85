canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
greencar_width = 75;
greencar_height =100;


backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";


greencar_x=5;
greencar_y=225;


function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = backgroundImage;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencarImage;
}
function uploadbackground () {
	ctx.drawImage(background_imgTag,0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y, greencar_width, greencar_height);	
}

	



window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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

}

function up()
        {
            if(greencar_y >=0)
            {
                greencar_y=greencar_y - 10;
                console.log("quando a seta para cima e pressionada, x=" + greencar_x + " | y ="+greencar_y);
                uploadbackground();
                uploadgreenCar();
            }
        }
        
        
        function down()
        {
            if(greencar >=500)
            {
                greencar_y = greencar_y + 10;
                console.log("quando a seta para baixo e pressionada, x=" + greencar_x + " | y ="+greencar_y);
                uploadbackground();
                uploadgreenCar();
            }
        }
        
        
        function left()
        {
            if(greencar_y >=0)
            {
                greencar_x =greencar_x - 10;
                console.log("quando a seta para esquerda e pressionada, x=" + greencar_x+ " | y ="+greencar_y);
                uploadbackground();
                uploadgreenCar();
            }
        }
        
        function right()
        {
            if(greencar >=700)
            {
                greencar_x = greencar_x + 10;
                console.log("quando a seta para direita e pressionada, x=" + greencar_x + " | y ="+greencar_y);
                uploadbackground();
                uploadgreenCar();
			}
		}
			
