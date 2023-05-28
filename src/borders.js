
export const BASIC_BORDER_NAME = 'basic';
const BASIC_BORDER = {
    TL: '┌',
    T: '-',
    TR: '┐',
    L: '|',
    R: '|',
    BL: '└',
    B: '-',
    BR: '┘',
};
const BOLD_BORDER = {
    TL: '▛',
    T: '▀',
    TR: '▜',
    L: '▌',
    R: '▐',
    BL: '▙',
    B: '▄',
    BR: '▟',
};
const ROUNDED_BORDER = {
    TL: '╭',
    T: '─',
    TR: '╮',
    L: '│',
    R: '│',
    BL: '╰',
    B: '─',
    BR: '╯',
};
const BOLDER_BORDER = {
    TL: '█',
    T: '█',
    TR: '█',
    L: '█',
    R: '█',
    BL: '█',
    B: '█',
    BR: '█',
};
const DASH_BORDER = {
    TL: '┏',
    T: '┉',
    TR: '┓',
    L: '┇',
    R: '┇',
    BL: '┗',
    B: '┉',
    BR: '┛',
};
const DOUBLE_BORDER = {
    TL: '╔',
    T: '═',
    TR: '╗',
    L: '║',
    R: '║',
    BL: '╚',
    B: '═',
    BR: '╝',
};
const STAR_BORDER = {
    TL: '★',
    T: '★',
    TR: '★',
    L: '★',
    R: '★',
    BL: '★',
    B: '★',
    BR: '★',
};
export const NAMED_BORDERS = {
    [BASIC_BORDER_NAME]: BASIC_BORDER,
    bold: BOLD_BORDER,
    rounded: ROUNDED_BORDER,
    bolder: BOLDER_BORDER,
    dash: DASH_BORDER,
    double: DOUBLE_BORDER,
    star: STAR_BORDER,
};
export const NAMED_BORDER_KEYS = Object.keys(NAMED_BORDERS);
const borderFiller = ['·','·','·','·','·','·','·','·'];
const borderStyleKeys = ['T', 'TR', 'R', 'BR', 'B', 'BL', 'L', 'TL'];
const borderStyleLength = borderStyleKeys.length;
export const stringToBorder = borderString => {
    if(
        !borderString
        || typeof borderString !== 'string'
        || !borderString.includes(',')
    ) return null;
    const borderArray = borderString.split(',');
    const filledBorderArray = [
        ...borderArray.slice(0, borderStyleLength),
        ...borderFiller.slice(
            0,
            borderStyleLength - Math.min(borderArray.length, borderStyleLength)
        ),
    ];
    return filledBorderArray.reduce(
        (acc, e, i) => (
            {
                ...acc,
                [borderStyleKeys[i]]: e,
            }
        ),
        {}
    );
};
