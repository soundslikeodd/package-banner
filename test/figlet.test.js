import {
    testNodeApi,
    testFigletConfigProcessing,
} from './testUtil.js';

describe('general figlet integration', () => {
    it('figletOptions pass through', () => {
        testNodeApi(
            './test/resources/figlitPassThrough.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                figletOptions: {
                    horizontalLayout: 'full',
                    verticalLayout: 'full',
                },
            }
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
