# Side scrolling obstacles

Today, the goal is to add side scrolling to the game we started last
week with the jumping box, so it looks like the box is moving to the
right. 

The way we’re actually going to do it is keep the box where it is and
move the background and other elements to the left instead! 

**Step 1**: Define an obstacle object that knows where it should be
 drawn and how to draw itself. This is an example with a red
 rectangle. In the program you started last week (http://is.gd/oxoqum
 if you need it), add something like this to the beginning: 

````
var Obstacle = function(x, y) {
    this.x = x;
    this.y = y;
};

Obstacle.prototype.draw = function() {
    fill(255, 0, 0);
    rect(this.x, this.y, 10, 100);
};
````

**Step 2**: Create a bunch of these obstacles that are spread out
    horizontally and are randomly distributed between 2 vertical
    values. Add this right after the code you just added:

````
var obstacles = [];
for (var i = 0; i < 40; i++) {  
    obstacles.push(new Obstacle(i * 40 + 300, random(20, 260)));
}
````

**Step 3**: Draw the obstacles and move them to the left every time we call the draw loop. Add this code to your draw loop:

````
for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].draw();
    obstacles[i].x -= 1;
}
````

**Step 4**: Change things about this code to be whatever you want! Make the red rectangles be something else, spread them out more, make them move faster or slower, add other background things that look like they’re moving.

Next time we’re going to handle when your character and the elements you added today run into each other!
