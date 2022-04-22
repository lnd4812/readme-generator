const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./dist/generateMarkdown.js');

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
            choices: ['MIT', 'Apache', 'GPL', 'BSD 2-clause', 'BSD 3-clause', 'BSD 4-clause','None']
        },
        {
            type: 'confirm',
            name: 'contributing',
            message: 'Are you interested in having other contribute to your project?',
            default: "true"
        },
        { 
            type: 'input',
            name: 'tests',
            message: 'If project includes tests for application, please include, along with examples on how to apply them.'
        },
    ]);
};

  
    //include section with contact details for those with questions
    const promptQuestions = dataQuestions => {
    console.log(`
    
    QUESTIONS?

    If you have any questions, please see my contact details below:
    `);

    // first create questions array 
    
    return inquirer
        .prompt([
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
                message: 'Please enter the e-mail address at which you may be contacted. (required)',
                validate: enterContactInfo => {
                    if (enterContactInfo) {
                        return true;
                    } else {
                        console.log('Please enter your contact information.');
                        return false;
                    }
                }
            }
        ])
     }        
      
    promptUser()
        .then (promptQuestions)
        .then(data => {
         const readmePage = generateMarkdown(data); 
       
            fs.writeFile('./dist/generateMarkdown.js', readmePage, err => {
            if (err) throw err;
            return;
            });    
        
    });


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

     

    
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
