
const riskCalculator = require('../native/riskCalculatorEngine');

exports.calculate = function(age, amount, callback) {
    
    let premium = amount * 0.05;

    if(age > 50) {
        premium += 2000;
    }
    
    premium += riskCalculator.getRisk(age);

    callback(premium);
}