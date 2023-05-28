import { testNodeApi } from './testUtil.js';

describe('general usage tests', () => {
    it('no config', () => {
        testNodeApi(
            'Package path not set.',
            undefined
        );
    });
    it('empty config', () => {
        testNodeApi(
            'Package path not set.',
            {}
        );
    });
    it('just packagePath config', () => {
        testNodeApi(
            './test/resources/emptyConfig.test.txt',
            {
                packagePath: './test/resources/test-package.json',
            }
        );
    });
    it('invalid packagePath path', () => {
        testNodeApi(
            './test/resources/invalidPackageConfigPath.text.txt',
            {
                packagePath: './test/resources/invalid-test-package.json',
            }
        );
    });
    it('broken package json', () => {
        testNodeApi(
            './test/resources/brokenPackageJson.test.txt',
            {
                packagePath: './test/resources/broken-package.json',
            }
        );
    });
    it('capitalCase', () => {
        testNodeApi(
            './test/resources/capitalCase.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                capitalCase: true,
            }
        );
    });
    it('breakOnWord', () => {
        testNodeApi(
            './test/resources/breakOnWord.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                capitalCase: true,
                breakOnWord: true,
            }
        );
    });
    it('packageNameFont', () => {
        testNodeApi(
            './test/resources/packageNameFont.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                packageNameFont: 'Trek',
            }
        );
    });
    it('metaDataAlign', () => {
        testNodeApi(
            './test/resources/metaDataAlign.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                metaDataAlign: 'left',
            }
        );
    });
    it('invalid metaDataAlign', () => {
        testNodeApi(
            './test/resources/invalidMetaDataAlign.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                metaDataAlign: 'not valid',
            }
        );
    });
    it('unscoped package', () => {
        testNodeApi(
            './test/resources/unscopedPackage.text.txt',
            {
                packagePath: './test/resources/unscoped-package.json',
            }
        );
    });
    it('additionalPackageInfo', () => {
        testNodeApi(
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
        testNodeApi(
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
        testNodeApi(
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
        testNodeApi(
            './test/resources/debug.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                debug: true,
            }
        );
    });
});
