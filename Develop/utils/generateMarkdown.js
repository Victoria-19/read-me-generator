// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseBadges = {
      'MIT': 'https://img.shields.io/badge/license-MIT-brightgreen',
      'Apache 2.0': 'https://img.shields.io/badge/license-Apache%202.0-blue',
      // Add more licenses and their badge URLs as needed
    };
  
    if (license && licenseBadges[license]) {
      return `![License Badge](${licenseBadges[license]})`;
    } else {
      return '';
    }
  }
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      // Add more licenses and their URLs as needed
    };
  
    if (license && licenseLinks[license]) {
      return `[License Link](${licenseLinks[license]})`;
    } else {
      return '';
    }
  }
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
      const licenseBadge = renderLicenseBadge(license);
      const licenseLink = renderLicenseLink(license);
  
      return `
  ## License
  
  ${licenseBadge}
  
  This project is licensed under the ${license} License. ${licenseLink}
      `;
    } else {
      return '';
    }
  }
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
    ## Table-of-Contents
  
    * [Description](#description)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Installation](#installation)
    * [Tests](#tests)
    * [Questions](#questions)
    * ${renderLicenseSection(data.license)}
    
    ## [Description](#table-of-contents)
  
    ${data.what}
  
    ${data.why}
  
    ${data.how}
  
    ## [Usage](#table-of-contents)
    ${data.usage}
   
    ## [Contributing](#table-of-contents)
    
    ${data.contribute}
  
    ## [Installation](#table-of-contents)

    ${data.installation}
  
    ## [Tests](#table-of-contents)
  
    ${data.test}
  
    ## [Questions](#table-of-contents)
  
    Contact me using the following links:
  
    [GitHub](https://github.com/${data.githubUsername})
  
    [Email: ${data.email}](mailto:${data.email})
  `;
  }

module.exports = generateMarkdown;