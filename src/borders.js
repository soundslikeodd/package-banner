
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
