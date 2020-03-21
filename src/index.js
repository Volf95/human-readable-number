module.exports = function toReadable (number) {
      let firstNumBlock = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      let secondNumBlock = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      let thirdNumBlock = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      let fourthNumBlock = ['hundred'];
      let numArray = [number];
      let splited = numArray.toString().split('');

      if (splited.length === 3) {
          let hundreds = firstNumBlock[splited[0] - 1] + ' ' + fourthNumBlock;
          if (number % 100 !== 0 && number % 100 < 10) {
              let a = firstNumBlock[splited[2] - 1];
              return hundreds + ' ' + a;
          } else if (number % 100 !== 0 && number % 100 < 20) {
              let b = secondNumBlock[splited[2]];
              return hundreds + ' ' + b;
          } else if (number % 100 !== 0 && number % 100 > 19) {
              let c = thirdNumBlock[splited[1] - 2];
              if (splited[2] != 0) {
                  let d = firstNumBlock[splited[2] - 1];
                  return hundreds + ' ' + c + ' ' + d;
              }
              return hundreds + ' ' + c;

          } else {
              return hundreds;
          }
      }

      if (splited.length === 2) {
          if (number < 20) {
              return secondNumBlock[splited[1]]
          } else {
              let c = thirdNumBlock[splited[0] - 2];
              if (splited[1] != 0) {
                  let d = firstNumBlock[splited[1] - 1];
                  return c + ' ' + d;
              }
              return c;
          }
      }

      if (splited.length === 1 && number !== 0) {
          return firstNumBlock[splited[0] - 1];
      }
      return 'zero';
      
}
