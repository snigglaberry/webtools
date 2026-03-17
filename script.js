// script.js

// Function to convert currency
function convertCurrency(amount, fromCurrency, toCurrency, exchangeRates) {
    if (fromCurrency === toCurrency) return amount;
    let convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    return convertedAmount;
}

// Example exchange rates
const exchangeRates = {
    "USD": {"EUR": 0.85, "JPY": 110.53, "GBP": 0.76},
    "EUR": {"USD": 1.17, "JPY": 129.86, "GBP": 0.89},
    "JPY": {"USD": 0.0091, "EUR": 0.0077, "GBP": 0.0060},
    "GBP": {"USD": 1.32, "EUR": 1.13, "JPY": 166.49}
};

// Usage Example
let amount = 100;
let fromCurrency = "USD";
let toCurrency = "EUR";
let convertedAmount = convertCurrency(amount, fromCurrency, toCurrency, exchangeRates);
console.log(`\n${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);