const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

const generatePage = require('./src/page-template');

const emp = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const promptTeamName = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'TeamName',
            message: 'What is the team name?'
        },
    ]);

};



const addNewEmp = ({ TeamName }) => {
    console.log(`
====================================
Add a New Team Member to ${TeamName}
====================================
    `);
    //get emp name id email desig
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'EmpName',
                message: 'What is your employees name?'
            },
            {
                type: 'list',
                name: 'Designation',
                message: 'Enter team members designation:',
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: 'input',
                name: 'Id',
                message: 'Enter Employee Id:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the employees email?'
            },
        ])
        //check desig- assign req new info
        .then(function ({ EmpName, Designation, Id, email }) {
            let extra = '';

            switch (Designation.toLowerCase()) {
                case 'manager':
                    // console.log('Manager');
                    extra = 'phone';
                    break;
                case 'engineer':
                    // console.log('Engineer');
                    extra = 'github';
                    break;
                case 'intern':
                    // console.log('Intern');
                    extra = 'school';
                    break;
                default:
                    break;
            }
            //based on desig get more req info -phone github or school
            return inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'details',
                        message: `Enter team members ${extra}`
                    },
                    {
                        type: 'confirm',
                        name: 'ConfirmAddNewEmp',
                        message: 'Would you like to add a new Employee?',
                        default: false
                    }
                ])
                .then(function ({ details, ConfirmAddNewEmp }) {
                    // console.log(EmpName, Designation, Id, email, details, ConfirmAddNewEmp);
                    let newEmp;
                    if (Designation.toLowerCase() === 'manager') {
                        console.log('creating new manager');

                        newEmp = new Manager(EmpName, Id, email, details);
                        emp.push(newEmp);
                    }
                    if (Designation.toLowerCase() === 'engineer') {
                        console.log('creating new engineer');

                        newEmp = new Engineer(EmpName, Id, email, details);
                        emp.push(newEmp);
                    }
                    //Do you want to add a new team member
                    if (ConfirmAddNewEmp) {
                        return addNewEmp({ TeamName });
                    }
                    else {
                        return emp;
                    }

                })
            console.log(emp);
        })

}

promptTeamName()
    .then(addNewEmp)
    .then(data => {
        console.log(data);
        const pageHTML = generatePage(data);
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) {
                throw new Error(err);
            }
            console.log('Team Roster Generated');
        })
    })
    .catch(err => {
        if (err) {
            console.log(err);
        }
    });

