document.getElementById('change-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseInt(document.getElementById('amount').value, 10);
    const change = makeChange(amount);

    document.getElementById('quarters').textContent = `Quarters: ${change.q}`;
    document.getElementById('dimes').textContent = `Dimes: ${change.d}`;
    document.getElementById('nickels').textContent = `Nickels: ${change.n}`;
    document.getElementById('pennies').textContent = `Pennies: ${change.p}`;
});

function makeChange(cents) {
    const quarters = Math.floor(cents / 25);
    cents %= 25;

    const dimes = Math.floor(cents / 10);
    cents %= 10;

    const nickels = Math.floor(cents / 5);
    cents %= 5;

    const pennies = cents;

    return {
        q: quarters,
        d: dimes,
        n: nickels,
        p: pennies
    };
}