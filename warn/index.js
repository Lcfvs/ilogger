var rwin,
    imports,
    lib,
    warn;

rwin = require('rwin');

imports = {
    isLoggable: '../isLoggable',
    trace: '../trace',
    write: '../write'
};

lib = rwin(imports, __dirname);

warn = function warn(app, data) {
    var error,
        traces,
        traceString;
    
    error = new Error(data);
    error.name = 'Warning';
    traces = lib.trace(app.name, error);
    traces.splice(1, traces.length, traces[2]);
    traceString = traces.toString();
    
    if (lib.isLoggable()) {
        lib.write(null, traceString);
    } else {
        lib.write(app, traceString);
    }
};

module.exports = warn;