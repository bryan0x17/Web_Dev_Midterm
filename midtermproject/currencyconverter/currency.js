// Script file for Midterm Project Part 1

// Declare all the nodes
let fromCurrencyNode;
let toCurrencyNode;
let fromValueNode;
let toValueNode;
let ratioNode;

// Declare the rates
// Use the USD rate for every currency - all other conversions can be calculated using this rate
// Rates are current as on 2021-06-25
// This is the amount of currency that can be purchased with 1 USD
let USD = 1;
let EUR = 0.84;
let CAD = 1.23;
let BTC = 0.00003100;
let ETH = 0.00054198;

// Start function to get nodes and register event listeners after the window loads
function start() {
    fromCurrencyNode = document.getElementById('from_currency');
    toCurrencyNode = document.getElementById('to_currency');
    fromValueNode = document.getElementById('from_value');
    toValueNode = document.getElementById('to_value');
    ratioNode = document.getElementById('ratio_node');
    fromCurrencyNode.addEventListener('change', showConversion, false);
    toCurrencyNode.addEventListener('change', showConversion, false);
    fromValueNode.addEventListener('change', convertTo, false);
    toValueNode.addEventListener('change', convertFrom, false);
}

// Function to get the rate conversion and display it
function showConversion() {
    let fromCurrency = fromCurrencyNode.value;
    let toCurrency = toCurrencyNode.value;

    if (fromCurrency !== 'none' && toCurrency !== 'none') {
        let ratioText = `1 ${fromCurrencyNode.value} is equal to ${getRate(fromCurrency, toCurrency).toFixed(2)} ${toCurrencyNode.value}`;
        ratioNode.textContent = ratioText;
    } 
}

// Function that will get the values of the currency being converted from, calculate the new values and print them to the page
function convertTo() {
    let fromCurrency = fromCurrencyNode.value;
    let toCurrency = toCurrencyNode.value;
    let fromValue = parseFloat(fromValueNode.value);
    let toValue = parseFloat(toValueNode.value);

    if (fromCurrency !== 'none' && toCurrency !== 'none') {
        toValueNode.value = (fromValue * getRate(fromCurrency, toCurrency)).toFixed(2);
    }
}

// Function that will get the values of the currency being converted to, calculate the new values and print them to the page
function convertFrom() {
    let fromCurrency = fromCurrencyNode.value;
    let toCurrency = toCurrencyNode.value;
    let fromValue = parseFloat(fromValueNode.value);
    let toValue = parseFloat(toValueNode.value);

    if (fromCurrency !== 'none' && toCurrency !== 'none') {
        fromValueNode.value = (toValue * getRate(toCurrency, fromCurrency)).toFixed(2);
    }
}

// Function to calculate the conversion rate
function getRate(fromCurrency, toCurrency) {
    let fromRate;
    let toRate;
    let rate;
    if (fromCurrency === 'USD') {
        fromRate = USD;
    } else if (fromCurrency === 'CAD') {
        fromRate = CAD;
    } else if (fromCurrency === 'EUR') {
        fromRate = EUR;
    } else if (fromCurrency === 'BTC') {
        fromRate = BTC;
    } else if (fromCurrency === 'ETH') {
        fromRate = ETH;
    }

    if (toCurrency === 'USD') {
        toRate = USD;
    } else if (toCurrency === 'CAD') {
        toRate = CAD;
    } else if (toCurrency === 'EUR') {
        toRate = EUR;
    } else if (toCurrency === 'BTC') {
        toRate = BTC;
    } else if (toCurrency === 'ETH') {
        toRate = ETH;
    }

    rate = toRate / fromRate;
    return rate;
}

window.onload = start();