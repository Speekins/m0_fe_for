// As you complete each challenge, RUN THE CODE to ensure it works. You can do this by
// running `node <filepath>`. If you are in this directory, you'd run `node for.js`.
  
// Challenge 1
// Use a for statement to log to the console all even numbers between 25 and 75.
/*
for (var num = 26; num <= 74; num += 1) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
*/

for (var num = 26; num <= 74; num += 2) {
  console.log(num);
}

/*
// Challenge 2
// Use a for statement to log to the console a complete sentence stating the weather using the Array below:
var weather_options = ["sunny", "snowy", "freezing", "partly cloudy", "drizzly"]

for (let idx = 0; idx < weather_options.length; idx++) {
  var currentWeather = weather_options[idx];
  console.log(`Wow! The weather sure is ${currentWeather}.`);
}

// Challenge 3
// Use a for statement to log to the console only the words that are exactly 3 characters in length
var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]

for (let idx = 0; idx < words.length; idx++) {
  var currentWord = words[idx];
  if (currentWord.length === 3) {
    console.log(currentWord)
  }
}

// 📹 Record yourself live-coding and talking through any ONE of the challenges. 
  // The recording doesn't have to be the first time you are solving the problem. 
  // Use technical vocabulary and explain each part to demonstrate your understanding! 
  // Share the link to your video in your small group channel.
*/
