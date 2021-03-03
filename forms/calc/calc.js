function calculate(x, y) {
  x = Number(prompt("Give me a number",""));
  y = Number(prompt("Give me another number",""));
  var answer = (x + y)
  return answer
}


var myAnswer = calculate()
console.log('The sum of X and Y is ' + myAnswer);