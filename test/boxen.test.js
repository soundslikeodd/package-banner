import test from './testUtil.js';

describe('general boxen integration', () => {
    it('boxenOptions pass through', () => {
        test(
            './test/resources/boxenPassThrough.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                boxenOptions: {
                    title: 'feild set legend',
                    titleAlignment: 'left',
                    borderStyle: {
                        topLeft: '*',
                        topRight: '*',
                        bottomLeft: '*',
                        bottomRight: '*',
                        top: '▭',
                        bottom: '▭',
                        left: '▯',
                        right: '▯'
                    }
                },
            }
        );
    });
});
