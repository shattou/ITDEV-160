//welcome message
var user = 'Aisha';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest flower shop best sellers.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;


//Product price
var sunflowerPriceE = 65.99;
var rosesPrice = 69.99;
var tulipDiscount = .20;
var tulipPrice = rosesPrice - (rosesPrice * tulipDiscount);
var rosesPriceEl = document.getElementById('roses-price');
var tulipPriceEl = document.getElementById('tulip-price');
var sunflowerPriceEl = document.getElementById('sunflower-price');

rosesPriceEl.textContent = rosesPrice.toFixed(2);
tulipPriceEl.textContent = tulipPrice.toFixed(2);
sunflowerPriceEl.textContent = rosesPrice.toFixed(2);