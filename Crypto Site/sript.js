var btc = document.getElementById("bitcoin");
var c = document.getElementById("ethereum");
var dogecoin = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function(response) {
    btc.innerHTML = response.bitcoin.usd;
    ethereum.innerHTML = response.ethereum.usd;
    dogecoin.innerHTML = response.dogecoin.usd;
})
