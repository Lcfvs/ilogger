var rwin,
    imports,
    lib,
    fileLogPattern,
    file;

rwin = require('rwin');

imports = {
    fs: 'fs',
    path: 'path',
    utils: '../../utils',
    onAppendFile: './onAppendFile'
};

lib = rwin(imports, __dirname);

fileLogPattern = /\:/g;

file = function file(app, data) {
    var dateString,
        basename,
        filename,
        path,
        logString;
    
    dateString = lib.utils.getISODateString();
    basename = dateString.replace(fileLogPattern, '.');
    filename = basename + '.log';
    path = lib.path.resolve(app.logDir, filename);
    logString = data + '\n';
    lib.fs.appendFile(path, data, lib.onAppendFile);
};

module.exports = file;