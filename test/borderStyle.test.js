import { expect } from 'chai';
import test from './testUtil.js';
import { stringToBorder } from '../src/borders.js';

describe('general border style', () => {
    it('none named or custom border style', () => {
        test(
            './test/resources/borderStyleNotNamedOrCustomStyle.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                borderStyle: 'notanamedorsuctomstyle',
            }
        );
    });
    it('bold border style', () => {
        test(
            './test/resources/borderStyleBold.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                borderStyle: 'bold',
            }
        );
    });
    // TODO: test the rest of the named border styles
    it('custom border style string', () => {
        test(
            './test/resources/borderStyle12345678.test.txt',
            {
                packagePath: './test/resources/test-package.json',
                borderStyle: '1,2,3,4,5,6,7,8',
            }
        );
    });
});

describe('stringToBorder', () => {
    it('empty style', () => {
        const borderStyle = stringToBorder();
        expect(borderStyle).to.eql(null);
    });
    it('none string style', () => {
        const borderStyle = stringToBorder({});
        expect(borderStyle).to.eql(null);
    });
    it('style does not include a comma', () => {
        const borderStyle = stringToBorder('thisdoesnotcontainacomma');
        expect(borderStyle).to.eql(null);
    });
    it('general usage', () => {
        const borderStyle = stringToBorder('0,1,2,3,4,5,6,7');
        expect(borderStyle).to.eql({T: '0', TR: '1', R: '2', BR: '3', B: '4', BL: '5', L: '6', TL: '7'});
    });
    it('partial style string', () => {
        const borderStyle = stringToBorder('0,1,2,3,4,5');
        expect(borderStyle).to.eql({T: '0', TR: '1', R: '2', BR: '3', B: '4', BL: '5', L: '·', TL: '·'});
    });
    it('to large style string', () => {
        const borderStyle = stringToBorder('0,1,2,3,4,5,6,7,8,9,a,s,d');
        expect(borderStyle).to.eql({T: '0', TR: '1', R: '2', BR: '3', B: '4', BL: '5', L: '6', TL: '7'});
    });
    it('style with multiple character border unit', () => {
        const borderStyle = stringToBorder('0,11,2,33,4,55,6,verylong');
        expect(borderStyle).to.eql({T: '0', TR: '11', R: '2', BR: '33', B: '4', BL: '55', L: '6', TL: 'verylong'});
    });
});
