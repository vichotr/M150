//variables for sauce and pepperoni
var sauceFill;
var roni;
function setup() {
  createCanvas(400, 400);
  // crust 
  sauceFill = color(253, 255, 235);
  fill(227, 178, 43);
  ellipse( width/2, height/2, width, height);
  fill(0);
  text ("Press 1, 2 ,3 ,or 4 to change topping and press 5 to add pepperoni", 0, height-20);
  roni=false;
  
}

function draw() {
 
  if (mouseIsPressed){
    push();       
    fill (sauceFill);
    noStroke();
  ellipse(mouseX, mouseY, 50, 50);   
    pop();
  }
    
    if(roni){
    for(i=0; i<12;i++){
    push();
    translate(width/2,height/2);
    fill(255,0,0)
    ellipse(30*(cos(i*radians(30))),30*(sin(i*radians(30))), 20,20)
    ellipse(60*(cos(i*radians(30))),60*(sin(i*radians(30))), 20,20) 
    ellipse(90*(cos(i*radians(30))),90*(sin(i*radians(30))), 20,20)
    ellipse(120*(cos(i*radians(30))),120*(sin(i*radians(30))), 20,20)
    ellipse(160*(cos(i*radians(30))),160*(sin(i*radians(30))), 20,20)
    pop();
    
      }
  
} 
  
}

function keyPressed(){
 if (key=='1'){
   sauceFill = color(255,0,0);
 } else  if (key == '2'){
   sauceFill= color(242, 242, 133);
 } else if (key == '3'){
   sauceFill= color(139, 181, 94);
 }else if (key == 4){
  sauceFill = color(255,255,255)
 }

}

function keyPressed(){
  if (key=='5'){
    roni=!roni;
  }
}

