let JavaScript = true;
let prom = new Promise((resolve, reject) => {
  if (JavaScript) {
    resolve(`Javascript is a Programming Language`);
  } else {
    reject(`Error`);
  }
});

prom.then((abc) => {
  console.log(abc);
}).catch((xyz) => {
  console.log(xyz);
});
