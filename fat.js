const fat = (x) => {
  if (x === 1) return x;
  return x * fat(x - 1);
};

const fat5 = fat(6);
console.log(fat5);
