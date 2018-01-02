let coins = {};

coins["BAT"] = `<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
                <div class="coinmarketcap-currency-widget" data-currency="basic-attention-token" data-base="USD"  data-secondary="BTC"></div>`;

$(function(){
    init();
})                

function init(){
    let html = "";

    for(coin in coins){
        html +="<hr>"
        html += coins[coin];
    }
    console.log(html);
    $("#watching").html(html);
}