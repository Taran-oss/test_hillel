let name = "Ihor";

for (let i = name.length - 1; i >= 0; i--) {
  console.log(name.charAt(i));
}

function isPalindrome(str) {
  const cleanStr = str.toLowerCase();

  return cleanStr === cleanStr.split("").reverse().join("");
}

console.log(isPalindrome("aba"));
console.log(isPalindrome("abc"));

function getPaired(arr) {
  const pairedNumbers = arr.filter((number) => number % 2 === 0);
  return pairedNumbers;
}

const result = getPaired([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
