let maximum = parseInt(prompt('Enter max Numb'));
while (!maximum) {
  maximum = parseInt(prompt('Enter a valid Numb'));
}
const targetNumb = Math.floor(Math.random() * maximum) + 1;
console.log(targetNumb);

let guess = prompt('Enter your first Guess (Type "q" to quit)');
let attempts = 1;

while (guess !== targetNumb) {
  if (guess === 'q') break;
  guess = parseInt(guess);
  if (guess > targetNumb) {
    guess = parseInt(prompt('Too High'));
    attempts++;
  } else if (guess < targetNumb) {
    guess = parseInt(prompt('Too Low'));
    attempts++;
  } else {
    guess = prompt('Invalid Guess,Please enter a Number or type "Q" to quit');
  }
}
if (guess === 'q') {
  console.log('Ok.you quit');
} else {
  console.log('Congrats you win');
  console.log(`You got it! It took you ${attempts} shoots`);
}
