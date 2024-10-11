// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: If there is no license, return an empty string
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
  const licensePart =
  `## License
  ${answers.licenseType.title}
  ${licenseBadge}
  [View license here] => (${licenseLink})`;
  return licensePart;
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;