import {
    testNodeApi,
    readJsonFile,
} from './testUtil.js';

const testPackageJson = readJsonFile('./test/resources/test-package.json');

describe('general figlet integration', () => {
    it('figletOptions pass through', () => {
        testNodeApi(
            './test/resources/figlitPassThrough.test.txt',
            {
                packageJson: testPackageJson,
                figletOptions: {
                    horizontalLayout: 'full',
                    verticalLayout: 'full',
                },
            }
        );
    });
});
