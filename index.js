// TODO: Include packages needed for this application
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
    {
        //README title prompt
        type: `input`,
        name: `title`,
        message: "Input the title of your README, typically your project title",
    },
    {
        //README motive
        type: `input`,
        name: `motive`,
        message: "In 1 to 2 sentences, describe your motive for making this project",
    },
    {
        //README why did you make this project
        type: `input`,
        name: `whyMake`,
        message: "In 1 to 2 sentences, describe why you made this project",
    },
    {
        //README what this solved
        type: `input`,
        name: `solved`,
        message: "In 1 to 2 sentences, describe what this project accomlpished solving",
    },
    {
        //README what was learned
        type: `input`,
        name: `learned`,
        message: "In 1 to 2 sentences, describe what you learned while making this project",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
