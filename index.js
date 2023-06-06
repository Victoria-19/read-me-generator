// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const fs = require('fs');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for using your project.',
    },
    {
        type: 'input',
        name: 'what',
        message: 'What is your project and what problem will it solve?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will someone use this?',
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Did other developers contribute to your project?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Do you want a license for your project?',
        choices: ['mit', 'no license']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// function to write README file

const writeFile = (fileContent) => {
fs.writeFile('./dist/generatedREADME.md', fileContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File created!');
  });
};

// function to prompt questions and store user inputs
const init = () => {
        return inquirer.prompt(questions)
        .then(readmeData => {
            return readmeData;
        })
    };

// Function call to initialize app
init()
    .then(readmeData => {
        console.log(readmeData);
        return generateMarkdown(readmeData);
      })
      .then(pageMD => {
        return writeFile(pageMD);
      })
      .catch(err => {
        console.log(err);
      });
 