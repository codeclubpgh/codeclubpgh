/* controlled laughter
   ===================
   
   this simple animation is controlled by the keyboard, and 
   demonstrates how to control the draw loop.
   
   controls:
   space - toggle play/pause
   f     - increase the frequency of the animation
   s     - decrease the frequency of the animation
   F     - increase the change in LOL size per animation
   S     - decrease the change in LOL size per animation
   
*/



// how many times per second does processing try to run the draw() function? 
var currentFrameRate = 20;


// is the draw function currently running? 
// used in play/pause
var isRunning = true;


// controls the appearance of 'LOL'
// how large is LOL currently?
var lolSize                      = 10;

// how much are we changing the size of LOL when draw()ing? 
var lolSizeChange                = 1;

// is the size increasing or decreasing?
// if '1', size will increase; if '-1', size will decrease
var lolSizeChangeDirectionFactor = 1;



// initial set-up
frameRate(currentFrameRate);
fill(255, 255, 255);
var fantasyFont = createFont("fantasy");


// prints information about the current animation
// allows you to see what is going on with the animation internals
var printDebugInfo = function(){
    println("frame-rate: " + currentFrameRate + 
            " running: "   + isRunning + 
            " lolchange: " + lolSizeChange);
};


// when the animation starts, print information
printDebugInfo();


var maybeCorrectSizeChange;




var draw = function() {
    
    // redraw over what was already there
    background(255, 0, 0);

    // set the size that LOL will be
    textFont(fantasyFont, lolSize);

    // actually draw the LOL
    text("LOL", 138, height/2);
    

    // change LOL for the next time this draw() function is called

    // lolSizeChange is the amount of increase or decrease of size;
    // lolSizeChangeDirectionFactor controls whether the 
    //     change will be positive or negative
    var thisChange = lolSizeChange * lolSizeChangeDirectionFactor;


    // add the change to the size for the next time draw() is called
    lolSize = lolSize + thisChange;


    maybeCorrectSizeChange();

};


var maybeCorrectSizeChange = function()
{
    // here, if the size has become too large or too small, 
    // we change the direction factor.
    // if it was -1, it will become 1
    // it it was 1, it will become -1
    if(lolSize > 100 || lolSize < 10){
        lolSizeChangeDirectionFactor = lolSizeChangeDirectionFactor * -1;
    }

};




// controls for the animation
var keyPressed = function(){
    var keyChar = key.toString();
    
    // Speed up the animation
    if(keyChar === 'f'){
        currentFrameRate = currentFrameRate + 5;
        // updates processing with our new frame rate setting
        frameRate(currentFrameRate);
        
    // slow down the animation
    } else if(keyChar === 's'){
        currentFrameRate = currentFrameRate - 5;
        // updates processing with our new frame rate setting
        frameRate(currentFrameRate);

    // increase the change in size per animation
    } else if(keyChar === 'F'){
        lolSizeChange = lolSizeChange + 1;
        
    // decrease the change in size per animation
    } else if(keyChar === 'S'){
        lolSizeChange = lolSizeChange - 1;
    }
    
    // play or pause the animation
    else if(keyChar === ' ') {
        if(isRunning) {
            isRunning = false;
            noLoop();
        } else {
            isRunning = true;
            loop();
        }
    }
    

    // show the new settings every time a key is pressed
    printDebugInfo();
};
