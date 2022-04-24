
# Title
Readme Generator
  
## Description
    
Module 9 challenge assignment requiring the use of Node js to create a command line program to generate a README.md template.  Integration with the inquirer and file system modules enabled a series of questions to prompt the user for questions that were then exported to a template using fs writeFile and module.exports to access and allocate the data returned from the inquirer prompt function.

## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Testing](#testing)
* [Credits](#credits)
* [Questions](#questions)
    
## Installation
    
typing "node index.js" in the command line will initiate the app.
    
##  Usage
   
A developer may use this template to produce a README for any project pushed to GitHub by answering a series of questions rather than having to create a README from scratch for each project.  
    
## License
    
This repository includes function renderLicenseLink(link) {
    return ` 
    
    switch ${license} {

        case "MIT":
        licenseLink = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)];
        break;

        case "Apache":
        licenseLink = ([![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)];
        break;

        case "BSD 2-clause":
        licenseLink = [![License: BSD 2-clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)];
        break;

        case "BSD 3-clause":
        licenseLink = [![License: BSD 3-clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)];
        break;

        case "CC0":
        licenseLink = [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)];
        break;

        default:
        licenseLink = "";
        break;
    }
    
    `;
},function renderLicenseSection(license) {    
    return ` 
    switch ${license} {

        case "MIT":
        licenseSection = [MIT license link](https://choosealicense.com/licenses/mit/);
        break;

        case "Apache":
        licenseSection = [Apache license link](https://choosealicense.com/licenses/apache-2.0/);
        break;

        case "BSD 2-clause":
        licenseSection = [2-Clause BSD license link](https://opensource.org/licenses/BSD-2-Clause);
        break;

        case "BSD 3-clause":
        licenseSection = [3-Clause BSD license link](https://opensource.org/licenses/BSD-3-Clause);
        break;

        case "CC0":
        licenseSection = [Creative Commons Zero](https://creativecommons.org/publicdomain/zero/1.0/);
        break;

        default:
        licenseSection = "";
        break;
    }
    `;
}MIT.

## Contributing
   
. Please visit the contributor-covenant.org site for informaton.
    
## Testing
   
do a run through of the function to ensure all informaiton is being added to the generated README as intended.

## Credits

Tutoring sessions, Office Hours, various look-ups on Stack Overflow , MDN Docs and W3 schools

## QUESTIONS??

If you have any questions, please see my contact details below:
        
## GitHub Username
    
My GitHub Username is lnd4812
        
## GitHub Repository
    
My GitHub repository link for this project is [github repository](https://git@github.com/lnd4812/readme-generator.git)
        
## Contact information
        
To contact me directly, please feel free to drop me an e-mail at: (<a hef="mailto:laureldavid@rmacan.com">laureldavid64@gmail.com</a>);
