// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const teamMembers = [];
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
arrRole = ["Manager", "Engineer", "Intern"];
// TODO: Create an array of questions for user input
const questionsMgr = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "nameMgr",
      message: "Enter manager name",
    },
    {
      type: "input",
      name: "idMgr",
      message: "Enter manager ID",
    },
    {
      type: "input",
      name: "emailMgr",
      message: "Enter manager email",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter office number",
    },
  ]);
};
function init() {
  questionsMgr().then((answers) => {
    let teamManager = new Manager(
      answers.nameMgr,
      answers.idMgr,
      answers.emailMgr,
      answers.officeNumber
    );
    teamMembers.push(teamManager);
    console.log(teamMembers);
    menu();
  });
}

function menu() {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "What would you like to do next?",
      choices: ["Add an Engineer", "Add an Intern", "Finished"],
    })
    .then((answersChoice) => {
      switch (answersChoice.choice) {
        case "Add an Engineer":
          questionsEng();
          break;
        case "Add an Intern":
          questionsInt();
          break;
        default:
          getRole();
      }
    });
}

const questionsEng = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameEng",
        message: "Enter engineer name",
      },
      {
        type: "input",
        name: "idEng",
        message: "Enter engineer ID",
      },
      {
        type: "input",
        name: "emailEng",
        message: "Enter engineer email",
      },
      {
        type: "input",
        name: "gitHubEng",
        message: "Enter gitHub",
      },
    ])
    .then((answersEng) => {
      let teamEng = new Engineer(
        answersEng.nameEng,
        answersEng.idEng,
        answersEng.emailEng,
        answersEng.gitHubEng
      );
      teamMembers.push(teamEng);
      console.log(teamMembers);
      menu();
    });
};

const questionsInt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameInt",
        message: "Enter Intern name",
      },
      {
        type: "input",
        name: "idInt",
        message: "Enter Intern ID",
      },
      {
        type: "input",
        name: "emailInt",
        message: "Enter Intern email",
      },
      {
        type: "input",
        name: "schoolInt",
        message: "Enter the Intern school",
      },
    ])
    .then((answersInt) => {
      let teamInt = new Intern(
        answersInt.nameInt,
        answersInt.idInt,
        answersInt.emailInt,
        answersInt.schoolInt
      );
      teamMembers.push(teamInt);
      console.log(teamMembers);
      menu();
    });
};

const getRole = () => {
  let cardtext = "";
  teamMembers.forEach((member) => {
    if (member.getRole() === "Manager") {
      cardtext += ` <section class="cardTop">

  <p><h1> ${member.name}</h1></p>
    <p><h1><i class="fas fa-coffee"></i>    Manager</h1></p>
    </section>
  <section class="cardBottom">
  <div class="flex-column"
  <p>ID: ${member.id}</p>
  <p>Email: ${member.email}</p>
  <p>Office#: ${member.getOfficeNumber()}</p>
  </div>
</section>`;
    } else if (member.getRole() === "Engineer") {
      cardtext += ` <section class="cardTop">
  
  <p><h1> ${member.name}</h1></p>
    <p><h1><i class="fas fa-glasses"></i>    Engineer</h1></p>
    </section>
  <section class="cardBottom">
  <p>ID: ${member.id}</p>
  <p>Email: ${member.email}</p>
  <p>Github: ${member.github}</p>
  </div>
  </section>`;
    } else if (member.getRole() === "Intern") {
      cardtext += ` <section class="cardTop">
     
   <p><h1> ${member.name}</h1></p>
   <p> <h1><i class="fas fa-user-graduate"></i>    Intern</h1></p>
    </section>
  <section class="cardBottom">
  <p>ID: ${member.id}</p>
  <p>Email: ${member.email}</p>
  <p>School: ${member.school}</p>
  </div>
</section>`;
    }
  });
  let template = generateHTML(cardtext);
  console.log(template);
  fs.writeFile("MyTeam.html", template, (err) => {
    if (err) {
      throw err;
    }
    console.log("File successfully created");
  });
};

const generateHTML = (cardtext) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <link rel="stylesheet" type="text/css" href="./Assets/css/style.css" />
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  <title>Employees</title>
</head>
  <body>
    <div class="hero">
      <h1>My Team</h1> 
    </div>
    <div class="flex-column"> 
    ${cardtext}
    
</div>
</body>
</html>`;
};

// Function call to initialize app
init();
