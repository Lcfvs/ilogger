var rwin,
    imports,
    lib,
    log;

rwin = require('rwin');

imports = {
    isLoggable: '../isLoggable',
    utils: '../utils',
    write: '../write'
};

lib = rwin(imports, __dirname);

log = function log() {
    var args;
    
    if (lib.isLoggable()) {
        args = lib.utils.concat([null], arguments);
        lib.write.apply(this, args);
    }
};

module.exports = log;