const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `parameters` input defined 
  const owner = core.getInput('owner');
  const repository = core.getInput('repository');
  const base = core.getInput('base');
  const head = core.getInput('head');
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