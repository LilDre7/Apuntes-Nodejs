console.log("Hello World");

const fs = requerid('fs');


// Asincrono
// const input = fs.readFileSync('input.txt', 'utf8');

// Sincrono
const input = fs.readFile('input.txt', 'utf8' , (err, data) => {
  console.log(data);
});

console.log("Me he ejecutado despues de la lectura");
