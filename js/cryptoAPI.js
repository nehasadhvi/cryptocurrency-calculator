class CryptoAPI {

    // Get the Cryptocurrencies from the Cryptocurrency API
    async getCryptoCurrencies() {
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');
        const cryptoCurrencies = await url.json();

        return cryptoCurrencies;
    }

    async getAPIdata(currency, cryptocurrency) {
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);
        const currencies = await url.json();
        return currencies;
    }
}