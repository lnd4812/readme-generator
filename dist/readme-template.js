const fs = require('fs');
const questions = process.argv.slice(2);


// generateProjects => createReadme - define projectsArr
// 

const createReadme = readmeContent => {

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