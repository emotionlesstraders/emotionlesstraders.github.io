let template = `<div class="coinmarketcap-currency-widget" data-currency="" data-base="USD"  data-secondary="BTC"></div>`;
//listed coins to be inserted inbetween the quotes at data-currency. index of first quote is 57
let coins = {
        longterm: {
                ETH: "ethereum", 
				ICX: "icon",
                LTC: "litecoin",
                XMR: "monero",
                KMD: "komodo",
                NEO: "neo",
                POWR: "power-ledger",
                LINK: "chainlink",
                XLM: "stellar",
                BCPT: "blockmason",
                ZRX: "0x"
			},
        shortmidterm: {
                POE: "poet",
                DGB: "digibyte",
                XEL: "elastic",
                KNC: "kyber-network"
			},
        crowdfavorites: {
                WABI: "wabi",
                FLIXX: "flixxo",
                STORM: "storm",
                QSP: "quantstamp",
                BAT: "basic-attention-token",
                ELIX: "elixir",
                DENT: "dent",
                DRGN: "dragonchain",
                AION: "aion"
			}
};


$(function(){
    init();
});

function init(){
    for (position in coins) {
		let html = "";
        let currSet = coins[position];
        for (coin in currSet) {
			let temp = template.slice(0,58) + currSet[coin] + template.slice(58);
			
            html += "<hr>";
            html += temp;
        }
		let selector = "#";
		selector+=position;
		$(selector).html(html);
    }
}