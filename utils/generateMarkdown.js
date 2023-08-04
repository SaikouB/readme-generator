// Function to render license badge based on user selection
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
// Function to render license link based on user selection
function renderLicenseLink(answers) {
  const licenseLink = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache': 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  const selectedLicense = answers;
  return licenseLink[selectedLicense] || '';
}
// Generate markdown file function
function generateMarkdown(answers) {
  let licenseBadge = renderLicenseBadge(answers.license);
  let licenseLink = renderLicenseLink(answers.license);
// Template string to generate README.md file based on users answers
  return `# ${answers.title}
  ![Static Badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#testing)
  - [License](#license)
  - [Questions](#questions)


## Description
${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Testing

${answers.tests}

## License

![Static Badge](https://img.shields.io/badge/license-${answers.license}-blue.svg) This project is licensed under ${licenseLink} 


## Questions
Feel free to check out more of my work on GitHub (https://github.com/${answers.github}),
or to contact me with any questions about this project, send me an email at ${answers.email}
`
}
// Exports generateMarkdown file in index.js to write README.md file
module.exports = generateMarkdown;