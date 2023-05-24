function saludar(nombre , callback) {
  console.log("Hola como estas mi amigo " + nombre );
  setTimeout(() => {
    console.log("Todo bien homie");
    setTimeout(() => {
      console.log("Nos vemos despues");
    } , 2000)
    callback()
  }, 2000)
}

function despedir() {
  console.log("Adios mi estimado amigo");
}
saludar("Lil Dree" , despedir)

