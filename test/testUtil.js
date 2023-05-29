import fs from 'fs';
import { expect } from 'chai';
import sinon from 'sinon';
import packageBanner from '../src/packageBanner.js';
import figletConfigProcessing from '../src/figletUtils.js';

const readSnapshotFile = file => (
    fs.existsSync(file)
        ? fs.readFileSync(file, {encoding:'utf8'})
        : file
);

const METHODS = [
    'log',
    'warn',
    'error',
];

const testNodeApi = (
    consoleSnapshotFile,
    config
) => {
    const banner = readSnapshotFile(consoleSnapshotFile);
    let output = [];
    const stubs = METHODS.map(mth => sinon.stub(console, mth));
    stubs.forEach(stub => stub.callsFake(log => { output = [...output, log]; }));
    packageBanner(
        config
    );
    expect(output.join('\n')).to.equal(banner);
    METHODS.forEach(mth => console[mth].restore());
};

const testFigletConfigProcessing = (
    consoleSnapshotFile,
    configFilePath,
    fail
) => {
    const banner = readSnapshotFile(consoleSnapshotFile);
    let output = [];
    const stubs = METHODS.map(mth => sinon.stub(console, mth));
    stubs.forEach(stub => stub.callsFake(log => { output = [...output, log]; }));
    sinon.stub(process, 'exit');
    figletConfigProcessing(configFilePath);
    if (fail) expect(process.exit.calledWith(1)).to.equal(true);
    expect(output.join('\n')).to.equal(banner);
    process.exit.restore();
    METHODS.forEach(mth => console[mth].restore());
};

export {
    testNodeApi,
    testFigletConfigProcessing,
};
