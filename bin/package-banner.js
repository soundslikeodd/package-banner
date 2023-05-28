#!/usr/bin/env node

import yargs from 'yargs';
import packageBanner,
{
    METADATA_ALIGN,
    ALIGN_RIGHT
} from '../src/index.js';
import {
    BASIC_BORDER_NAME
} from '../src/borders.js';
import figletConfigProcessing from '../src/figletUtils.js';

const argv = yargs(process.argv.slice(2))
    .usage('Usage: $0 <command> [options]')
    .help('h')
    .alias('h', 'help')
    .boolean('debug')
    .describe('d', 'print debug info')
    .describe('p', 'package.json file to use')
    .alias('d', 'debug')
    .alias('p', 'package')
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
    .describe('o', `border style, default '${BASIC_BORDER_NAME}'`)
    .alias('o', 'borderStyle')
    .array('additionalPackageInfo')
    .describe('a', 'additional package information to print')
    .alias('a', 'additionalPackageInfo')
    .describe('packageNameFont', 'figlt.js font name')
    .alias('n', 'packageNameFont')
    .config('figletOptions', figletConfigProcessing)
    .describe('figletOptions', 'figlt.js config as a JSON file')
    .alias('f', 'figletOptions')
    .argv;
packageBanner(
    {
        packagePath: argv.package || process.cwd() + '/package.json',
        debug: argv.debug,
        hideScope: argv.hideScope,
        capitalCase: argv.capitalCase,
        breakOnWord: argv.breakOnWord,
        packageNameFont: argv.packageNameFont,
        metaDataAlign: argv.metaDataAlign,
        borderStyle: argv.borderStyle,
        additionalPackageInfo: argv.additionalPackageInfo,
        figletOptions: argv.parsedFigletOptions,
    }
);
