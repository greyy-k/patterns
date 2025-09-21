let columns = 9;
let rows = 9;
let colSize; let rowSize;
let specialI; let specialJ;

function setup() {
  createCanvas(600, 400);
  colSize = width / columns;
  rowSize = height / rows;
  
  specialI = floor(random(columns));
  specialJ = floor(random(rows));
}

function draw() {
  background(220);
  
  let size = min(colSize, rowSize)
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      
      if (i === specialI && j === specialJ) {
        circle(i * colSize + colSize/2, j * rowSize + rowSize/2, size * 0.6);
      } else {
        fill(79, 2, 15);                      
        circle(i * colSize + colSize/2, j * rowSize + rowSize/2, size * 0.8);
}
      
    }
  }
}