const fs = require("fs");

// template that will create the README file

// function to return a license badge based on which license is passed in; if no license, an empty string is returned
function renderLicenseLink(license) {
    
    let licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";

    // switch (license) {

    //     case "MIT": 
    //     licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    // //     break;

    //     case "Apache": 
    //     licenseLink = "([![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    //     break;

    //     case "BSD 2-clause": 
    //     licenseLink = "[![License: BSD 2-clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
    //     break; 

    //     case "BSD 3-clause":
    //     licenseLink = "[![License: BSD 3-clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    //     break; 

    //     case "CC0": 
    //     licenseLink = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
    //     break;

    //     default:
    //     licenseLink = "";
    //     break;
    // }
   return licenseLink;
}
 

// function that returns the license section of README; if there is no license, an empty string is returned
function renderLicenseSection(license) {    
      
    let licenseSection = "[MIT license link](https://choosealicense.com/licenses/mit/)";   
    
    // switch (license) {

    //     case "MIT": 
        // licenseSection = "[MIT license link](https://choosealicense.com/licenses/mit/)";
    //     break;

    //     case "Apache": 
    //     licenseSection = "[Apache license link](https://choosealicense.com/licenses/apache-2.0/)";
    //     break; 

    //     case "BSD 2-clause":
    //     licenseSection = "[2-Clause BSD license link](https://opensource.org/licenses/BSD-2-Clause)";
    //     break;

    //     case "BSD 3-clause": 
    //     licenseSection = "[3-Clause BSD license link](https://opensource.org/licenses/BSD-3-Clause)";
    //     break;

    //     case "CC0": 
    //     licenseSection = "[Creative Commons Zero](https://creativecommons.org/publicdomain/zero/1.0/)";
    //     break; 

    //     default: 
    //     licenseSection = "";
    //     break;
    // }    
    return licenseSection;
    
};

// function to generate markdown for read me

function generateMarkdown(data) {

let licenseLink = renderLicenseLink(data.license);
let licenseSection = renderLicenseSection(data.license);

return `
${licenseLink}

# Title
${data.title}

  
## Description
    
${data.description}

## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Testing](#testing)
* [Credits](#credits)
* [Questions](#questions)
    
## Installation
    
${data.installation}
    
##  Usage
   
${data.usage}
    
## License
    
This repository includes a(n) ${data.license}${licenseSection} license. 

## Contributing
   
${data.contribute}
    
## Testing
   
${data.tests}

## Credits

${data.credits}

## Questions?

If you have any questions, please see my contact details below:
        
## GitHub Username
    
My GitHub Username is <a href="https://github.com/${data.github}">lnd4812</a>
        
## GitHub Repository
    
My GitHub repository link for this project is <a href="https://git@github.com/${data.link}">lnd4812/readme-generator.git</a>
        
## Contact information
        
To contact me directly, please feel free to drop me an e-mail at: <a hef="mailto:${data.contact}">laureldavid64@gmail.com</a>
`;
  
};
      
// access information produced from index.js file
module.exports = generateMarkdown;


    

