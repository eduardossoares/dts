const sauda2 = (name) => {
  console.log(`Como você está, ${name}?`);
};

const bye = () => {
  console.log("tchau!");
};

const sauda = (name) => {
  console.log(`Olá, ${name}`);
  sauda2(name);
  console.log("Preparando tchau...");
  bye();
};

sauda("Maggie");
