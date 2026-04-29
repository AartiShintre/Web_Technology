let p = new Promise((resolve) => {
  resolve("Done");
});

p.then(res => console.log(res));