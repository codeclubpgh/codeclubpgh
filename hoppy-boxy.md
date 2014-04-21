# Hoppy Boxy

So, we want to create a semi-simple game that is reminiscent of the
game "Flappy Bird".

Here is some example code that implements a very basic version of a
moving on-screen character that can increase and decrease in height:
(code may also be found at http://is.gd/oxoqum)

    var boxDistanceFromGround = 22;
    var boxSpeed = 1;
    
    var isThrustEngaged = false;
    
    frameRate(30);
    
    var drawBox = function()
    {
        var boxHeight = 50;
        var boxWidth = 50;
        rect(10, height - boxDistanceFromGround - boxHeight, boxWidth, boxHeight, 1);
    };
    
    var applyGravityToSpeed = function(){
        boxSpeed = boxSpeed - 1;
    };
    
    var applyThrustToSpeed = function(){
        if(isThrustEngaged){
            boxSpeed = boxSpeed + 2;
        }
    };
    
    var applySpeedToBoxDistanceFromGround = function(){
        boxDistanceFromGround = boxDistanceFromGround + boxSpeed;
        
        if(boxDistanceFromGround < 1){
            boxDistanceFromGround = 1;
            boxSpeed = 0;
        }
    };
    
    var draw = function() {
        background(209, 244, 255);
        applyGravityToSpeed();
        applyThrustToSpeed();
        applySpeedToBoxDistanceFromGround();
        drawBox();
    };
    
    
    var keyPressed = function() {
        if(key.toString() === " "){
            isThrustEngaged = true;
        }
    };
    
    var keyReleased = function() {
        if(key.toString() === " "){
            isThrustEngaged = false;
        }
    };


Start working on your own version that does something similar. Next
week we will build off of this base to get our character to scroll
forward.



