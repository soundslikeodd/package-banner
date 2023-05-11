#!/usr/bin/env node

import fs from 'fs';
import yargs from 'yargs';
import packageBanner, {METADATA_ALIGN, ALIGN_RIGHT} from '../index.js';

const argv = yargs(process.argv.slice(2))
    .usage('Usage: $0 <command> [options]')
    .help('h')
    .alias('h', 'help')
    .boolean('debug')
    .describe('d', 'print debug info')
    .alias('d', 'debug')
    .boolean('hideScope')
    .describe('s', 'hide package scope')
    .alias('s', 'hideScope')
    .boolean('capitalCase')
    .describe('c', 'print packge name in capital case')
    .alias('c', 'capitalCase')
    .boolean('breakOnWord')
    .describe('b', 'print package name with line break on words')
    .alias('b', 'breakOnWord')
    .choices('metaDataAlign', METADATA_ALIGN)
    .describe('m', `alignment for package metadata, default '${ALIGN_RIGHT}'`)
    .alias('m', 'metaDataAlign')
    .array('additionalPackageInfo')
    .describe('a', 'print package name with line break on words')
    .alias('a', 'additionalPackageInfo')
    .describe('packageNameFont', 'figlt.js font name')
    .alias('p', 'packageNameFont')
    .config('boxenOptions', configPath => JSON.parse(fs.readFileSync(configPath, 'utf-8')))
    .describe('boxenOptions', 'boxen config as a JSON file')
    .alias('x', 'boxenOptions')
    .config('figletOptions', configPath => JSON.parse(fs.readFileSync(configPath, 'utf-8')))
    .describe('figletOptions', 'figlt.js config as a JSON file')
    .alias('f', 'figletOptions')
    .argv;

packageBanner(
    {
        packagePath: process.cwd() + '/package.json',
        debug: argv.debug,
        hideScope: argv.hideScope,
        capitalCase: argv.capitalCase,
        breakOnWord: argv.breakOnWord,
        packageNameFont: argv.packageNameFont,
        metaDataAlign: argv.metaDataAlign,
        additionalPackageInfo: argv.additionalPackageInfo,
        boxenOptions: argv.boxenOptions,
        figletOptions: argv.figletOptions,
    }
);
