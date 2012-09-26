var request = require('request')

var token = ''
exports.set_token = function( _token ) {
	token = _token;
}

exports.get_billet = function( id, callback ) {

    request("https://" + token + ":X@app.cobregratis.com.br/bank_billets/"+ id + ".json", function(err, response, body) {
		callback( JSON.parse(body) )
	})

}

exports.get_billets = function( callback ) {

    request("https://" + token + ":X@app.cobregratis.com.br/bank_billets.json", function(err, response, body) {
		callback( JSON.parse(body) )
	})

}