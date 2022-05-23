#!/usr/bin/env node
const github = require('@actions/github');

import * as dotenv from 'dotenv';
import { Octokit } from '@octokit/rest';

if (!dotenv) {
    throw new Error('dotenv is needed');
}

if (!Octokit) {
    throw new Error('@octokit/rest is needed');
}
dotenv.config();

if (!process.env['TOKEN_GITHUB']) {
  throw new Error('Set TOKEN_GITHUB environment variable');
}
const octokit = new Octokit({
    auth: process.env['GITHUB_TOKEN'],
});
