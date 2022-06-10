const express = require('express')
const app = express()
const router = express.Router();
const xlsxtojson = require("xlsx-to-json");
const xlstojson = require("xls-to-json");     

router.get('/', function (req, res) {
    res.render(index)
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
	});
});

module.exports = router;