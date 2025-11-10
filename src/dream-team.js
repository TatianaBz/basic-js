const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    let flag = false;
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == "string") {
        flag = true;
      }
    }
    if (flag == false) {
      console.log('false');
      return;
    } else {
      let namer = [];
      let j = 0;
      let num;
      for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string') {
          let member = members[i].trim();
          let letter = /^[а-яА-Яa-zA-Z _-]+$/;
          if (letter.test(member)) {
            namer[j] = member.substr(0, 1).toUpperCase();
            j++;
          }
        }
      }
      for (let i = 0; i < namer.length; i++) {
        for (let j = i; j < namer.length; j++) {
          if (namer[i] > namer[j]) {
            nam = namer[j];
            namer[j] = namer[i];
            namer[i] = nam;
          }
        }
      }
      return String(namer.join(''));
    }
  }
}

module.exports = {
  createDreamTeam
};
