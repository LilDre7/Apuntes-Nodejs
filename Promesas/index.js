// !! Promesas con nodejs con NEW // 
function esperar(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}


// ** Promesas en Nodejs ** //
async function saludar(nombre) {
  console.log("Hola " + nombre);
  setTimeout(() => {
    console.log("Como estas bby");
  } , 2000)
  await esperar(3000);
  console.log("Adios " + nombre);
  await esperar(5000);
  console.log("No te vayas mi amor" + nombre);
}

saludar("Estefany");

