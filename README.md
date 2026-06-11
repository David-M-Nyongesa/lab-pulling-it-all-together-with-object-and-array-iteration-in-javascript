# Lab: Pulling It All Together with Object and Array Iteration in JavaScript

## Overview

In this lab, you will develop a JavaScript project that involves building and iterating over nested objects and arrays. This lab will help you develop foundational skills in Object Iteration, Array Iteration, and Array Looping by implementing functions to extract data from complex objects. You’ll use these techniques to build out several small functions that access and manipulate data for a fictional basketball game stats tracker.

Pre-written test cases are provided in `indexTest.js`, and your task is to implement the required functions in `index.js` to ensure all tests pass when run locally using Mocha and Chai.

---

## Scenario

You are a developer working for a sports tech company. Your current project is to implement features for a live NBA game stats tracker. The `gameObject` function provides data for two teams, including team names, colors, and stats for each player. Your task is to use Object and Array Iteration to retrieve specific player stats, team information, and more.

---

## Tools and Resources

- **Code Editor**: Visual Studio Code (or your preferred editor)
- **Node.js**: To execute JavaScript locally
- **Mocha and Chai**: For running test cases

---

## Instructions

### 1. Fork and Clone the Repository

- Go to the [GitHub repository](https://github.com/learn-co-curriculum/lab-pulling-it-all-together-with-object-and-array-iteration-in-javascript) for this lab.
- Fork the repository to your GitHub account.
- Clone the forked repository to your local machine:

```bash
git clone https://github.com/your-username/lab-pulling-it-all-together-with-object-and-array-iteration-in-javascript.git
```

- Navigate into the project directory:
```bash
cd lab-pulling-it-all-together-with-object-and-array-iteration-in-javascript
```

- Install the required dependencies:
```bash
npm install
```

---

### 2. Implement the Functions

The `gameObject` function is already provided and includes nested objects representing two teams. Your task is to implement the following functions in `index.js`:

#### Retrieve Player Information

1. **`numPointsScored(playerName)`**  
   Returns the points scored by the given player.

2. **`shoeSize(playerName)`**  
   Returns the shoe size of the given player.

#### Retrieve Team Information

3. **`teamColors(teamName)`**  
   Returns an array of the team’s colors.

4. **`teamNames()`**  
   Returns an array of both team names.

#### Retrieve Player Numbers and Stats

5. **`playerNumbers(teamName)`**  
   Returns an array of jersey numbers for the given team.

6. **`playerStats(playerName)`**  
   Returns an object containing all stats for the given player.

#### Advanced Challenge

7. **`bigShoeRebounds()`**  
   Finds the player with the largest shoe size and returns their number of rebounds.

---

### 3. Test Your Implementation

To ensure your implementation is correct, pre-written tests are provided in `indexTest.js`. These tests are configured to verify your functions and are based on the data structure in `gameObject`.

#### Steps to Run Tests Locally

1. Run the following command to execute the tests:
   ```bash
   npm test
   ```

2. Review the test results in your terminal. Tests that pass will be marked in green, while failing tests will show error messages with details about the failure.

3. Debug your code and fix any issues to ensure all tests pass successfully.

---

### 4. Analyze Code Quality

Look over your code for any code that isn't DRY.

Ensure all functions and variables are named appropriately and are readable.

Comment on any code that isn't easily understood by reading it.

---

### Provided Files

#### `helpers.js`

The `helpers.js` file is included to set up a testing environment using additional libraries like Chai and Sinon. It ensures compatibility and provides utilities for more advanced testing scenarios.

#### `indexTest.js`

The `indexTest.js` file contains the test suite for this lab. It includes tests for all the functions you need to implement. Below is a sample of the test cases:

```javascript
describe('Basketball Stats', function () {
  describe('numPointsScored', function () {
    it('should return points scored by a player', function () {
      expect(numPointsScored('Alan Anderson')).to.equal(22);
      expect(numPointsScored('Ben Gordon')).to.equal(33);
    });
  });

  describe('shoeSize', function () {
    it('should return shoe size of a player', function () {
      expect(shoeSize('Alan Anderson')).to.equal(16);
      expect(shoeSize('Ben Gordon')).to.equal(15);
    });
  });
  
  // Additional tests for other functions...
});
```

---

## Submission and Grading Criteria

Your grade will be determined based on your ability to pass all the provided test cases and the quality of your code. Make sure you have:

- Successfully implemented all required functions.
- Passed all test cases in `indexTest.js` using `npm test`.
- Ensured your code is clean, modular, and adheres to best practices.

## Final Tips

- Use `console.log()` strategically during development for debugging, but remove or comment them out before submission.
- Validate your functions against edge cases (e.g., a player or team not existing in the dataset).
- Focus on clean, modular code—grading includes an assessment of code readability and maintainability.

---

## Resources

- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)
- [Sinon Documentation](https://sinonjs.org/)
