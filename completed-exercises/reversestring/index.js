// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

module.exports = reverse;

// classic, long form for loop
// for (var i = 0; i < str.length; i++) {}

// Solution #1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }
