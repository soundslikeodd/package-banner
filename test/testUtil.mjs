import fs from 'fs';
import { expect } from 'chai';
import packageBanner from '../index.mjs';

const test = (
    consoleSnapshotFile,
    config
) => {
    const banner = fs.existsSync(consoleSnapshotFile)
        ? fs.readFileSync(consoleSnapshotFile, {encoding:'utf8'})
        : consoleSnapshotFile;
    const origConsoleLog = console.log;
    const origConsoleWarn = console.warn;
    let output = [];
    console.log = log => { output = [...output, log]; };
    console.warn = warn => { output = [...output, warn]; };
    packageBanner(
        config
    );
    expect(output.join('\n')).to.equal(banner);
    console.log = origConsoleLog;
    console.warn = origConsoleWarn;
};

export default test;
