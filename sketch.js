var ball;

function setup(){
    createCanvas(500,500);
    
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    dbref = database.ref('ball/position')
    dbref.on("value",readposition)

    console.log(dbref)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    dbref.update({
        'x': position.x+x,
        'y':position.y+y
    })
    
}

function readposition(data){
    position = data.val()
    console.log(position)
    ball.x = position.x
    ball.y = position.y
}
