// Declaración const de encriptado y normal; y lets relativas a los valores.

const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,x'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

let normalText = () => document.getElementById("normal").value;
let encriptedText = () => document.getElementById("encrypted").value;

// Generador de números automático, pintado a partir de la manipulación del DOM.

let generator = document.getElementById("generator");

let random = (x, min, max) => {
  let array = new Array(max);
  for (let i = min; i < max; i++) {
    array[i] = i + 1;
  }
  array.sort(() => (Math.random() > 0.5 ? 1 : -1));
  let resGenerator = array.slice(0, x);
  generator.innerHTML = "Generador Aleatorio: " + resGenerator;
};

random(10, 1, 100);

// Desarrollo de las funciones relativas a la transformación de los mensajes.

let showEncrypt = () =>
  (document.getElementById("encrypted").value = transformMessage(
    normalText(),
    plainAlphabet,
    encryptedAlphabet
  ));

let showDecrypt = () =>
  (document.getElementById("normal").value = transformMessage(
    encriptedText(),
    encryptedAlphabet,
    plainAlphabet
  ));

let searchIndex = (alphabet, letter) => {
  for (i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) return i;
  }
  return -1;
};

let transformLetter = (letter, origin, destiny) => {
  let letterIndex = searchIndex(origin, letter);
  let converted = destiny[letterIndex];
  return letterIndex === -1 ? letter : converted;
};

let transformMessage = (message, origin, destiny) => {
  let messageLower = message.toLowerCase();
  let result = "";

  for (let letter of messageLower) {
    result = result + transformLetter(letter, origin, destiny);
  }
  return result;
};

// Llamadas y pintura a partir del DOM.

let getEncrypt = () => {
  showEncrypt();
};

let getDecrypt = () => {
  showDecrypt();
};

document.getElementById("encrypt").addEventListener("click", getEncrypt);
document.getElementById("decrypt").addEventListener("click", getDecrypt);
