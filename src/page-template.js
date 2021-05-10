const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

const generateTeam = (team) => {
  // Generate card templates for each team member
  const generateManager = (Manager) => {
    return `
    <div class="card mx-4">
        <div class="card-header text-center">
            <h2 class="card-title">${Manager.getName()}</h2>
            <h3 class="card-title">${Manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
  };

  const generateIntern = (Intern) => {
    return `
    <div class="card mx-4">
        <div class="card-header text-center">
            <h2 class="card-title">${Intern.getName()}</h2>
            <h3 class="card-title">${Intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${Intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
  };

  const generateEngineer = (Engineer) => {
    return `
    <div class="card mx-4">
        <div class="card-header text-center">
            <h2 class="card-title">${Engineer.getName()}</h2>
            <h3 class="card-title">${Engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: ${Engineer.getGithub()}</li>
            </ul>
        </div>
    </div>`;
  };



  const employeeCards = [];

  employeeCards.push(team.filter(employee => employee.getRole() === "Manager")
  .map(Manager => generateManager(Manager)));

  employeeCards.push(team.filter(employee => employee.getRole() === "Engineer")
  .map(Engineer => generateEngineer(Engineer)).join(""));

  employeeCards.push(team.filter(employee => employee.getRole() === "Intern")
  .map(Intern => generateIntern(Intern)).join(""));

  return employeeCards.join("");
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>TeamProfileGenerator</title>
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous"
            />
            <link
            href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"
            rel="stylesheet"
            />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <body>
            <div class="container-fluid">
                <header class="row">
                    <div class="col-12 jumbotron mb-4" style="background-color: red">
                    <h1 class="text-center">My Team</h1>
                    </div>
                </header>
            </div>

            <div class="container">
                <div class="col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </body>
     </html> `;
};

