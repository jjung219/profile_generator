//Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', answer => {
  console.log(`Oh, your name is ${answer}`);

  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`You like ${answer}`);

    rl.question('What do you listen to while doing that?', answer => {
      console.log(`You like to listen to ${answer}`);

      rl.question('Which meal is your favourite? (e.g: dinner, brunch, lunch, etc,.)', answer => {
        console.log(`Your favourite meal is ${answer}`);
        rl.question('What is your favourite thing to eat for that meal?', answer => {
          console.log(`Your favourite food is ${answer}`);

          rl.question('Which sport is your absolute favourite?', answer => {
            console.log(`Your favourite sport is ${answer}`);

            rl.question('What is your superpower? Tell us what you are amazing at!', answer => {
              console.log(`Your superpwer is ${answer}`);
              rl.close();
            })
          })
        })
      })
    })
  })



});