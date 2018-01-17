const path = require('path');
const sassTrue = require('sass-true');

const initNoCustomConfig = path.join(__dirname, 'init-no-custom-config.scss');
sassTrue.runSass({file: initNoCustomConfig}, describe, it);

const initCustomTypefaces = path.join(__dirname, 'init-custom-typefaces.scss');
sassTrue.runSass({file: initCustomTypefaces}, describe, it);

const initCustomBreakpoints = path.join(__dirname, 'init-custom-breakpoints.scss');
sassTrue.runSass({file: initCustomBreakpoints}, describe, it);
