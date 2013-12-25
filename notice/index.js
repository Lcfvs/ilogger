var rwin,
    imports,
    lib,
    notice;

rwin = require('rwin');

imports = {
    isLoggable: '../isLoggable',
    trace: '../trace',
    write: '../write'
};

lib = rwin(imports, __dirname);

notice = function notice(app, data) {
    var error,
        traces,
        traceString;
    
    if (lib.isLoggable()) {
        error = new Error(data);
        error.name = 'Notice';
        traces = lib.trace(app.name, error);
        traces.splice(1, traces.length, traces[2]);
        traceString = traces.toString();
        lib.write(null, traceString);
    }
};

module.exports = notice;