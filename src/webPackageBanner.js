import figlet from 'figlet';
import packageBanner from './packageBanner.js';

const webPackageBanner = config => {
    const {
        figletOptions,
        figletFontFileData,
        packageNameFont
    } = config;
    const fontName = packageNameFont || figletOptions?.font || 'Standard';
    if (!figletFontFileData) {
        console.error('No figlet font file data present. figletFontFileData is required for web usage.');
        return;
    }
    figlet.parseFont(fontName, figletFontFileData);
    figlet.loadFont([fontName], () => {
        packageBanner(config);
    });
};

export default webPackageBanner;
