
var fs = require('fs');


var rootPath='../source';

var LexicalParser = fs.readFileSync(rootPath+'/LexicalParser.js','utf-8');
var SyntacticalParser = fs.readFileSync(rootPath+'/SyntacticalParser.js','utf-8');
var Parser = fs.readFileSync(rootPath+'/Parser.js','utf-8');
var patch = fs.readFileSync('./node-patch.js','utf-8');

var breakLine='\r\n';

var data=[LexicalParser,SyntacticalParser,Parser,patch].join(breakLine);

fs.writeFileSync('./JSinJS-all.js',data,'utf-8');
