const fetchCryptoPrice = async () => {
    try {
        const apiKey = '12345abcd6789efgh01234ijkl56789mnop';
        const cryptoSymbol = 'BTC';
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSymbol}&vs_currencies=usd`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const cryptoInfo = {
            name: 'Bitcoin',
            symbol: cryptoSymbol,
            price: data[cryptoSymbol.toLowerCase()].usd
        };

        console.log(`The current price of ${cryptoInfo.name} (${cryptoInfo.symbol}): $${cryptoInfo.price}`);

        return cryptoInfo;
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
    }
};

fetchCryptoPrice();
