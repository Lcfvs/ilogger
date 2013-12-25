var rwin,
    lib,
    trace;

rwin = require('rwin');

lib = rwin({
    os: 'os'
}, __dirname);

trace = function trace(appName, error) {
    var stackString,
        traces;

    stackString = error.stack.valueOf();
    traces = stackString.split('\n');
    traces[0] = appName + ' ' + error.name + ' : ' + error.message;
    traces.toString = traces.join.bind(traces, lib.os.EOL);

    return traces;
};

module.exports = trace;