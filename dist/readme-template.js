const fs = require('fs');

const generateSections = readmeArr => {
   
    const questionsReadmeArr = readmeArr.map(({title, descript, tableOfContents, installation, usage, license, contributing, tests, addlQuestions}) => {

return`

'# '${generateSections(templateData.title)}

'## ' ${generateSections(templateData.description)}

'## ' ${generateSections(templateData.tableOfContents)}

'## ' ${generateSections(templateData.installation)}

'## ' ${generateSections(templateData.usage)}

'## '${generateSections(templateData.license)}

'## '${generateSections(templateData.contributing)}

'## '${generateSections(templateData.tests)}

'## '${generateSections(templateData.addlQuestions)}

`;
});

return `
$(questionsreadmeArr.join('') }
    
  `;
};


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

// module.exports = readmeContent;
// const {title, description, installation, usage, license, contributing, tests, github, link, contact} = readmeContent;  