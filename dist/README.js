
   

const generateData = data => {
 
    return `
     
    '# '${title}

  
    '## Description'
    
    ${description}

    '## Table of Contents
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)'
    
   '## Installation'
    
   ${installation}
    
   '##  Usage'
   
   ${usage}
    
   ## License
    
   This repository includes a <a href="add license.link">${license}</a>
       
   ## Contributing
   
   ${contribute}
    
   ## Testing
   
   ${tests}
`;
};   

  
const generateQuestions = questions => { 
  return`
  
'If you have any questions, please see my contact details below:'
  
## GitHub Adddress'

     <a href="${github}"></a>
    
    ## GitHub Repository

    <a href="${link}"></a>
  
    ## Contact information
    
    <a href="mailto:${contact}"></a>
  `;
     
};
    
   
module.exports = generateMarkdown  => {
    const {data, questions} = generateMarkdown;
    
    return `

    // const data = {
    //     title: generateMarkdown.title,
    //     description: generateMarkdown.description,
    //      installation: generateMarkdown.installation,
    //      usage: generateMarkdown.usage;
    //      license: generateMarkdown.license,
    //      contribute: generateMarkdown.contribute,
    //      tests: generateMarkdown.tests,
    //  };

     ${generateData(data)}
     '# '${data.title}

     '## Description'

     ${data.description}
     '## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
     * [Credits](#credits)
     * [License](#license)'
    
     '## Installation'

     ${data.installation}

     '## Usage'

     ${data.usage}

     '## License'

     ${data.license}

     '## Contributing'
     ${data.contribute}

     '## Testing'
     ${data.tests}

     
     'For any questions, please note my contact information below:

     ${generateQuestions(questions)}
     ## GitHub Username'
  
    ${questions.github}

     '## GitHub repository Link'

     ${questions.link}

     '## E-mail address'

     ${questions.contact}

     `;
 };    


