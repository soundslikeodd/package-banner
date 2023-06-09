import fs from 'fs';
import {
    readJsonFile,
    testWebApi
} from './testUtil.js';

// Do to the fact that web usage requires font files to be loaded we need to
// read in the Standard figlet font here.
const STANDARD_FONT_FILE_PATH = './node_modules/figlet/fonts/Standard.flf';
const standard = fs.existsSync(STANDARD_FONT_FILE_PATH)
    ? fs.readFileSync(STANDARD_FONT_FILE_PATH, {encoding:'utf8'})
    : STANDARD_FONT_FILE_PATH;
const testPackageJson = readJsonFile('./test/resources/test-package.json');

describe('web', () => {
    it('simple', () => {
        testWebApi(
            './test/resources/webSimple.test.txt',
            testPackageJson,
            {
                figletFontFileData: standard,
            }
        );
    });
    it('simple packageNameFont', () => {
        testWebApi(
            './test/resources/webSimple.test.txt',
            testPackageJson,
            {
                figletFontFileData: standard,
                packageNameFont: 'standard',
            }
        );
    });
    it('simple figletOptions?.font', () => {
        testWebApi(
            './test/resources/webSimple.test.txt',
            testPackageJson,
            {
                figletFontFileData: standard,
                figletOptions: {
                    font: 'standard',
                },
            }
        );
    });
    it('no font file data', () => {
        testWebApi(
            './test/resources/webNoFontFile.test.txt',
            testPackageJson,
            {
                packageNameFont: 'standard',
            }
        );
    });
});
