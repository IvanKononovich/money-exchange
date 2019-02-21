// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency > 10000) return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'};

    let result = {};

    let options = [{
        coinsValue: 50,
        coinsName: 'H'
    },
    {
        coinsValue: 25,
        coinsName: 'Q'
    },
    {
        coinsValue: 10,
        coinsName: 'D'
    },
    {
        coinsValue: 5,
        coinsName: 'N'
    },
    {
        coinsValue: 1,
        coinsName: 'P'
    }];

    function callc(x, index){
        if(x / options[index].coinsValue >= 1){
            result[options[index].coinsName] = Math.floor(x / options[index].coinsValue);
            x  %= options[index].coinsValue;      
        }
        if(index < options.length - 1){
            callc(x, index + 1);
        }
    }

    callc(currency, 0);

    return result;

}
