// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');  
const generatePage = require('./src/page-template');

// TODO: Create an array of questions for user input
;

const promptCreateReadme = readmeContent => {
   
// if no array established from previous input, create one

if (!readmeContent.projects) {
    readmeContent.projects = [];
}
 return inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project. (required)',
            validate:   titleEntered => {
                if (titleEntered) {
                    return true;
                } else {
                    console.log('Please enter project title!');
                    return false;
                }    
            }
        },
        {   type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (required)',
            validate:   descriptionEntered => {
                if (descriptionEntered) {
                    return true;
                } else {
                    console.log('Please provide a description of your project.');
                    return false;
                }
            }
        },       
        {   
            type: 'input',
            name: 'installation',
            message: 'Please provide guidelines for installation or deployment of your project. (required)',
            validate:   installationAdded => {
                if (installationAdded) {
                    return true;
                } else {
                    console.log('Please enter instructions for the installation of your project.  If not applicable, enter NA.');
                    return false;
                }
            }    
        },
        {   
            type: 'input',
            name:  'usage',
            message: 'Please provide details about the usage or purpose of your project.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'If you would like to add a license to your project, please click on one of the choices below.  If you would prefer not to add one, please check "none".',
            choices: ['MIT', 'None']
        }
    
    
   

    const questions = () => {
        return inquirer
            .prompt ([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project'
            }
     ]);

    ]) 
    }

    
            
        )
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
