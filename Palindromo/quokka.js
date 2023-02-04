function palindromo(cadena){
let array = cadena.split("");
let reverse = array.reverse();
return cadena == reverse.join("") ? "si es palindromo" : "No es palindromo"

}
console.log(palindromo("yaay"))
