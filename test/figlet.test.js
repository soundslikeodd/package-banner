import test from './testUtil.mjs';

describe('general figit integration', () => {
    it('figletOptions pass through', () => {
        test(
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
