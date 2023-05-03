import fs from 'fs';
import figlet from 'figlet';
import boxen from 'boxen';
import ansiAlign from 'ansi-align';

const SPACE = ' ';
const EMPTY_STRING = '';
const LINE_BREAK = '\n';
export const ALIGN_RIGHT = 'right';
export const METADATA_ALIGN = [
    'left',
    'center',
    ALIGN_RIGHT,
];

const toCapitalCase = str => str
    .replaceAll(/(-|_|\/)/g, SPACE)
    .split(SPACE)
    .map(word => word.charAt(0).toUpperCase() + word.split(EMPTY_STRING).slice(1).join(EMPTY_STRING))
    .join(SPACE);

const packageBanner = config => {
    const {
        packagePath, // required
        debug = false,
        capitalCase = false,
        breakOnWord = false,
        hideScope = false,
        packageNameFont = EMPTY_STRING,
        metaDataAlign = ALIGN_RIGHT,
        additionalPackageInfo = [],
        boxenOptions = {},
        figletOptions = {},
    } = config || {};
    if (debug) console.log(JSON.stringify(config, null, 2));
    if (!packagePath) {
        console.warn('Package path not set.');
        return;
    }
    if (!fs.existsSync(packagePath)) {
        console.warn(`Package path '${packagePath}' does not exist.`);
        return;
    }
    const packageString = fs.readFileSync(packagePath);
    let packageObj;
    try {
        packageObj = JSON.parse(packageString);
    } catch ( error ) {
        console.warn(`Package path '${packagePath}' does not contain parsable JSON.`);
        return;
    }
    if (debug) console.log(packageObj);
    const validMetaDateAlignment = !METADATA_ALIGN.includes(metaDataAlign)
        ? (() => {
            console.warn(`Metadata alignment '${metaDataAlign}' is not valid.  Accepted alignments ${METADATA_ALIGN.join(', ')}. Falling back to default 'right'.`);
            return ALIGN_RIGHT;
        })()
        : metaDataAlign;
    const {
        name = EMPTY_STRING,
        version = EMPTY_STRING,
        description = EMPTY_STRING,
    } = packageObj;
    const metaInfoPrep = (
        value,
        formatter = v => v
    ) => value && value !== EMPTY_STRING
        ? formatter(value)
        : EMPTY_STRING;
    const breakTextOnSpace = line => line.split(SPACE).join(LINE_BREAK);
    const [
        scope,
        unScopedName,
    ] = name.includes('/') ? name.split('/') : [null, name];
    const bannerText = (capitalCase ? toCapitalCase(unScopedName) : unScopedName);
    const banner = figlet.textSync(
        breakOnWord ? breakTextOnSpace(bannerText) : bannerText,
        {
            font: packageNameFont,
            ...figletOptions,
        }
    );
    console.log(
        boxen(
            ansiAlign(
                (hideScope || !scope ? EMPTY_STRING : scope + LINE_BREAK)
                + banner
                + LINE_BREAK
                + [
                    metaInfoPrep(description),
                    metaInfoPrep(version, v => `version: ${v}`),
                    ...(additionalPackageInfo.filter(i => ![
                        'name',
                        'description',
                        'version',
                    ].includes(i))
                        .reduce(
                            (acc, key) => [...acc, metaInfoPrep(packageObj[key], v => `${key}: ${v}`)],
                            []
                        )
                        .filter(i => i !== EMPTY_STRING)),
                ].join(LINE_BREAK),
                {
                    align: validMetaDateAlignment,
                }
            ),
            {
                padding: 1,
                borderStyle: 'singleDouble',
                ...boxenOptions,
            }
        )
    );
};

export default packageBanner;
