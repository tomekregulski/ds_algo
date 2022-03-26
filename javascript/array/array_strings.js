// Reverse string
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'invalid input';
  }

  let reversed = '';
  for (i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}
function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'invalid input';
  }
  const reversed = [];
  for (i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
}
function reverse3(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'invalid input';
  }
  return str.split('').reverse().join('');
}
const reverse4 = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'invalid input';
  }
  return [...str].reverse().join('');
};

console.log(reverse('hello'));
console.log(reverse2('hey there'));
console.log(reverse3('hey hey'));
console.log(reverse4('yooooooo'));
