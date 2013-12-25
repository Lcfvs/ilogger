var rwin,
    imports,
    lib,
    log;

rwin = require('rwin');

imports = {
    utils: '../utils',
    file: './file'
};

lib = rwin(imports, __dirname);

write = function write(app, data) {
    var args;

    if (app === null) {
        args = lib.utils.slice(arguments, 1);
        console.log.apply(console, args);
    } else {
        lib.file(app, data);
    }
};

module.exports = write;