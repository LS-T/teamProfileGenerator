const path = require("path");

const fs = require("fs");

const inquirer = require("inquirer");

const manager = require("./lib/Manager");

const engineer = require("./lib/Engineer");

const intern = require("./lib/Intern");

const render = require("./src/page-template.js");

// pageTemplate(team);

const OUTPUT_DIR = path.resolve(__dirname, "dist");

const outputPath = path.join(OUTPUT_DIR, "team.html");

function runApp() {
  //   ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.

  inquirer.prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "manager-name",
    },
    {
      type: "input",
      message: "What is the team manager's employee ID?",
      name: "manager-ID",
    },
    {
      type: "input",
      message: "What is the team manager's email address?",
      name: "manager-email",
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "manager-office-number",
    },
    {
      type: "list",
      message:
        "Would you like to add an engineer or an intern to finish building team?",
      choices: ["engineer", "intern"],
      name: "add-team-member",
    },
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "engineer-name",
    },
    {
      type: "input",
      message: "What is the engineer's employee ID?",
      name: "engineer-ID",
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "engineer-email",
    },
    {
      type: "list",
      message: "Would you like to add an additional team member?",
      choices: ["intern"],
    },
    {
      type: "input",
      message: "What is the intern's name?",
      name: "intern-name",
    },
    {
      type: "input",
      message: "What is the intern's employee ID?",
      name: "intern-ID",
    },
    {
      type: "input",
      message: "What is the intern's email?",
      name: "intern-email",
    },
    {
      type: "input",
      message: "What school does the intern attend?",
      name: "intern-school",
    },
  ]);
  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
}
runApp();
