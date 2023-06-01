import {
    testFigletConfigProcessing,
    testLoadPackageJson
} from './testUtil.js';

describe('load package json', () => {
    it('general', () => {
        testLoadPackageJson(
            './test/resources/emptyPackagePath.test.txt',
            './test/resources/test-package.json',
            false
        );
    });
    it('empty package path', () => {
        testLoadPackageJson(
            './test/resources/emptyPackagePath.test.txt',
            '',
            true
        );
    });
    it('package path does not exist', () => {
        testLoadPackageJson(
            './test/resources/packagePathDoesNotExist.test.txt',
            './test/resources/invalid-test-package.json',
            true
        );
    });
    it('broken package json', () => {
        testLoadPackageJson(
            './test/resources/invalidPackageConfigPath.test.txt',
            './test/resources/broken-package.json',
            true
        );
    });
});

describe('figlet config file processing', () => {
    it('valid file', () => {
        testFigletConfigProcessing(
            './test/resources/figletValidFile.test.txt',
            './test/resources/test-package.json',
            false
        );
    });
    it('file does not exist', () => {
        testFigletConfigProcessing(
            './test/resources/figletFileDoesNotExist.test.txt',
            './doesNotExits.json',
            true
        );
    });
    it('invalid file', () => {
        testFigletConfigProcessing(
            './test/resources/figletInvalidFile.test.txt',
            './test/recources/broken-package.json',
            true
        );
    });
});


