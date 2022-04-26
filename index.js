const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');  // template for README

// use inquirer module to prompt a user for necessary input to populate the README template
const promptUser = () => {
    
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project. (required)',
            validate: titleEntered => {
                if (titleEntered) {
                    return true;
                } else {
                    console.log('Please enter project title!');
                    return false;
                }    
            }
        },
        {   
            type: 'input',
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
            message: 'Please provide guidelines for how to install your project (required)',
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
            message: 'Please explain how project is to be used, including examples where applicable.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'If you would like to add a license to your project, please click on one of the options below and hit Enter.',
            choices: ['MIT', 'Apache', 'BSD 2-clause', 'BSD 3-clause', 'CC0', 'none']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'If you would like other developers to contribute to your project, please include guidelines for how to do so.'
        },
        { 
            type: 'input',
            name: 'tests',
            message: 'If project includes tests for application, please include, along with examples on how to apply them.'
        },
        { 
            type: 'input',
            name: 'credits',
            message: 'If you had collaborators or consulted other sources for input or assistance on your project, please list them below with links to their respective Github profiles or URLs.'
        },
  
        // contact details for questions
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username? (required - please include the "github.com/")',
            validate: githubNameInput => {
                if (githubNameInput) {
                    return true;
                } else {
                    console.log('Please enter your Username.');
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please add a link to your GitHub repository. (required - please enter complete url)',
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
            name: 'video',
            message: 'Please add a link to the video of application in use. (required)',
            validate: videoInput => {
                if (videoInput) {
                            return true;
                } else {
                        console.log('Please add the link to your video.');
                        return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Please enter an e-mail address at which you may be contacted in case there are questions. (required)',
            validate: enterContactInfo => {
                if (enterContactInfo) {
                    return true;
                } else {
                    console.log('Please enter your contact information.');
                    return false;
                }
            } 
        }
    ]);
};


// function to initalize app and create array of answers required to population the template and then generate the README
function init() {
    promptUser()
        .then(answers => {
        const generatedMarkdown = generateMarkdown(answers);
    
        // generate readme
        fs.writeFileSync('./dist/README.md', generatedMarkdown, err => {
            if (err) throw err;
        });
    });
};
 
//Function call to initialize app
init();
