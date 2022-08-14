// TODO: Include packages needed for this application
const inquirer=require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const teamMembers=[]
const Intern=require("./lib/Intern");
const Engineer=require("./lib/Engineer");

// TODO: Create an array of questions for user input
    const questionsMgr = () => {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'nameMgr',
            message: 'Enter manager name',
          },
          {
            type: 'input',
            name: 'idMgr',
            message: 'Enter manager ID',
          },
          {
            type: 'input',
            name: 'emailMgr',
            message: 'Enter manager email',
          },
          {
            type: 'input',
            name: 'ofcNumber',
            message:'Enter office number',
          },
        ])
      }
function init() {
  questionsMgr()
  .then(answers => {
let teamManager=new Manager(answers.nameMgr, answers.idMgr, answers.emailMgr, answers.ofcNumber)
teamMembers.push(teamManager)
console.log(teamMembers)
menu()
  })
}

function menu() {
  inquirer.prompt(
    {
      type:'list',
      name:'choice',
      message:'What would you like to do next?',
      choices:['Add an Engineer','Add an Intern', 'Finished']
    }
  ).then(answersChoice => {
    switch (answersChoice.choice) {
      case 'Add an Engineer':
        questionsEng();
        break;
      case 'Add an Intern':
        questionsInt();
        break;
        default:
          generateHTML();
    }
  })
}

const questionsEng = () => {
 inquirer.prompt([
    {
            type: 'input',
            name: 'nameEng',
            message: 'Enter engineer name',
          },
          {
            type: 'input',
            name: 'idEng',
            message: 'Enter engineer ID',
          },
          {
            type: 'input',
            name: 'emailEng',
            message: 'Enter engineer email',
          },
          {
            type: 'input',
            name: 'gitHub',
            message:'Enter gitHub',
          },
        ])
        .then((answersEng) => {
          let teamEng=new Engineer(answersEng.nameEng, answersEng.idEng, answersEng.emailEng, answersEng.github)
          teamMembers.push (teamEng)
          console.log(teamMembers)
          menu()

        })
      }

  const questionsInt = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'nameInt',
        message: 'Enter Intern name',
      },
      {
        type: 'input',
        name: 'idInt',
        message: 'Enter Intern ID',
      },
      {
        type: 'input',
        name: 'emailInt',
        message: 'Enter Intern email',
      },
      {
        type: 'input',
        name: 'school',
        message:'Enter the Intern school',
      },
    ])
    .then((answersInt) =>{
      let teamInt =new Intern(answersInt.nameInt, answersInt.idInt, answersInt.emailInt, answersInt.school)
      teamMembers.push (teamInt)
      console.log(teamMembers)
      menu()

    })
  } 

const generateHTML = ({ nameMgr, idMgr, emailMgr, ofcNumber }) =>
  `<!DOCTYPE html>
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
    <div class="column-item">
    <section class="cardTopMgr">
  for
    <h1> ${nameMgr}</h1>
      <h1><i class="fas fa-coffee"></i>    Manager</h1></p>
      </section>
    </div>
    <div class="cardBottomMgr">
    <section class=cardBottomMgr>
    <p>ID: ${idMgr}</p>
    <p>Email: ${emailMgr}</p>
    <p>Office#: ${ofcNumber}</p>
</section>  
</div>
</body>
</html>`;


// Function call to initialize app
init();
