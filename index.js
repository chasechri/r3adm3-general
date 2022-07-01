const inquirer = require("inquirer");

const fs = require("fs");

const generatePage = require("./src/generateMarkdown.js");

const promptQuestions = (readmeData) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of your project.",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a short description of your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide the steps required to install your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "contributions",
      message:
        "If you created an application and would like other developers to contribute it, you can include guidelines for how to do so.",
    },
    {
      type: "input",
      name: "test",
      message: "Provide information on how to run tests on your application",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Choose a license for your project",
      choices: [
        "The MIT License",
        "Apache License",
        "BSD License",
        "GPL License",
        "Mozilla Public License",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address.",
    },
  ]);
};

promptQuestions().then((readmeData) => {
  const pageReadme = generatePage(readmeData);
  fs.writeFile("./readme.folder/README.md", pageReadme, (err) => {
    if (err) throw err;

    console.log("README complete! Check out README to see the output!");
  });
});
