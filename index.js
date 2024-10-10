// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import { type } from "os";

// TODO: Create an array of questions for user input
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
        name: `insallSteps`,
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
        name: `license`,
        message: `Will you add a licnese?`,
        default: true,
    },
    {
        when:(answers) => answers.license,
        type: `list`,
        name: `licenseType`,
        message: `Please select a license`,
        choices: [`MIT`, `GPL`, `Apcache 2.0`, `BSD`, `Creative Commons`, `MPL`, `Unlicense`],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
}

// inquirer.prompt(questions).then((answers) => {
//     console.log(JSON.stringify(answers, null, `\n`));
// });
// Function call to initialize app
init();
