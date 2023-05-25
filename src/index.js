import fs from 'fs';
import figlet from 'figlet';
import ansiAlign from 'ansi-align';
import {
    NAMED_BORDERS,
    BASIC_BORDER_NAME
} from './borders.js';

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
    .replace(/(-|_|\/)/g, SPACE)
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
        borderStyle,
        additionalPackageInfo = [],
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
    if (debug) console.log(JSON.stringify(packageObj, null, 2));
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
    const insideContent = [
        ...(hideScope || !scope ? [] : [scope]),
        ...banner.split('\n'),
        ...[
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
        ]
    ];
    const inside = ansiAlign(
        insideContent.join(LINE_BREAK),
        {
            align: validMetaDateAlignment,
        }
    );
    const borders = NAMED_BORDERS[borderStyle] || NAMED_BORDERS[BASIC_BORDER_NAME];
    const logestLineLength = Math.max(...insideContent.map(l => l.length));
    const left = borders.L + SPACE;
    const right = SPACE + borders.R;
    console.log(borders.TL + Array(logestLineLength + 2).fill(borders.T).join(EMPTY_STRING) + borders.TR);
    console.log(borders.L + Array(logestLineLength + 2).fill(SPACE).join(EMPTY_STRING) + borders.R);
    inside.split(LINE_BREAK).forEach(line => {
        const padding = Array(logestLineLength - line.length).fill(SPACE).join(EMPTY_STRING);
        console.log(left + line + padding + right);
    });
    console.log(borders.L + Array(logestLineLength + 2).fill(SPACE).join(EMPTY_STRING) + borders.R);
    console.log(borders.BL + Array(logestLineLength + 2).fill(borders.B).join(EMPTY_STRING) + borders.BR);
};

export default packageBanner;
