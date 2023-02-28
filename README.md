# Team Profile Generator 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 
This is an application that dynamically generates an HTML document that displays the user's team profile. The user will be inquired about their team via prompts in the terminal. In order to write clean and efficient code, tests were used to drive development of this product. As for the user story, the user - as a manager - will want an easy way to generate a webpage that displays their team's basic information SO THAT they have effortless access to all their team's emails and GitHub accounts. This application uses a combination of skills and technologies new to me (which will be listed below).


### Technologies and Skills Used
- ES6 Javascript 
- Object Oriented Programming / Classes
- Node.js
- Inquirer npm package 
- File system and path node packages
- Jest (Test Driven Development - TDD)

### What I learnt: 
- How to create tests and use them to drive development (using the npm package Jest)
- The best practices for object oriented programming; understanding the 4 underlying principles of OOP: abstraction, inheritance, encapsulation and polymorphism. 
- The new 'class' keyword (from ES6) that possesses a constructor function (which can be easily inherited/extended to another class) and holds methods that are stored within the prototype object - a more efficient/memory saving way to define methods to all instances.
- More practice with node.js and npm (Inquirer, Jest, fs and path were the node packages used for this project) 

## Installation 

Git clone the repo onto your local machine. To install the necessary dependencies for this programme, please run the following command in the terminal:
```
npm install
```

## Usage

To run this program, write the following command in the terminal: 
```
node index.js
```
Once the user has done so, they will be prompted to answer questions related to their team. They are able to add as many team members as they wish. When the user has finished assembling their team, a message will be logged to the console, stating that the HTML document has been dynamically generated in the 'output' directory. 

![Command Line Screenshot](./assets/images/terminal.png)

If the user transverses over to the output directory and opens 'team.html' (the generated file that uses the responses given from the user), they will see a screen with all their team members stored as separate cards. The page is also fully responsive and has minimalistic styling. 

![Generated HTML](./assets/images/HTML.png)

## License 

Please refer to the LICENSE in the repo

## Contributing 

If you would like to contribute, you are very welcome to! For this repo, the "fork-and-pull" Git workflow will be used.

Steps:

- Fork the repo on GitHub
- Clone the project to your own machine
- Create a feature branch (git checkout -b BRANCH_NAME) and commit changes to your own branch
- Push your work back up to your fork
- Submit a Pull request so that we can review your changes

Be sure to merge the latest from "upstream" before making a pull request!

## Tests 

To check whether all tests have passed, feel free to run the following command: 

```
npm test
```

---

## Questions

If you have any questions about the repo, open an issue or contact me directly at cameron-edek-poole@gmail.com. 

You can find more of my work by clicking on my GitHub username: [cedekpoole](https://github.com/cedekpoole/).
Feel free to also add me on [LinkedIn](https://www.linkedin.com/in/cam-edek-poole/). :)