const regressive = (n) => {
  console.log(n);
  if (n < 1) return;
  regressive(n - 1);
};

regressive(10);
