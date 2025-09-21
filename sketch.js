let columns = 6;
let rows = 6;
let colSize, rowSize;
let specialI, specialJ;

function setup() {
  createCanvas(600, 400);
  colSize = width / columns;
  rowSize = height / rows;

  specialI = floor(random(columns));
  specialJ = floor(random(rows));
}

function draw() {
  background(100, 93, 100);
  
  let size = min(colSize, rowSize);
  
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      
      if (i === specialI && j === specialJ) {
        fill('#EF8EFF');  
      } else {
        fill(220);        
      }
      
      square(i * colSize, j * rowSize, size, 8);
    }
  }
}

 


