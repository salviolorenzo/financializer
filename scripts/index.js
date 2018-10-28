// Purpose:
// Top section of page displays general market information, including 'PANIC SELLING', general opinion on market volatility.
// Top headlines for publicly traded companies affect the big 3
// Search bar, search by key word or company, pulls up recent news, and stock information
const dow = document.querySelector('[data-dow]');
const sp = document.querySelector('[data-sp]');
const nasdaq = document.querySelector('[data-nasdaq]');

function getDate() {
    let d = new Date();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let year = d.getFullYear();
    return `${year}-${month}-${date}`
}

function getStats(symbol, funtoCall) {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${avKey}`)
        .then(r => r.json())
        .then(getData)
        .then(funtoCall);
}

function getData(object) {
    let metaData = object['Meta Data'];
    let symbol = metaData.symbol;
    let prices = object["Time Series (Daily)"];
    let today = "2018-10-26";
    if (prices[today] !== undefined) {
        return prices[today];
    }
}

function drawDow(object) {
    let open = parseFloat(object['1. open']);
    let close = parseFloat(object['4. close']);
    let high = parseFloat(object['2. high']);
    let low = parseFloat(object['3. low']);
    let change = (close - open);
    list = document.createElement('ul');
    li1 = document.createElement('li');
    li2 = document.createElement('li');
    li3 = document.createElement('li');
    li4 = document.createElement('li');

    li1.textContent = `Close: ${close}`;
    li2.textContent = `High: ${high}`;
    li3.textContent = change.toFixed(2);
    if (change > 0) {
        li3.style.color = 'green';
    }
    else if (change < 0) {
        li3.style.color = 'red';
    }
    li4.textContent = `Open: ${open}`;
    list.appendChild(li4);
    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);

    dow.appendChild(list);
}
function drawInx(object) {
    let open = parseFloat(object['1. open']);
    let close = parseFloat(object['4. close']);
    let high = parseFloat(object['2. high']);
    let low = parseFloat(object['3. low']);
    let change = (close - open);
    list = document.createElement('ul');
    li1 = document.createElement('li');
    li2 = document.createElement('li');
    li3 = document.createElement('li');
    li4 = document.createElement('li');

    li1.textContent = `Close: ${close}`;
    li2.textContent = `High: ${high}`;
    li3.textContent = change.toFixed(2);
    if (change > 0) {
        li3.style.color = 'green';
    }
    else if (change < 0) {
        li3.style.color = 'red';
    }
    li4.textContent = `Open: ${open}`;
    list.appendChild(li4);
    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);

    sp.appendChild(list);
}
function drawInic(object) {
    let open = parseFloat(object['1. open']);
    let close = parseFloat(object['4. close']);
    let high = parseFloat(object['2. high']);
    let low = parseFloat(object['3. low']);
    let change = (close - open);
    list = document.createElement('ul');
    li1 = document.createElement('li');
    li2 = document.createElement('li');
    li3 = document.createElement('li');
    li4 = document.createElement('li');

    li1.textContent = `Close: ${close}`;
    li2.textContent = `High: ${high}`;
    li3.textContent = change.toFixed(2);
    if (change > 0) {
        li3.style.color = 'green';
    }
    else if (change < 0) {
        li3.style.color = 'red';
    }
    li4.textContent = `Open: ${open}`;
    list.appendChild(li4);
    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);

    nasdaq.appendChild(list);
    return object;
}

getStats('DJI', drawDow);
getStats('INX', drawInx);
getStats('IXIC', drawInic);
