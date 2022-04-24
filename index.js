
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const generateMarkdown = require('./dist/README.js');

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
            message: 'If you would like to add a license to your project, please click on one of the options below.  If you would prefer not to add one or to add one later, please check "none".',
            choices: ['MIT', 'Apache', 'GPL', 'BSD 2-clause', 'BSD 3-clause', 'CC0','None']
        },
        {
            type: 'confirm',
            name: 'contribute',
            message: 'Are you interested in having other contribute to your project?',
            default: "true"
        },
        { 
            type: 'input',
            name: 'tests',
            message: 'If project includes tests for application, please include, along with examples on how to apply them.'
        },
  
        // contact details for questions
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username? (required)',
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
            message: 'Please add a link to your GitHub repository. (required)',
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


// function to initalize app
function init() {
    promptUser()
    .then(answers => {
    console.log(answers);

    const generatedMarkdown = generateMarkdown(answers);
    console.log(generatedMarkdown);       

    // generate readme
    fs.writeFile('./dist/README.md', generatedMarkdown, err => {
        if (err) throw err;
    });
});
}
 
//Function call to initialize app
init();
