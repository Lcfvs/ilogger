var slice;

slice = (function (method) {
    var returnValue;
    
    returnValue = method.call.bind(method);
    
    return returnValue;
}(Array.prototype.slice));

module.exports = slice;