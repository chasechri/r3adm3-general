// readme template
module.exports = (templateData) => {
  console.log(templateData);
  const readmeInfo = templateData;
  return `# ${readmeInfo.title}
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
## Description
${readmeInfo.description}
## Installation
${readmeInfo.installation}
## Usage
${readmeInfo.usage}
## Contribution
${readmeInfo.contributions}
## Tests
${readmeInfo.test}
## License
${readmeInfo.license}

# Questions
* GitHub: ${readmeInfo.github} https://github.com/chasechri
* Email: 
You can reach out by email for additional questions ${readmeInfo.email}
`;
};
