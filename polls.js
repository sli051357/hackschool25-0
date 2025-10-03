const poll = {
  question: "What's the best boba flavor?",
  options: ["Taro", "Matcha", "Strawberry"],
  votes: {
    Taro: 0,
    Matcha: 0,
    Strawberry: 0
  }
};

/* **********************
Activity 3
*************************/

// Arrow function to cast a vote
const vote = (option) => {
  if (poll.votes[option] !== undefined) {
    poll.votes[option]++;
    console.log(`Voted for ${option}!`);
  } else {
    console.log(`${option} is not a valid option.`);
  }
};

// Given: Function to print current results
const printResults = () => {
  console.log(`\n${poll.question}`);
  for (let option of poll.options) {
    console.log(`${option}: ${poll.votes[option]} votes`);
  }
};

// Call your functions and print results to test
// Comment out these calls in Activity 4
// View outputs in outputs tab
// vote("Matcha");     
// vote("Milk Tea");   
// vote("Taro");      

// printResults();

/* **********************
Activity 4
*************************/
// Simulate random votes with delay
const simulateVotes = async () => {
  const options = poll.options;
  for (let i = 0; i < 5; i++) {
    const randomOption = options[Math.floor(Math.random() * options.length)];
    vote(randomOption);
    await new Promise(resolve => setTimeout(resolve, 500)); // delay 0.5s
  }
  printResults();
};

simulateVotes();
