const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const members = [];

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
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.office
    );
    members.push(manager);
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
      if (response.choice === "Choose another employee") {
        inquirer
          .prompt({
            type: "list",
            message: "Add an Engineer or Intern to your team:",
            name: "member",
            choices: ["Engineer", "Intern"],
          })
          .then((response) => {
            response.member === "Engineer" ? addEngineer() : addIntern();
          });
      } else {
        createTeam();
      }
    });
};

const addEngineer = () => {
    inquirer.prompt([
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
        }
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        members.push(engineer);
        nextEmployeePrompt(); 
    })
}

const addIntern = () => {
    inquirer.prompt([
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
        }
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        members.push(intern);
        nextEmployeePrompt();
    })
}
