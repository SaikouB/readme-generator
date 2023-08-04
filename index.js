// Required packages to include inquirer and file system
const inquirer = require('inquirer');
const fs = require('fs/promises');
// Link to developing markdown page
const generateMarkdown = require('./utils/generateMarkdown.js');
// Array of questions that respond to user input
	const questions = [{
		type: 'input',
		name: 'title',
		message: 'What is the title of the project?',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				console.log('Must enter a title to continue');
				return false;
			}
		}
	}, {
		type: 'input',
		name: 'description',
		message: 'Please enter a DESCRIPTION for the project:',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				console.log('Must enter a description to continue');
				return false;
			}
		}
	}, {
		type: 'input',
		name: 'installation',
		message: 'Will you like to include any installation instructions? if not enter N/A.',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				console.log('Must enter installation intructions to continue');
				return false;
			}
		}
	}, {
		type: 'input',
		name: 'usage',
		message: 'Please provide instructions on how to use this application project:',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				console.log('Must enter usage details to continue');
				return false;
			}
		}
	}, {
		type: 'input',
		name: 'contributing',
		message: 'Who are the contributors? Also how can other users contribute to this project?',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				console.log('Must enter value to continue');
				return false;
			}
		}
	}, {
		type: 'input',
		name: 'tests',
		message: 'Enter testing instructions if any:',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				console.log('Must enter test to continue, if none, enter N/A');
				return false;
			}
		}
	}, {
		type: 'list',
		name: 'license',
		message: 'Enter license provider:',
		choices: ['MIT', 'GPL', 'APACHE', 'N/A'],
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				console.log('Please choose one of the following to continue');
				return false;
			}
		}
	}, {
		type: 'input',
		name: 'github',
		message: 'What is your GitHub username?'
	}, {
		type: 'input',
		name: 'email',
		message: 'What is your email address?'
	}];
// Function to write README.md file
const writeMdFile = (readMe, answers) => {
	let readMeFile = generateMarkdown(answers);
	fs.writeFile(readMe, readMeFile)
	.then(() => console.log('Successfully generated README.md!'))
	
}
// Function to initialize app
function init() {
	let readMe = './output/README.md';
	inquirer.prompt(questions).then(function (answers) {
		writeMdFile(readMe, answers)
	});
}
// Function call to initialize app
init();