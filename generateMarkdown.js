// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answer) {
  let licenseBadge = [];
  if (answer.license === false)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answer) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answer) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;

//license badges:
//MIT:
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//Apache 2.0
//[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//BSD 3
//[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
//Creative Commons Attribution 4.0
//[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
//MPL
//[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

//license links
//https://opensource.org/license/MIT

//https://opensource.org/license/apache-2-0

//https://opensource.org/license/BSD-3-Clause

//https://creativecommons.org/licenses/by/4.0/

//https://opensource.org/license/MPL-2.0