function setup() {
  createCanvas(450, 450, WEBGL);
  angleMode(DEGREES);
  strokeWeight(7);
  noFill();
  stroke(0); // True black for shapes
  describe(
    'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a sphere of black triangles on a turquoise-blue background.'
  );
}

function draw() {
  background(64, 224, 208); // Blue-turquoise background

  // Call every frame to adjust camera based on mouse/touch
  orbitControl();

  // Rotate rings in a half circle to create a sphere of triangles
  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    // Rotate triangles in a full circle to create a ring of triangles
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();

      // Rotate from center of sphere
      rotateZ(zAngle);
      rotateX(xAngle);

      // Then translate down 200 units
      translate(0, 200, 0);

      // Draw triangle
      drawTriangle();
      pop();
    }
  }
}

function drawTriangle() {
  beginShape();
  vertex(-20, -20, 0); // Bottom left
  vertex(20, -20, 0);  // Bottom right
  vertex(0, 20, 0);    // Top center
  endShape(CLOSE);
}