const fs = require('fs');
const inquirer = require('inquirer'); 
const generateReadme = require('./dist/readme-template.js');

// if no array established from previous input, create one

// if (!readmeContent.projects) {
//     readmeContent.projects = [];
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
            choices: ['MIT', 'Apache', 'GPL', 'BSD 2-clause', 'BSD 3-clause', 'BSD 4-clause','None']
        },
        {
            type: 'confirm',
            name: 'contributing',
            message: 'Would you like to invite other codes to contribute to your project?',
            default: "true"
        },
        { 
            type: 'input',
            name: 'tests',
            message: 'If there are any testing instructions, please enter in Tests section'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username? (required)',
            validate: githubNameInput => {
                if (githubNameInput) {
                    return true;
                }else {
                    console.log('Please enter your Username.');
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please add the GitHub link to your project. (required)',
            validate: githubLinkInput => {
                if (githubLinkInput) {
                     return true;
                } else {
                     console.log('Please enter the link to your Github repository for this project.');
                     return false;
                }
            }

        },
        {
            type: 'input',
            name: 'contact',
            message: 'Please enter your e-mail address or other contact information if someone has a question(s) for you. (required)',
            validate: enterContactInfo => {
                if (enterContactInfo) {
                    return true;
                } else {
                    console.log('Please enter your contact information.');
                    return false;
                }
            }
        },
    ]);


// promptCreateReadme()
//     .then(readmeContent => {
//         const pageMD = generateReadme(readmeContent);

//         fs.writeToFile('./dist/README.md', pageMD, err => {
//             if(err) console.log(err);
//             return;
//         })
//         console.log('page created');
//     })
       

    
            

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
