# package-banner

[![Tests](https://github.com/soundslikeodd/package-banner/actions/workflows/test.yml/badge.svg)](https://github.com/soundslikeodd/package-banner/actions/workflows/test.yml)

A CLI and NPM library to generate a console banner with meaningful package.json information.

Using [figlet.js](https://github.com/patorjk/figlet.js) a banner is displayed to the console with package.json information.  Inspired heavily by [asciiart-logo](https://github.com/tomi-vanek/asciiart-logo).

Example packge banner output for this project with no custom configuration.

```
┌----------------------------------------------------------------------------------┐
|                                                                                  |
|                                                                   @soundslikeodd |
|                    _                          _                                  |
|   _ __   __ _  ___| | ____ _  __ _  ___      | |__   __ _ _ __  _ __   ___ _ __  |
|  | '_ \ / _` |/ __| |/ / _` |/ _` |/ _ \_____| '_ \ / _` | '_ \| '_ \ / _ \ '__| |
|  | |_) | (_| | (__|   < (_| | (_| |  __/_____| |_) | (_| | | | | | | |  __/ |    |
|  | .__/ \__,_|\___|_|\_\__,_|\__, |\___|     |_.__/ \__,_|_| |_|_| |_|\___|_|    |
|  |_|                         |___/                                               |
|                                                    NPM package banner generator. |
|                                                                   version: 1.0.1 |
|                                                                                  |
└----------------------------------------------------------------------------------┘
```

## CLI

### Install

```bash
$ npm install @soundslikeodd/package-banner --save-dev

$ npx @soundslikeodd/package-banner
```

### Usage

```
$ package-banner -h
Usage: package-banner.js <command> [options]

Options:
      --version                Show version number                     [boolean]
  -h, --help                   Show help                               [boolean]
  -d, --debug                  print debug info                        [boolean]
  -p, --package                package.json file to use
  -s, --hideScope              hide package scope                      [boolean]
  -c, --capitalCase            print packge name in capital case       [boolean]
  -b, --breakOnWord            print package name with line break on words
                                                                       [boolean]
  -m, --metaDataAlign          alignment for package metadata, default 'right'
  -o, --borderStyle            border style, default 'basic'
  -a, --additionalPackageInfo  additional package information to print   [array]
  -n, --packageNameFont        figlt.js font name
  -f, --figletOptions          figlt.js config as a JSON file
```

## Library

### Install

```bash
$ npm install @soundslikeodd/package-banner --save-dev
```

### Usage

| Argument | Description | Required | Default | Options |
|-|-|-|-|-|
| `packageJson` | Object representation of a package.json file to use for information. | :white_check_mark: | | |
| `debug` | Print debug information, ex. package-banner config, and package.json. | :x: | `false` | |
| `hideScope` | Do not display package scope. | :x: | `false` | |
| `capitalCase` | Split package.json name on '-' and '_' and capitalize each word. | :x: | `false` | |
| `breakOnWord` | Break package.json name on words. | :x: | `false` | |
| `packageNameFont` | figlet.js packaged font. | :x: | `''` | |
| `metaDataAlign` | Alignment of package.json metadata, ex. name, description. | :x: | `right` | |
| `borderStyle` | Border style to use for the encompassing box. | :x: | `basic` | `basic`, `bold`, `rounded`, `bolder`, `dash`, `double`, `star`, or clockwise ordered starting with top comma seperated string (T, TR, R, BR, B, BL, L, TL) |
| `additionalPackageInfo` | Array of package.json feilds to pull out. | :x: | `[]` | |
| `figletOptions` | figlet.js config pass through, object | :x: | `{}` | |

### Examples

Some what simple package banner with `capitalCase` and `breakOnWord`

```javascript
import { packageBanner } from '@soundslikeodd/package-banner';
import packageJson from './package.json';

packageBanner(
    {
        packageJson,
        capitalCase: true,
        breakOnWord: true,
    }
)
```

Ouput
```
┌-----------------------------------------┐
|                                         |
|                          @soundslikeodd |
|   ____            _                     |
|  |  _ \ __ _  ___| | ____ _  __ _  ___  |
|  | |_) / _` |/ __| |/ / _` |/ _` |/ _ \ |
|  |  __/ (_| | (__|   < (_| | (_| |  __/ |
|  |_|__ \__,_|\___|_|\_\__,_|\__, |\___| |
|  | __ )  __ _ _ __  _ __   _|___/__     |
|  |  _ \ / _` | '_ \| '_ \ / _ \ '__|    |
|  | |_) | (_| | | | | | | |  __/ |       |
|  |____/ \__,_|_| |_|_| |_|\___|_|       |
|                                         |
|           NPM package banner generator. |
|                          version: 1.0.0 |
|                                         |
└-----------------------------------------┘
```

More complex example package banner with:
* font override of `speed`
* capital case
* line break on words
* hide package scope
* meta data alignment to the left

```javascript
import { packageBanner } from '@soundslikeodd/package-banner';
import packageJson from './package.json';

packageBanner(
    {
        packageJson,
        hideScope: true,
        capitalCase: true,
        breakOnWord: true,
        packageNameFont: 'speed',
        metaDataAlign: 'left',
    }
)
```

Output
```
┌---------------------------------------------------┐
|                                                   |
| ________             ______                       |
| ___  __ \_____ _________  /_______ _______ _____  |
| __  /_/ /  __ `/  ___/_  //_/  __ `/_  __ `/  _ \ |
| _  ____// /_/ // /__ _  ,<  / /_/ /_  /_/ //  __/ |
| /_/     \__,_/ \___/ /_/|_| \__,_/ _\__, / \___/  |
|                                    /____/         |
| ________                                          |
| ___  __ )_____ ___________________________        |
| __  __  |  __ `/_  __ \_  __ \  _ \_  ___/        |
| _  /_/ // /_/ /_  / / /  / / /  __/  /            |
| /_____/ \__,_/ /_/ /_//_/ /_/\___//_/             |
|                                                   |
| NPM package banner generator.                     |
| version: 1.0.0                                   |
|                                                   |
└---------------------------------------------------┘
```

Example of figlet.js overrides

```javascript
import { packageBanner } from '@soundslikeodd/package-banner';
import packageJson from './package.json';

packageBanner(
    {
        packageJson,
        figletOptions: {
            horizontalLayout: 'full',
            verticalLayout: 'full',
        },
    }
)
```

Output
```
┌-------------------------------------------------------------------------------------------------------------┐
|                                                                                                             |
|                                                                                              @soundslikeodd |
|                          _                                     _                                            |
|   _ __     __ _    ___  | | __   __ _    __ _    ___          | |__     __ _   _ __    _ __     ___   _ __  |
|  | '_ \   / _` |  / __| | |/ /  / _` |  / _` |  / _ \  _____  | '_ \   / _` | | '_ \  | '_ \   / _ \ | '__| |
|  | |_) | | (_| | | (__  |   <  | (_| | | (_| | |  __/ |_____| | |_) | | (_| | | | | | | | | | |  __/ | |    |
|  | .__/   \__,_|  \___| |_|\_\  \__,_|  \__, |  \___|         |_.__/   \__,_| |_| |_| |_| |_|  \___| |_|    |
|  |_|                                    |___/                                                               |
|                                                                               NPM package banner generator. |
|                                                                                              version: 1.0.0 |
|                                                                                                             |
└-------------------------------------------------------------------------------------------------------------┘
```

## Web Usage

Figlet requires fonts to be loaded before they can be used in browsers.  To handle the web use case package-banner provides a function for web usage `webPackageBanner`.

context: [figlet.js: Getting Started - Webpack / React](https://github.com/patorjk/figlet.js#getting-started---webpack--react)

### Usage

** The same config arguments as the non-web packageBanner function with the following additions.

| Argument | Description | Required | Default | Options |
|-|-|-|-|-|
| `figletFontFileData` | Imported object from figlet _importable-fonts_ | :white_check_mark: | | |

## Example

```bash
$ npm install @soundslikeodd/package-banner figlet
```

```javascript
import { webPackageBanner } from '@soundslikeodd/package-banner';
import standard from 'figlet/importable-fonts/Standard';
import packageJson from './package.json';

webPackageBanner({
  packageJson,
  figletFontFile: standard,
});
```
