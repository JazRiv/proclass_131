img = "";

function setup(){
    canvas = createCanvas(400, 400);
}

function preload(){
    img = loadImage(localStorage.getItem("lugar")); 
}

function draw(){
    image(img, 0, 0, 400, 400);
}