var getISODateString;

getISODateString = function getISODateString() {
    var date,
        dateString;
    
    date = new Date();
    dateString = date.toISOString();
    
    return dateString;
};

module.exports = getISODateString;