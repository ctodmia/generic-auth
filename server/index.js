var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
	secret: new Buffer('ZMn5hsSOrCVFSRUW0C7719htGDPIRuPRES410gEyRBo1Bn-XhO2i7heKTqN0UlU5', 'base64'),
	audience: 'z2zUHKUYsjJWmmabARuBckEDpyQrHKdi'
});

app.get('/api/public', function(req, res) {
	res.json({message: "Hello from a public endpoint! You don't need to be authenticated to see this"});
});

app.get('/api/private', authCheck, function(req, res) {
	res.json({ message: "Hello from private endpoint! You DO need to be authenticated to see this"});
});

app.listen(3001)
console.log('Listening on http://localhost:3001')