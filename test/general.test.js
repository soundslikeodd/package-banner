import test from './testUtil.js';

describe('general usage tests', () => {
    it('no config', () => {
        test(
            'Package path not set.',
            undefined
        );
    });
    it('empty config', () => {
        test(
            'Package path not set.',
            {}
        );
    });
    it('just packagePath config', () => {
        test(
            './test/resources/emptyConfig.test.txt',
            {
                packagePath: './test/resources/test-package.json',
            }
        );
    });
    it('invalid packagePath path', () => {
        test(
            './test/resources/invalidPackageConfigPath.text.txt',
            {
                packagePath: './test/resources/invalid-test-package.json',
            }
        );
    });
    it('broken package json', () => {
        test(
            './test/resources/brokenPackageJson.test.txt',
            {
                packagePath: './test/resources/broken-package.json',
            }
        );
    });
    it('capitalCase', () => {
        test(
            './test/resources/capitalCase.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                capitalCase: true,
            }
        );
    });
    it('breakOnWord', () => {
        test(
            './test/resources/breakOnWord.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                capitalCase: true,
                breakOnWord: true,
            }
        );
    });
    it('packageNameFont', () => {
        test(
            './test/resources/packageNameFont.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                packageNameFont: 'Trek',
            }
        );
    });
    it('metaDataAlign', () => {
        test(
            './test/resources/metaDataAlign.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                metaDataAlign: 'left',
            }
        );
    });
    it('invalid metaDataAlign', () => {
        test(
            './test/resources/invalidMetaDataAlign.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                metaDataAlign: 'not valid',
            }
        );
    });
    it('unscoped package', () => {
        test(
            './test/resources/unscopedPackage.text.txt',
            {
                packagePath: './test/resources/unscoped-package.json',
            }
        );
    });
    it('additionalPackageInfo', () => {
        test(
            './test/resources/additionalPackageInfo.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                additionalPackageInfo: [
                    'author',
                    'license'
                ],
            }
        );
    });
    it('empty additionalPackageInfo', () => {
        test(
            './test/resources/emptyAdditionalPackageInfo.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                additionalPackageInfo: [
                    'doesNotExist'
                ],
            }
        );
    });
    it('no double additionalPackageInfo', () => {
        test(
            './test/resources/additionalPackageInfo.test.txt', // explicitly the sane as additionalPackageInfo test
            {
                packagePath: './test/resources/test-package.json',
                additionalPackageInfo: [
                    'version', // this will get removed additionalPackageInfo filter
                    'description', // this will get removed additionalPackageInfo filter
                    'name', // this will get removed additionalPackageInfo filter
                    'author',
                    'license'
                ],
            }
        );
    });
    it('debug', () => {
        test(
            './test/resources/debug.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                debug: true,
            }
        );
    });
});
