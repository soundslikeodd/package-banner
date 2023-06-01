import fs from 'fs';

const figletConfigProcessing = configPath => {
    let parsedFigletOptions;
    try {
        parsedFigletOptions = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
    return {
        parsedFigletOptions,
    };
};

const loadPackageJson = packagePath => {
    if (!packagePath) {
        console.warn('Package path not set.');
        process.exit(1);
    }
    if (!fs.existsSync(packagePath)) {
        console.warn(`Package path '${packagePath}' does not exist.`);
        process.exit(1);
    }
    let packageObj;
    const packageString = fs.readFileSync(packagePath);
    try {
        packageObj = JSON.parse(packageString);
    } catch ( error ) {
        console.warn(`Package path '${packagePath}' does not contain parsable JSON.`);
        process.exit(1);
    }
    return packageObj;
};

export {
    loadPackageJson,
    figletConfigProcessing,
};
