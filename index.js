// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
	const questions = [{
		type: 'input',
		name: 'title',
		message: 'What is the title of the project?',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				'Must enter a title to continue'
			}
		}
	}, {
		type: 'input',
		name: 'description',
		message: 'Enter a DESCRIPTION for the project:',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				'Must enter a description to continue'
			}
		}
	}, {
		type: 'input',
		name: 'installation',
		message: 'Enter INSTALLATION instructions:',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				'Must enter installation intructions to continue'
			}
		}
	}, {
		type: 'input',
		name: 'usage',
		message: 'Enter USAGE instructions',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				'Must enter usage details to continue'
			}
		}
	}, {
		type: 'input',
		name: 'contributing',
		message: 'Enter contributions:',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				'Must enter contributing to continue'
			}
		}
	}, {
		type: 'input',
		name: 'tests',
		message: 'Enter testing instructions ',
		validate: (answers) => {
			if (answers.length > 0) {
				return true;
			} else {
				'Must enter test to continue'
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
				'Must choose one of the following four to continue'
			}
		}
	}, {
		type: 'input',
		name: 'github',
		message: 'What is your GitHub username?',
	}, {
		type: 'input',
		name: 'email',
		message: 'What is your email address?',
	}];

// TODO: Create a function to write README file
const writeHTML = (readMe, answers) => {
	let readMeFile = generateMarkdown(answers);

	fs.writeFile(readMe, readMeFile, (error) => error)
		.then(() => console.log('README.md successfully generated!'))
		.catch((error) => console.log(error))
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then(function (answers) {
		let readMe = 'README.md';
		writeHTML(readMe, answers)
	});
}

// Function call to initialize app
init();