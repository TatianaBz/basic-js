const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let repeatRaport = {};
  let result = [];
  let repeatResult = [];
  let repeat;
  result[0] = String(str);
  let optionsDef = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|",
  };
  if (options == "") {
    repeatRaport = optionsDef;
  } else {
    if (options.separator !== undefined) {
      repeatRaport.separator = String(options.separator);
    } else {
      repeatRaport.separator = optionsDef.separator;
    }
    if (options.additionRepeatTimes) {
      repeatRaport.additionRepeatTimes = options.additionRepeatTimes;
    } else {
      repeatRaport.additionRepeatTimes = optionsDef.additionRepeatTimes;
    }

    if (options.additionSeparator !== undefined) {
      repeatRaport.additionSeparator = String(options.additionSeparator);
    } else {
      repeatRaport.additionSeparator = optionsDef.additionSeparator;
    }

    if (options.repeatTimes) {
      repeatRaport.repeatTimes = options.repeatTimes;
    } else {
      repeatRaport.repeatTimes = optionsDef.repeatTimes;
      repeatRaport.separator = "";
    }
    if (options.addition !== undefined) {
      repeatRaport.addition = String(options.addition);
    } else {
      repeatRaport.addition = optionsDef.addition;
      repeatRaport.additionSeparator = "";
    }
  }
  for (let j = 0; j < repeatRaport.additionRepeatTimes - 1; j++) {
    result.push(repeatRaport.addition, repeatRaport.additionSeparator);
  }
  result.push(repeatRaport.addition);
  repeat = result.join("");
  for (let i = 0; i < repeatRaport.repeatTimes - 1; i++) {
    repeatResult.push(repeat, repeatRaport.separator);
  }
  repeatResult.push(repeat);
  return repeatResult.join("");
}

module.exports = {
  repeater
};
