#!/usr/bin/env node

const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

if (!Octokit) {
    throw new Error('@octokit/rest is needed');
}

const octokit = new Octokit({
    auth: process.env['GITHUB_TOKEN'],
});

// `parameters` input defined 
const owner = core.getInput('owner');
const repository = core.getInput('repository');
const base = core.getInput('base');
const head = core.getInput('head');

async function execute() {
    // Acquire the commits between the head and base
    const { data: { branch } } = await octokit.repos.getBranch({
        owner: owner,
        repo: repository,
        branch: base,
    });

    var sha1 = branch.Commit.Sha();

    // Process each PRs details into a single str
    ing
    var out = 'Owner:' + owner + '\nRepository:' + repository + '\nBase:' + base + '\Sha1:' + sha1 + '\n';

    // Write to the log
    console.log(out);
    // Return to the github action
    core.setOutput("output", out);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log('The event payload: ${payload}');

    await octokit.rest.pulls.create({
        owner: 'venkat785',
        repo: 'java-integrate',
        base: 'main',
        head: 'jsdev',
        title: 'Merge -> ' + head + ' to ' + base,
        body: head + '\n' + out,
    });
}

execute().catch((e) => core.setFailed(e.message));
