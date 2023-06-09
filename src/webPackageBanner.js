import figlet from 'figlet';
import packageBanner from './packageBanner.js';

const webPackageBanner = config => {
    const {
        figletOptions,
        figletFontFileData,
        packageNameFont
    } = config;
    const fontName = packageNameFont || figletOptions?.font || 'Standard';
    if (figletFontFileData) figlet.parseFont(fontName, figletFontFileData);
    figlet.loadFont([fontName], () => {
        packageBanner(config);
    });
};

export default webPackageBanner;
