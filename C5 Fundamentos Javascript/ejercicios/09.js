function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
  if (valor === null || valor === undefined) {
    console.log(true)
  } else {
    console.log (false)
  }
}
esNuloOIndefinido(null)
module.exports = esNuloOIndefinido;