const Engine = Matter.Engine; //Universe
const World = Matter.World;  //Earth
const Bodies = Matter.Bodies;  //Physical Bodies

var myEngine, myWorld; //our engine and world objects for this file
var box, ball; //physical bodies

function setup()
{
    createCanvas(800,500);

    //initialising myEngine and myWorld objects
    myEngine=Engine.create();
    myWorld = myEngine.world;

    //declaring options for the body in JSON format
    var box_options={
        isStatic:false,
        restitution:0.8,
        density:1.0
    }

    //adding box to the Physics Engine
    box = Bodies.rectangle(200,200,50,50,box_options);
    World.add(myWorld, box);
    console.log(box)

    var ball_options={
        isStatic:false,
        restitution:0.8,
        density:1.5
    }
    ball=Bodies.circle(300,100,25, ball_options);
    World.add(myWorld,ball);

}

function draw()
{
    background(0);

    Engine.update(myEngine); //refreshing myEngine in every frame-like drawSprites()
    //displaying the box using p5 rect Shape
    rectMode(CENTER);
    fill("yellow")
    rect(box.position.x, box.position.y, 50,50)

    fill("red");
    ellipseMode(CENTER);
    ellipse(ball.position.x, ball.position.y, 50);
}