import test from './testUtil.js';

describe('general border style', () => {
    it('bold border style', () => {
        test(
            './test/resources/borderStyleBold.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                borderStyle: 'bold',
            }
        );
    });
});
