// Grab classes from lib directory
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Link node packages to index.js
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Use node's path package and set path to a variable
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// To render team members, export module from page-template.js
const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Set team members to an empty array (to be filled later)
const members = [];

// Prompt the user to add Manager info
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the team manager's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the manager's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the office number?",
      name: "office",
    },
  ])
  .then((response) => {
    // Create an instance of Manager from the user response
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.office
    );
    // Push the manager instance to the team members array
    members.push(manager);
    // Prompt the user to fill in next employee
    nextEmployeePrompt();
  });

const nextEmployeePrompt = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Choose another employee or assemble the team?",
      name: "choice",
      choices: ["* Add additional Employee", "* Assemble the team! :)"],
    })
    .then((response) => {
      if (response.choice === "* Add additional Employee") {
        inquirer
          .prompt({
            type: "list",
            message: "Add an Engineer or Intern to your team:",
            name: "member",
            choices: ["Engineer", "Intern"],
          })
          .then((response) => {
            // If response is engineer, execute addEngineer function
            // If response is intern, execute addIntern function
            response.member === "Engineer" ? addEngineer() : addIntern();
          });
      } else {
        // If user wants to assemble the team, execute function that creates HTML doc
        createTeamHTML();
      }
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Specify the engineer's name:",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "Please specify their GitHub username:",
        name: "github",
      },
    ])
    .then((response) => {
      // Create instance of Engineer using the user's response
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      // Push new Engineer to members array
      members.push(engineer);
      nextEmployeePrompt();
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Specify the intern's name:",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "Please specify the school they go to:",
        name: "school",
      },
    ])
    .then((response) => {
      // Create new instance of Intern via the user response
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      // Push intern onto members array
      members.push(intern);
      nextEmployeePrompt();
    });
};
const createTeamHTML = () => {
  // Use render function (from page-template.js) to add team members from 'members' array to document
  const HTML = render(members);
  // If output directory does not exist, create one
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  // Create new HTML file using the file system node package
  fs.writeFileSync(outputPath, HTML, "utf-8");
  console.log(
    "An HTML document has been dynamically generated in the 'output' directory!"
  );
};
