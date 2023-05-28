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

export default figletConfigProcessing;
