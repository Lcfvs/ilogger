var rwin,
    imports,
    lib,
    onAppendFile;

rwin = require('rwin');

imports = {
    util: 'util'
};

lib = rwin(imports, __dirname);

onAppendFile = function onAppendFile(error) {
    var isErrorInstance;

    isErrorInstance = lib.util.isError(error);

    if (isErrorInstance) {
        error.name = 'LogFileError';
        
        throw error;
    }
};

module.exports = onAppendFile;