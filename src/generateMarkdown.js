module.exports = (templateData) => {
  console.log(templateData);
  const readmeInfo = templateData;
  return `# ${readmeInfo.title}
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

# Questions
* GitHub: ${readmeInfo.github} https://github.com/chasechri
* Email: 
You can reach out by email for additional questions ${readmeInfo.email}
`;
};
