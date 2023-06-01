import {
    testNodeApi,
    readJsonFile
} from './testUtil.js';

const testPackageJson = readJsonFile('./test/resources/test-package.json');
const unscopedPackageJson = readJsonFile('./test/resources/unscoped-package.json');

describe('general usage tests', () => {
    it('no config', () => {
        testNodeApi(
            'Package json \'undefined\' is not a valid type.',
            undefined
        );
    });
    it('empty config', () => {
        testNodeApi(
            'Package json \'undefined\' is not a valid type.',
            {}
        );
    });
    it('just packagePath config', () => {
        testNodeApi(
            './test/resources/emptyConfig.test.txt',
            {
                packageJson: testPackageJson,
            }
        );
    });
    it('capitalCase', () => {
        testNodeApi(
            './test/resources/capitalCase.test.txt',
            {
                packageJson: testPackageJson,
                capitalCase: true,
            }
        );
    });
    it('breakOnWord', () => {
        testNodeApi(
            './test/resources/breakOnWord.test.txt',
            {
                packageJson: testPackageJson,
                capitalCase: true,
                breakOnWord: true,
            }
        );
    });
    it('packageNameFont', () => {
        testNodeApi(
            './test/resources/packageNameFont.test.txt',
            {
                packageJson: testPackageJson,
                packageNameFont: 'Trek',
            }
        );
    });
    it('metaDataAlign', () => {
        testNodeApi(
            './test/resources/metaDataAlign.test.txt',
            {
                packageJson: testPackageJson,
                metaDataAlign: 'left',
            }
        );
    });
    it('invalid metaDataAlign', () => {
        testNodeApi(
            './test/resources/invalidMetaDataAlign.test.txt',
            {
                packageJson: testPackageJson,
                metaDataAlign: 'not valid',
            }
        );
    });
    it('unscoped package', () => {
        testNodeApi(
            './test/resources/unscopedPackage.text.txt',
            {
                packageJson: unscopedPackageJson,
            }
        );
    });
    it('additionalPackageInfo', () => {
        testNodeApi(
            './test/resources/additionalPackageInfo.test.txt',
            {
                packageJson: testPackageJson,
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
                packageJson: testPackageJson,
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
                packageJson: testPackageJson,
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
                packageJson: testPackageJson,
                debug: true,
            }
        );
    });
});
