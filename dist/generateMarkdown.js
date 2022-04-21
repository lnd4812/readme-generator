// const fs = require('fs');

// const generateSections = (title, description, installation, usage, license, contributing, tests, github, link, contact) => {
   
//     // const questionsReadmeArr = readmeArr.map(({title, descript, tableOfContents, installation, usage, license, contributing, tests, addlQuestions}) => {

// return`

// '# '${generateSections(title)}

// '## ' ${generateSections(description)}

// '## Table of Contents
// * [Installation](#installation)
// * [Usage](#usage)
// * [Credits](#credits)
// * [License](#license)'

// '## ' ${generateSections(installation)}

// '## ' ${generateSections(usage)}

// '## '${generateSections(license)}

// '## '${generateSections(contributing)}

// '## '${generateSections(tests)}

// '## '${generateSections(github)}

// '## '${generateSections(link)}

// '## '${generateSections(contact)}

// `;
// });

// return `
// $(questionsreadmeArr.join('') }
    
//   `;
// };


module.exports = templateData => {
    const {title, description, installation, ...theRest} = templateData;  
    console.log(templateData);
// }

// 

// const createReadme = readmeContent => {

    return`
    '# '${title}

    '## ' ${description}

    '## ' ${tableOfContents}

    '## ' ${installation}

    '## ' ${usage}

    '## '${license}

    '## '${contributing}

    '## '${tests}

    '## '${addlQuestions}

    `;
};

// fs.writeFile('./generateMarkdown.js', createReadme(title, description, installation, usage, license, contributing, tests, github, link, contact), err => {
//     if (err) throw new Error(err);
// });

// module.exports = generateReadme;
// // const {title, description, installation, usage, license, contributing, tests, github, link, contact} = readmeContent;  