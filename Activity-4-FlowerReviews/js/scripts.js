//welcome message
var user = 'Aisha';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest flower shop reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 69.99,
    studentDiscount =.10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);