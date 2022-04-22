function generateMarkdown(data) {
    return `# ${data.title}
  
    ##  ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    
    ##  ${data.installation}
    
    ##  ${data.usage}
    
    ## ${data.license}
    
    ## ${data.contributing}
    
    ## ${data.tests}
    
    ## ${gdata.github}
    
    ## ${data.link}
    
    ## mailto:${data.contact}.;
    
    `;
    };
    
  
  
module.exports = generateMarkdown;
  



