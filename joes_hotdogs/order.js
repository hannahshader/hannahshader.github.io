/**
 * @Author: Hannah Shader
 * @Date:   2024-02-15 01:03:26
 * @Last Modified by:   Hannah Shader
 * @Last Modified time: 2024-02-16 16:40:55
 */

const PRICE_HOTDOG = 4.65;
const PRICE_FRIES = 3.75;
const PRICE_SODA = 1.89;

function showMoney(amount) {
    let preciseAmount = (Math.round(amount * 100) / 100).toString();

    let parts = preciseAmount.split('.');
    let whole = parts[0];
    let decimal = parts.length > 1 ? parts[1] : '';

    if (decimal.length === 0) {
        decimal = '00';
    } else if (decimal.length === 1) {
        decimal += '0';
    }

    let result = whole + '.' + decimal;

    return result;
}

function takeOrder() {
    // Any non-integer value will be intepreted as a quanitity of 0
    // Negative numbers will be interpreted as positive numbers
    const numDogs = Math.abs(parseInt(prompt("Welcome to our order system!\n\nPlease enter the quantity for each item you want to order. Non-numeric answers and cancels default to a quantity of 0!\n\nFirst, how many hotdog orders would you like?"), 10) || 0);
    const numFries = Math.abs(parseInt(prompt("Great! Next, how many orders of fries would you like?"), 10) || 0);
    const numSoda = Math.abs(parseInt(prompt("Awesome. How many sodas would you like?"), 10) || 0);

    let subtotal_before_discount = (numDogs * PRICE_HOTDOG) + (numFries * PRICE_FRIES) + (numSoda * PRICE_SODA);
    
    let discount = subtotal_before_discount >= 25 ? subtotal_before_discount * 0.1 : 0;
    subtotal_after_discount = subtotal_before_discount - discount;
    
    const tax = subtotal_after_discount * 0.0625;
    const total = subtotal_after_discount + tax;

    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("takeOrderButton").addEventListener("click", takeOrder);
    });

    document.getElementById('orderSummary').style.display = 'block';
    
    document.getElementById('orderSummary').innerHTML = `
        <p>Hotdogs Ordered (${numDogs}): $${showMoney(numDogs * PRICE_HOTDOG)}</p>
        <p>Fries Ordered (${numFries}): $${showMoney(numFries * PRICE_FRIES)}</p>
        <p>Sodas Ordered (${numSoda}): $${showMoney(numSoda * PRICE_SODA)}</p>
        <p>Subtotal before discount: $${showMoney(subtotal_before_discount)}</p>
        <p>Discount: $${showMoney(discount)}</p>
        <p>Subtotal after discount: $${showMoney(subtotal_after_discount)}</p>
        <p>Tax: $${showMoney(tax)}</p>
        <p>Total: $${showMoney(total)}</p>`;
}
