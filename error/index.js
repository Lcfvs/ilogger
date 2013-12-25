var rwin,
    imports,
    lib,
    error;

rwin = require('rwin');

imports = {
    isLoggable: '../isLoggable',
    util: 'util',
    trace: '../trace',
    write: '../write'
};

lib = rwin(imports, __dirname);

error = function error(app, data) {
    var traces,
        traceString;
    
    if (lib.util.isError(data)) {
        traces = lib.trace(app.name, data);
        traceString = traces.toString();
    
        if (lib.isLoggable()) {
            lib.write(null, traceString);
        } else {
            lib.write(app, traceString);
        }
    } else {
        throw new TypeError('Invalid error type');
    }
};

module.exports = error;