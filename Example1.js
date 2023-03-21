let Age1 = 26;
let Age2 = 29;
let prom = new Promise((resolve, reject) => {
  if (Age1 > Age2) {
    resolve(`Age 1 is big`);
  } else {
    reject(`Age 2 is big`);
  }
});

prom.then((about) => {
  console.log(about);
}).catch((about) => {
  console.log(about);
});
