// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: If there is no license, return an empty string
//Renders badge
export function renderLicenseBadge(answers) {
  let licenseBadge = ``;
  if (answers.license === false) {
    return licenseBadge;
  } else {
    licenseBadge = answers.licenseType.badge;
    return licenseBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export function renderLicenseLink(answers) {
  let licenseLink = ``;
  if (answers.license === false) {
    return licenseLink;
  } else {
    licenseLink = answers.licenseType.link;
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export function renderLicenseSection(answers, licenseLink, licenseBadge) {
  if (answers.license === false) {
    const licensePart = ``;
    return licensePart;
  } else {
  const licensePart =
  `## License
  ${answers.licenseType.title}\n
  ${licenseBadge}\n
  [View license here] => (${licenseLink})`;
  return licensePart;
  }
}

//function to create table of contents
export function renderTable(answers) {
  const tableInput = [];
  if (answers.install) tableInput.push(`-[Install](#install)\n`);
  if (answers.usage) tableInput.push(`-[Usage](#usage)\n`);
  if (answers.credits) tableInput.push(`-[Credits](#credits)\n`);
  if (answers.license) tableInput.push(`-[License](#license)\n`);
  return tableInput.join(`\n`);
}

export function renderDescription(answers) {
  const description = 
  `## Description
    ${answers.motive}
    ${answers.whyMake}
    ${answers.solved}
    ${answers.learned}`;
    return description;
}

export function renderTest(answers) {
  if (answers.test === false) {
    const testArea = ``;
    return testArea;
  } else {
    const testArea = 
    `## Test
    ${answers.testInfo}`;
    return testArea;
  };
};

// TODO: Create a function to generate markdown for README
//generates markdown
function generateMarkdown(answers, description, table, licensePart, testArea) {
  return `# ${answers.title}

  ${description}

  ## Table of Contents
  ${table}

  ## Installation
  ${answers.installSteps}

  ## Usage
  ${answers.usageInfo}

  ## Credits
  ${answers.creditInfo}

  ${licensePart}

  ${testArea}


  Questions? Please contact me at:
  https://github.com/${answers.gitHub} or ${answers.email}

`;
}

export default generateMarkdown;