const path = require("path");

const fs = require("fs");

const inquirer = require("inquirer");

const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");

const Intern = require("./lib/Intern");

const render = require("./src/page-template.js");



const teamMembers = [];

const OUTPUT_DIR = path.resolve(__dirname, "dist");

const outputPath = path.join(OUTPUT_DIR, "team.html");

function createManager() {
  

  inquirer.prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the team manager's employee ID?",
      name: "managerID",
    },
    {
      type: "input",
      message: "What is the team manager's email address?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "managerOfficeNumber",
    },
     
    {
      type: "confirm",
      message:"Would you like to add another team member?",
      name: "addTeamMember",
    }
    
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerID,answers.managerEmail,answers.managerOfficeNumber);
      teamMembers.push(manager);

      if (answers.addTeamMember) {
          createTeam();
      } else {
          buildTeam();
      }
  })
}; 



function createTeam() {
    inquirer.prompt([
        {
            type:"list",
            message: "Which team member would you like to add?",
            choices: ["Engineer", "Intern"],
            name:"nextTeamMember"
        }
    ]).then(next => {
        if(next.nextTeamMember === "Intern") {
            createIntern();
        } else {
            createEngineer();
        }
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "internName",
        },
        {
            type: "input",
            message: "What is the intern's employee ID?",
            name: "internID",
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "internEmail",
        },
        {
            type: "input",
            message: "What school does the intern attend?",
            name: "internSchool",
        },
        {
            type: "confirm",
            message:"Would you like to add another team member?",
            name: "addTeamMember",
        }





    ]).then(answers => {
        const intern = new Intern(answers.internName,answers.internID,answers.internEmail,answers.internSchool);
        teamMembers.push(intern);
        if(answers.addTeamMember) {
            createTeam();
        } else {
            buildTeam();
        }
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "engineerName",
        },
        {
            type: "input",
            message: "What is the engineer's employee ID?",
            name: "engineerID",
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "engineerEmail",
        },
        {
            type:"input",
            message:"What is the engineer's GitHub username?",
            name:"engineerGit"
        },
        {
            type: "confirm",
            message:"Would you like to add another team member?",
            name: "addTeamMember",
        },
    
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGit)
        teamMembers.push(engineer);
        if(answers.addTeamMember) {
            createTeam();
        } else {
            buildTeam();
        }
    })
}



function buildTeam() {
// Create the output directory if the output path doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}
fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
};

createManager();