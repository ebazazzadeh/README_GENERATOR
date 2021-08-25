// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatorReadMeFile = require("./generateReadMeFile");
const fs = require("fs"); 

//   array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
      },
    
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Describe your project:',
        name: 'description',
      },
     
      {
        type: 'list',
        message: 'Would you like to add images to your description?',
        name: 'promptImage',
        choices: ['Yes', 'No']
      },
      {
        type: 'input',
        message: 'Place url or path here',
        name: 'image1',
        when: (answers) => answers.promptImage === 'Yes'
      },
      {
        type: 'list',
        message: 'Would you like to add another image to your description?',
        name: 'promptImage2',
        choices: ['Yes', 'No'],
        when: (answers) => answers.promptImage === 'Yes'
      },
      {
        type: 'input',
        message: 'Place url or path here',
        name: 'image2',
        when: (answers) => answers.promptImage2 === 'Yes'
      },
      {
        type: 'list',
        message: 'Would you like to add another image to your description?',
        name: 'promptImage3',
        choices: ['Yes', 'No'],
        when: (answers) => answers.promptImage2 === 'Yes'
      },
      {
        type: 'input',
        message: 'Place url or path here',
        name: 'image3',
        when: (answers) => answers.promptImage3 === 'Yes'
      },

      {
        type: 'list',
        message: 'Would you like to add video to your description?',
        name: 'promptVideo',
        choices: ['Yes', 'No'],
      },
      {
        type: 'input',
        message: 'Place url or path here',
        name: 'video1',
        when: (answers) => answers.promptVideo === 'Yes'
      },

      {
        type: 'input',
        message: 'What are the instructions for installation?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'How can this be used?',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What licenses would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'none']
      },
      {
        type: 'input',
        message: 'Enter any contributors here:',
        name: 'contribute',
      },
      {
        type: 'list',
        message: 'Using gitHub pages?',
        name: 'gitTorF',
        choices: ['Yes', 'No']
      },
      {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'gitName',
      },
      {
        type: 'list',
        message: 'Do you have a gitHub Repo?',
        name: 'gitRepoTF',
        choices: ['Yes', 'No'],
        when: (answers) => answers.gitTorF === 'No'
      },
      {
        type: 'input',
        message: 'What is the name of your gitHub repository?',
        name: 'gitRepo',
        when: (answers) => answers.gitTorF === 'Yes' || answers.gitRepoTF === 'Yes'
      },
      {
        type: 'input',
        message: 'Links to deployed project',
        name: 'projLinks',
        when: (answers) => answers.gitTorF === 'No'
      },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./Generator/"+fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log ("Successfully wrote: " + fileName);
        })
        
}


// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("README.md", generatorReadMeFile(data));
    })
}




// Function call to initialize app
init();
