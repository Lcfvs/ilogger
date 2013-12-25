var isLoggable;

isLoggable = function isLoggable() {
    var returnValue;
    
    returnValue = process.env.NODE_ENV !== 'production';
    
    return returnValue;
};

module.exports = isLoggable;