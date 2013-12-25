var rwin,
    imports;

rwin = require('rwin');

imports = {
    log: './log',
    success: './success',
    notice: './notice',
    warn: './warn',
    error: './error'
};

module.exports = rwin(imports, __dirname);