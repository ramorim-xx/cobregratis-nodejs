var cobregratis = require("./lib/cobregratis");

cobregratis.set_token("FlyKmxj1aIIlmcM9oCdcLA4DW5SxnqofLwn2NwAVsE1l8BYwOGiQn9HpxyEz");
/*cobregratis.get_billet(68703, function(response) {
	
	var bank_billet = response.bank_billet;
    console.log(bank_billet.description)

});*/

cobregratis.get_billets(function(response) {
	
    console.log(response);

})