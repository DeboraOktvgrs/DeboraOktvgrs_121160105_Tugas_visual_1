let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j=0;
}

function draw() {
  var r=1+4*Math.cos(PI*j/20)
  j+=1
  
  background(220);
  background(0,0,0)
  stroke(255,255,255)
  line(200,0,200,200)
  stroke(255,255,255)
  fill(255 ,255,255)
  
  //codingan makanan packman
  ellipse(350,90+2*3*r,20,20)
  ellipse(300,90+2*r,20,20)
  ellipse(250,90+r,20,20)
  fill(255,255,0)
  stroke(255,255,0)
 
  //codingan packman
  arc(90 ,90,75,75,radians(30),radians(-30))
  fill(255,255,255)
  fill(255,255,255)

}