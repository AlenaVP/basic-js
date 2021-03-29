const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }
  encrypt(message, key) {
    const chars = message.toUpperCase().split('').map(c => c.charCodeAt());
    const wordChars = key.toUpperCase().repeat(Math.ceil(message.length / key.length)).split('').map(c => c.charCodeAt());
    const encrypted = Array.from({length: chars.length}, (_, i) => 65 > chars[i] || chars[i] > 90 ? String.fromCharCode(chars[i])
      : String.fromCharCode((chars[i] + wordChars.shift()) % 26 + 65));
    return this.direct === false ? encrypted.reverse().join('') : encrypted.join('');
  }
  decrypt(encryptedMessage, key) {
    const chars = encryptedMessage.toUpperCase().split('').map(c => c.charCodeAt());
    const wordChars = key.toUpperCase().repeat(Math.ceil(encryptedMessage.length / key.length)).split('').map(c => c.charCodeAt());
    const decrypted = Array.from({length: chars.length}, (_, i) => 65 > chars[i] || chars[i] > 90 ? String.fromCharCode(chars[i])
      : String.fromCharCode((chars[i] + 26 - wordChars.shift()) % 26 + 65));
    return this.direct === false ? decrypted.reverse().join('') : decrypted.join('');
  }
}

module.exports = VigenereCipheringMachine;
