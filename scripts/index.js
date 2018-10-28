// Purpose:
// Top section of page displays general market information, including 'PANIC SELLING', general opinion on market volatility.
// Top headlines for publicly traded companies affect the big 3
// Search bar, search by key word or company, pulls up recent news, and stock information
function getDate() {
    let d = new Date();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let year = d.getFullYear();
    return `${year}-${month}-${date}`
}

function getIndexes(symbol) {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${avKey}`)
        .then(r => r.json())
        .then(getData);
}

function getData(object) {
    let metaData = object['Meta Data'];
    let symbol = metaData.symbol;
    let prices = object["Time Series (Daily)"];
    let today = "2018-10-26";
    if (prices[today] !== undefined) {
        console.log(prices[today]);
    }
}

getIndexes('DJI');