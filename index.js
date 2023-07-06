//Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Creating an array of questions for user input

questionnaires =[
  {
    type: "input",
    name: "title",
    message: "Please provide the name title for your Project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe what you have solved, why and what had motivated you for doing this project.  And how the project is standing out?",
  },
  {
    type: "input",
    name: "usages",
    message:
      "Please provide on how to use this project, technologies and languages used. ",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "GNU",  "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },

  {
    type: "input",
    name: "screenshot",
    message: "Your screenshot should be inside the folder dist and then please enter only that file name with extension here."
  },
  {
    type: "input",
    name: "link",
    message: "Please provide your live URL where others can access your deployed application."
  },
  
  {
    type: "input",
    name: "creator",
    message: "Please provide your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please provide GitHub usernames of the contributors, if any.",
    default: "",
  },
  
];

// Writing README.md File
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {
  inquirer.prompt(questionnaires).then((responses) => {
    console.log("Questions to create Professional README.md");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}
init();
