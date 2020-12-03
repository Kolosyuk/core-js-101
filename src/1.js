/* eslint-disable */

function removeFirstOccurrences(str, value) {
  let result = '';
  console.log(str.slice(str.indexOf(value) + value.length));
  result = str.slice(0, str.indexOf(value)) + str.slice(str.indexOf(value) + value.length);
  console.log(result);
  return result;
}

console.log(removeFirstOccurrences('ABABAB', 'BA'));