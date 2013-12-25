var concat;

concat = (function (method) {
    var returnValue;
    
    returnValue = method.apply.bind(method);
    
    return returnValue;
}(Array.prototype.concat));

module.exports = concat;