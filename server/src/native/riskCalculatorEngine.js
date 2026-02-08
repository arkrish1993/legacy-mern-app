
exports.getRisk = function(age) {
    if(age > 60) {
        return 6000
    }

    return 1000
}