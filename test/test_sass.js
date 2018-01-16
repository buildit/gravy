const path = require('path');
const sassTrue = require('sass-true');

const init = path.join(__dirname, 'init.scss');
sassTrue.runSass({file: init}, describe, it);

// const initCustomTypefaces = path.join(__dirname, 'init-custom-typefaces.scss');
// sassTrue.runSass({file: initCustomTypefaces}, describe, it);
