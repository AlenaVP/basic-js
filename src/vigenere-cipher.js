const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const chars = message.toUpperCase().split('').map(c => c.charCodeAt());
    const wordChars = key.toUpperCase().repeat(Math.ceil(message.length / key.length)).split('').map(c => c.charCodeAt());
    const encrypted = Array.from({ length: chars.length }, (_, i) => 65 > chars[i] || chars[i] > 90 ? String.fromCharCode(chars[i])
      : String.fromCharCode((chars[i] + wordChars.shift()) % 26 + 65));
    return this.direct === false ? encrypted.reverse().join('') : encrypted.join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    const chars = encryptedMessage.toUpperCase().split('').map(c => c.charCodeAt());
    const wordChars = key.toUpperCase().repeat(Math.ceil(encryptedMessage.length / key.length)).split('').map(c => c.charCodeAt());
    const decrypted = Array.from({ length: chars.length }, (_, i) => 65 > chars[i] || chars[i] > 90 ? String.fromCharCode(chars[i])
      : String.fromCharCode((chars[i] + 26 - wordChars.shift()) % 26 + 65));
    return this.direct === false ? decrypted.reverse().join('') : decrypted.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
