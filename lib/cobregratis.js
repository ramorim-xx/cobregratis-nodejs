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

exports.create = function( options, callback ) {

    request(
		{method : 'POST',
		json : 	{'bank_billet' : options},
		uri : "https://" + token + ":X@app.cobregratis.com.br/bank_billets.json"
		}, 
		
		function(err, response, body) {
			callback( body );
		}
	);

}

exports.edit = function( id, options, callback ) {

    request(
		{method : 'PUT',
		json : 	{'bank_billet' : options},
		uri : "https://" + token + ":X@app.cobregratis.com.br/bank_billets/"+ id + ".json"
		}, 
		
		function(err, response, body) {
			callback( body );
		}
	);

}

exports.delete = function( id, callback ) {

    request(
		{method : 'DELETE',
		uri : "https://" + token + ":X@app.cobregratis.com.br/bank_billets/"+ id + ".json"
		}, 
		
		function(err, response, body) {
			
			if (response.statusCode === 200) {
				callback( "Removido com sucesso." );
			} else {
				callback( "Erro ao remover." );
			}
		}
	);

}