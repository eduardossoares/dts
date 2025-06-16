const findLastSquare = (width, height) => {
  console.log(width, height);
  if (width % height === 0) return console.log("Founded!");
  findLastSquare(height, width % height);
};
findLastSquare(1680, 640);
