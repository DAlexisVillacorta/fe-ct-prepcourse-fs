function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
  if (num % 2 === 1) {
    console.log (true);
  } else {
    console.log (false);
  }
}
esImpar (2)
module.exports = esImpar;