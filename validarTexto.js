// Colocar en la siguiente variable el texto de entrada que se quiere evaluar
const entryText = '{Hola, [uno, dos, tres], hola de nuevo, [Adios]}';
const letterArray = entryText.split('');
var res = true;

function validarTexto(num) {
  var curlyBrackets = false;
  var squareBrackets = false;
  for (var i = num; i < letterArray.length; i++) {
    // Si se abre una llave o un corchete, se guarda el estado y se introduce a un nuevo nivel.
    if (letterArray[i] == '{' || letterArray[i] == '[') {
      letterArray[i] == '{' ? (curlyBrackets = true) : (squareBrackets = true);
      i = validarTexto(++i);
    } else if (letterArray[i] == '}' || letterArray[i] == ']') {
      // Si se encontró un cierre de llave o corchete se sale del nivel actual para darle cierre en el nivel superior (donde fue abierto)
      return i;
    } else {
      // Si es un caracter diferente a llaves y corchetes, se continua el ciclo.
      continue;
    }

    // Se hace un try porque si fue una cadena inválida en el pasado, se retorna la logitud de la cadena, lo cuál está fuera del indice del arreglo de caracteres
    try {
      // Intenta darle cierre a una llave o un corchete.
      if ((letterArray[i] == '}' && !curlyBrackets) || (letterArray[i] == ']' && !squareBrackets)) {
        console.log('La cadena introducida es inválida.');
        res = false;
        return letterArray.length;
      } else {
        // Si se cierra correctamente una llave o un corchete, se restablecen las variables para seguir analizando el mismo nivel
        letterArray[i] == '{' ? (curlyBrackets = false) : (squareBrackets = false);
      }
    } catch(e) {
      break;
    }
  }
}

// Si la función retorna algo en la iteración final, quiere decir que quiere salir de un nivel que no existe y es error.
if (validarTexto(0)) {
  console.log('La cadena introducida es inválida.');
} else {
  if (res) console.log('La cadena introducida es válida');
} 
