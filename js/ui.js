class UI {
    constructor() {
        this.init();
    }

    init() {
        this.displayCryptoCurrencies();
    }

    displayCryptoCurrencies() {
        cryptoAPI.getCryptoCurrencies()
            .then( data => {
                const select = document.getElementById('cryptocurrency');

                data.forEach((crypto) => {
                    const option = document.createElement('option');
                    option.value = crypto.id;
                    option.appendChild(document.createTextNode(crypto.name));
                    select.appendChild(option);
                });
            });
    }

    //Display the error message
    printMessage(message, className) {
        const div = document.createElement('div');
        div.classList = className;
        div.appendChild(document.createTextNode(message));
        
        const messagesDiv = document.querySelector('.messages');
        messagesDiv.appendChild(div);

        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 2000);
    }

    displayResult(data, currency) {
        console.log(data);
        let currencyVal = "price_" + currency.toLowerCase();

        let html = '';
        html = `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The Price of ${data.name} is ${data[currencyVal]} ${currency}</p>
                    <p>Last Hour:  ${data.percent_change_1h} %</p>
                    <p>Last Day:  ${data.percent_change_24h} %</p>
                    <p>Last 7 Days:  ${data.percent_change_7d} %</p>
                </div>
            </div>
        `;
        const resultDiv = document.querySelector('#result');
        resultDiv.innerHTML = html;
    }
}