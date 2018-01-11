let coins = {
    longterm: {
        ETH: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="ethereum" data-base="USD"  data-secondary="BTC"></div>`,

        ICX: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="icon" data-base="USD"  data-secondary="BTC"></div>`,

        LTC: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="litecoin" data-base="USD"  data-secondary="BTC"></div>`,

        XMR: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="monero" data-base="USD"  data-secondary="BTC"></div>`,

        KMD: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="komodo" data-base="USD"  data-secondary="BTC"></div>`,

        NEO: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="neo" data-base="USD"  data-secondary="BTC"></div>`,

        POWR: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="power-ledger" data-base="USD"  data-secondary="BTC"></div>`,

        LINK: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="chainlink" data-base="USD"  data-secondary="BTC"></div>`,

        XLM: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="stellar" data-base="USD"  data-secondary="BTC"></div>`,

        BCPT: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="blockmason" data-base="USD"  data-secondary="BTC"></div>`,

        ZRX: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="0x" data-base="USD"  data-secondary="BTC"></div>`,
    },

    shortmidterm: {
        POE: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="poet" data-base="USD"  data-secondary="BTC"></div>`,

        DGB: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="digibyte" data-base="USD"  data-secondary="BTC"></div>`,

        XEL: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="elastic" data-base="USD"  data-secondary="BTC"></div>`,

        KNC: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="kyber-network" data-base="USD"  data-secondary="BTC"></div>`,
    },

    crowdfavorites: {
        WABI: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="wabi" data-base="USD"  data-secondary="BTC"></div>`,

        FLIXX: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="flixxo" data-base="USD"  data-secondary="BTC"></div>`,

        STORM: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="storm" data-base="USD"  data-secondary="BTC"></div>`,

        QSP: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="quantstamp" data-base="USD"  data-secondary="BTC"></div>`,

        BAT: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="basic-attention-token" data-base="USD"  data-secondary="BTC"></div>`,

        ELIX: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="elixir" data-base="USD"  data-secondary="BTC"></div>`,

        DENT: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="dent" data-base="USD"  data-secondary="BTC"></div>`,

        DRGN: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="dragonchain" data-base="USD"  data-secondary="BTC"></div>`,

        AION: `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<div class="coinmarketcap-currency-widget" data-currency="aion" data-base="USD"  data-secondary="BTC"></div>`
    }
};


$(function(){
    init();
})                

function init(){
    
    for(position in coins){
        let positionSet = coins[position];
        let html = "";
        for(coin in positionSet){
            html +="<hr>"
            html += positionSet[coin];
        }
        let temp = "#";
        temp += position;
        console.log(html);
        $(temp).html(html);
    }
    
}