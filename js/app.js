const cryptoAPI = new CryptoAPI();
const ui = new UI();

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currency = document.getElementById('currency').value;
    const cryptocurrency = document.getElementById('cryptocurrency').value;

    if(currency === '' || cryptocurrency === ''){
        ui.printMessage('All fields are mandatory !', 'deep-orange darken-4 card-panel');
    } else {
        cryptoAPI.getAPIdata(currency, cryptocurrency)
            .then(data => {
                ui.displayResult(data[0], currency);
            })
            .catch(e => console.log(e));
    }
});

