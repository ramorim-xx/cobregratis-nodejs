var cobregratis = require("./lib/cobregratis");

cobregratis.set_token("FlyKmxj1aIIlmcM9oCdcLA4DW5SxnqofLwn2NwAVsE1l8BYwOGiQn9HpxyEz");

cobregratis.delete(68749, function(response) {
	
    console.log(response);

});

/*cobregratis.get_billet(68703, function(response) {
	
	var bank_billet = response.bank_billet;
    console.log(bank_billet.description)

});

cobregratis.get_billets(function(response) {
	
    console.log(response);

})

var options = { 
				bank_billet_account_id : 3096,
		  		name: 'Rafael Amorim teste 3',
		  		amount: 13.52,
		     	expire_at: "2012-09-30",
			  };
					
cobregratis.create(options, function(response) {
	
    console.log(response);

});

var options = { 
		  		name: 'Rafael Amorim teste editado'
			  };
					
cobregratis.edit(68746, options, function(response) {
	
    console.log(response);

});
*/
