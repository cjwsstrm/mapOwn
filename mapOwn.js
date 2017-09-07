var words = ["ground", "control", "to", "major", "tom"];


//this is the actual map function equivalent
function map(list, cb) {
  var new_array = [];
  for (var i = 0; i < list.length; i++) {
    new_array.push(cb(list[i], i, list));
  }
  return new_array;
}


//a function return a string to uppercase
function bigLetters (string) {
  return string.toUpperCase();
}

//a function to return length of each value in string
function lengths(string) {
  return string.length;
}
//a function to type each word backwards
function backwards (string) {
  return string.split('').reverse().join('');
}


var capitalize = map(words, bigLetters);
var lengths = map(words, lengths);
var reversed = map(words, backwards);


console.log(capitalize);
console.log(lengths);
console.log(reversed);

console.log("MORE TESTING");

map(words, function(string) {
  console.log(string.length);
});

console.log(map(words, bigLetters));