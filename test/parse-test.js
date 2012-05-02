
var fs = require('fs');

var Parser=require("./JSinJS-all").Parser;


var fileList=[
	"my-code.js",
	"backbone-0.5.3.js",
	"mootools-1.4.1.js",
	"prototype-1.7.0.0.js",
	"ext.js",
	"jquery-1.7.1.js",
	"ext-core-3.1.0.js",
	"ext-debug.js",
	"ext-dev.js",
	"ext-all.js",
	"ext-all-debug.js",
	"ext-all-dev.js"
]

var testcase="./testcase";

function parseFile( idx ){
	
	var filePath=testcase+"/"+fileList[idx||0];

	var code = fs.readFileSync(filePath, "UTF-8");

	var count=0;
	var start=Date.now();
	var parser = new Parser();
	var lastToken;
	var tree ;
	try{
		tree= parser.parse(code ,function(token){
			count++;
			lastToken=token;
		});
	}catch(e){
		console.log(count, lastToken);
		throw e;
	}
	var end=Date.now();
	console.log( "token count : "+count);
	console.log( "time cost : "+ (end-start) );

	return tree;
}

var testFileIdx= process.argv[2]||0;
parseFile(testFileIdx);

