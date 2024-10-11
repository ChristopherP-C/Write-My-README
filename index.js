// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import { type } from "os";
import generateMarkdown, { renderDescription, renderLicenseBadge, renderLicenseLink, renderLicenseSection, renderTable } from "./generateMarkdown.js";

// TODO: Create an array of questions for user input
const licenseInfo = [
    {
        name: `MIT`,
        value: {
            title: `MIT`,
            badge: `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
            link: `https://opensource.org/license/MIT`
        }
    },
    {
        name: `Apache 2.0`,
        value: {
            title: `Apache 2.0`,
            badge: `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
            link: `https://opensource.org/license/apache-2-0`
        }
    },
    {
        name: `BSD 3`,
        value: {
            title: `BSD 3`,
            badge: `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
            link: `https://opensource.org/license/BSD-3-Clause`
        }
    },
    {
        name: `Creative Commons Attribution 4.0`,
        value: {
            title: `Creative Commons Attribution 4.0`,
            badge: `!![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`,
            link: `https://creativecommons.org/licenses/by/4.0/`
        }
    },
    {
        name: `MPL`,
        value: {
            title: `MPL`,
            badge: `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
            link: `https://opensource.org/license/MPL-2.0`
        }
    },
]

const questions = [
    {
        //README title prompt
        type: `input`,
        name: `title`,
        message: "Input the title of your README, typically your project title",
    },
    {
        //README motive prompt
        type: `input`,
        name: `motive`,
        message: "In 1 to 2 sentences, describe your motive for making this project",
    },
    {
        //README why did you make this project prompt
        type: `input`,
        name: `whyMake`,
        message: "In 1 to 2 sentences, describe why you made this project",
    },
    {
        //README what this solved prompt
        type: `input`,
        name: `solved`,
        message: "In 1 to 2 sentences, describe what this project accomlpished solving",
    },
    {
        //README what was learned prompt
        type: `input`,
        name: `learned`,
        message: "In 1 to 2 sentences, describe what you learned while making this project",
    },
    {
        //README install instructions
        type: `confirm`,
        name: `install`,
        message: `would you like to provide install instructions?`,
        default: true,
    },
    {
        when:(answers) => answers.install,
        type: `input`,
        name: `installSteps`,
        message: `Provide step-by-step install instuctions`,
    },
    {
        type: `confirm`,
        name: `usage`,
        message: `Add usage information?`,
        default: true,
    },
    {
        when:(answers) => answers.usage,
        type: `input`,
        name: `usageInfo`,
        message: `Please provide usage instructions`,
    },
    {
        type: `confirm`,
        name: `credits`,
        message: `were there any collaborators?`,
        default: true,
    },
    {
        when:(answers) => answers.credits,
        type: `input`,
        name: `creditInfo`,
        message: `Please input collaborator information`,
    },
    {
        type: `confirm`,
        name: `license`,
        message: `Will you add a licnese?`,
        default: true,
    },
    {
        when:(answers) => answers.license,
        type: `list`,
        name: `licenseType`,
        message: `Please select a license`,
        choices: licenseInfo,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, markdown) {
    const dir = './dist';
    const fullPath = `${dir}/${fileName}`;

    fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) {
            console.error(`Could not create directory:`, err);
            return;
        }

        fs.writeFile(fullPath, markdown, (err) => {
            if (err) {
                console.error(`Could not create README:`, err);
            } else {
                console.info(`README file was created in the dist folder!`);
            }
        });
    });
}

// TODO: Create a function to initialize app
function init() {
}

 inquirer.prompt(questions).then((answers) => {
    //creates a description
     const description = renderDescription(answers);
     
     //creates our license information
    const licenseBadge = renderLicenseBadge(answers);
    const licenseLink = renderLicenseLink(answers);
    const licensePart = renderLicenseSection(answers, licenseLink, licenseBadge);

    //creates table of contents
    const table = renderTable(answers);

    const markdown = generateMarkdown(answers, description, table, licensePart);

    writeToFile(`README.md`, markdown);
});
// Function call to initialize app
init();
