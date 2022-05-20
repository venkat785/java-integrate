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
