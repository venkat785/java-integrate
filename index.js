const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `parameters` input defined 
  const owner = process.argv[2];
  const repository = process.argv[3];
  const base = process.argv[4];
  const head = process.argv[5];
  const output = 'ouptut + = ' + owner +' '+ repository +' ' + base +' ' + head; 
  console.log(output );
  const time = (new Date()).toTimeString();
  core.setOutput("output", output);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}