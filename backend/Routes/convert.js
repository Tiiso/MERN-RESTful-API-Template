const express = require('express')
const xlsxtojson = require("xlsx-to-json");
const xlstojson = require("xls-to-json");
const router = express.Router();

router.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});

router.get('/', function (req, res) {
    res.send('Hello World')
})

router.post('/api/xlstojson', function(req, res) {
	xlsxtojson({
		input: "./tenants.xlsx",  // input xls 
	    output: "output.json", // output json 
        lowerCaseHeaders:true
	}, function(err, result) {
        if(err) {
        res.json(err);
        } else {
        res.json(result);
        }
	})
})

module.exports = router;