
function setup() {
  createCanvas(400, 400)
  noStroke()
  colorMode(HSB, 360, 100, 100, 100)
  background(320, 50, 100, 100)

}


function draw() {
  console.log(mouseX, mouseY)

  noStroke()
  
//ghost body - maybe change to radial grad
  
  push()
  linearGradient(
    200, 200,
    200, 325,
    
    color(0, 0, 100, 100),
    color(0, 0, 0, 100))
  ellipse(width/2, height/2, 200)
  pop()
  
  //ghost bottom attempt
    noFill()
  
  strokeWeight(4)

  strokeWeight(4)
  stroke(0, 0, 100, 100)

  beginShape()

  bezier(50, 350, 80, 380, 40, 60, 200, 40); 

  bezier(50, 350, 60, 360, 80, 360, 100, 340); 

  bezier(100, 340, 110, 320, 150, 320, 160, 340);

  bezier(160, 340, 170, 360, 230, 360, 240, 340);
  
  bezier(240, 340, 250, 320, 290, 320, 300, 340);

  bezier(350, 350, 340, 360, 320, 360, 300, 340); 

  endShape()


  bezier(110, 120, 110, 75,155, 30, 200, 30);






//arm attempts

// push()
// radialGradient(
//   50, 135,
//   0,
//   50, 135,
//   30,
//   color(0, 0, 0, 40),
//   color(0, 0, 0, 100))
// beginShape()
// vertex(100, 180)
// vertex(60, 120)
// vertex(24, 120)
// vertex(100, 280)
// endShape()
// pop()
  
  // push()
  // radialGradient(
  //   50, 135,
  //   0,
  //   50, 135,
  //   30,
  //   color(0, 0, 0, 40),
  //   color(0, 0, 0, 100))
  // beginShape()
  // vertex(100, 180)
  // bezierVertex(38, 230, 20, 100, 60, 120)
  // bezierVertex(80, 70, -80, 70, 24, 120)
  // endShape()
  // pop()
  
  
  
  
//left eye
  
  push()
  radialGradient(
    160, 180,
    0,
    160, 180,
    30,
    color(0, 0, 0, 40),
    color(0, 0, 0, 100))
  ellipse(160, 180, 50)
  pop()
  

  
//right eye
  
  push()
  radialGradient(
    240, 180,
    0,
    240, 180,
    30,
    color(0, 0, 0, 40),
    color(0, 0, 0, 100))
  ellipse(240, 180, 50)
  pop()

  

//mouth
  // noStroke()
  // fill(0, 0, 0, 100)
  // arc(200, 240, 30, 50)
  
  //right arm line attempt
  

  
  noFill()
  stroke(0, 0, 100, 100)
  strokeWeight(30)
  bezier(290, 240, 330, 200, 340, 130, 335, 120)
  bezier(290, 180, 330, 200, 340, 130, 335, 120)
  //bez anchor, control, control, anchor
  

}




//------------FUNCTIONS--------------------

  function linearGradient(nx, ny, sx, sy, colorN, colorS){
    let gradient = drawingContext.createLinearGradient(nx, ny, sx, sy)
  
  gradient.addColorStop(0, colorN)
  gradient.addColorStop(1, colorS)
  
  drawingContext.fillStyle = gradient
  }
    
    //-----------------------------
    
  function radialGradient(nx, ny, nr, sx, sy, sr, colorN, colorS){
    let gradient = drawingContext.createRadialGradient(nx, ny, nr, sx, sy, sr)
  
  gradient.addColorStop(0, colorN)
  gradient.addColorStop(1, colorS)
  
  drawingContext.fillStyle = gradient
    
    
  }

