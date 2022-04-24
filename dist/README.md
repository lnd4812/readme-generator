
# Title
  
## Description
    
readme generator

## Table of Contents
    
[Installation](https://github.com/lnd4812/readme-generator#installation)
[Usage](https://github.com/lnd4812/readme-generator#usage)
[Credits](https://github.com/lnd4812/readme-generator#credits)
[License](https://github.com/lnd4812/readme-generator#license)
    
## Installation
    
type in node index.js
    
##  Usage
   
create readme for projects
    
## License
    
This repository includes [license](function renderLicenseLink(license) {
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
})).

## Contributing
   
false
    
## Testing
   
no tests applicable
==========
QUESTIONS??
===========

If you have any questions, please see my contact details below:
        
## GitHub Address
    
My GitHub address may be accessed here #[GitHub address](<a href=lnd4812>here</a>)
        
## GitHub Repository
    
Please click on the following link to access the repository for this program #[GitHub Repo Link github.com](https://github.com/lnd4812/readme-generator)
        
## Contact information
        
To contact me directly, please feel free to drop me an e-mail at the following address: [email address](<a hef="mailto:laurelda">laureldavid64@gmail.com</a>);
