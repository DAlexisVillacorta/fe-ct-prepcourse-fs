function sonIguales(x, y) {
  // La función recibe dos argumentos llamados "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 5, 5 ---> true 
  // 5, 8 ---> false 9 === 9
  // Tu código:
  if (x === y) {
    console.log (true);
  } else {
    console.log (false);
  }
}
sonIguales(5, 9)
module.exports = sonIguales;