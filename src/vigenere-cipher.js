const { NotImplementedError } = require('../lib');

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
  constructor(cod) {
    this.cod = cod;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let arrkey;

    let arrMessage = message.toUpperCase().split("");
    if (message.length > key.length) {
      arrkey = key
        .toUpperCase()
        .repeat(Math.ceil(message.length / key.length))
        .split("");
    } else arrkey = key.toUpperCase().split("");
    let answer = [];
    let i = 0;
    arrMessage.map((e) => {
      if (e.codePointAt(0) >= 65 && e.codePointAt(0) <= 90) {
        let elem =
          (e.codePointAt(0) - 65 + (arrkey[i].codePointAt(0) - 65)) % 26;
        i++;
        answer.push(String.fromCharCode(elem + 65));
      } else answer.push(e);
    });
    if (this.cod == false) {
      return answer.reverse().join("");
    } else return answer.join("");
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    let arrkey;
    let arrMessage = encryptedMessage.toUpperCase().split("");
    if (encryptedMessage.length > key.length) {
      arrkey = key
        .toUpperCase()
        .repeat(Math.ceil(encryptedMessage.length / key.length))
        .split("");
    } else arrkey = key.toUpperCase().split("");
    let answer = [];
    let j = 0;
    arrMessage.map((e) => {
      if (e.codePointAt(0) >= 65 && e.codePointAt(0) <= 90) {
        let elem =
          (e.codePointAt(0) - 65 - (arrkey[j].codePointAt(0) - 65) + 26) % 26;
        j++;
        answer.push(String.fromCharCode(elem + 65));
      } else answer.push(e);
    });
    if (this.cod == false) {
      return answer.reverse().join("");
    } else return answer.join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
