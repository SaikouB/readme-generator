// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  const licenseBadge = {
    'MIT': 'https://img.shields.io/badge/license-MIT',
    'GPL': 'https://img.shields.io/badge/license-GPL',
    'Apache': 'https://img.shields.io/badge/license-Apache',
    'N/A': 'https://img.shields.io/badge/license-N/A'
  }
  const pickedLicense = answers;
  return licenseBadge[pickedLicense] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  const licenseLink = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache': 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  const selectedLicense = answers;
  return licenseLink[selectedLicense] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  }
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let licenseBadge = renderLicenseBadge(answers.license);
  let licenseLink = renderLicenseLink(answers.license);
  // console.log(licenseBadge)
  return `# ${answers.title}
  ![Static Badge](https://img.shields.io/badge/license-${answers.license}-green.svg)

## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#testing)
  - [License](#license)
  - [Questions](#questions)


## Description
${answers.installation}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Testing

${answers.tests}

## License

This project is licensed under ${licenseLink}


## Questions
Feel free to contact me with any questions about this project directly via GitHub: 
(https://github.com/${answers.github}) or just send me an email at ${answers.email} 

`
}

module.exports = generateMarkdown;