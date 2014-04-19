/*

A sample node.js application that uses TiddlyWiki5 as a library

*/

var $tw = {};

require("../TiddlyWiki5/boot/bootprefix.js").bootprefix($tw)

// Dummy command line arguments telling TW5 not to load a wiki from the filesystem
$tw.boot = $tw.boot || {};
$tw.boot.argv = ["*"];

require("../TiddlyWiki5/boot/boot.js").TiddlyWiki($tw);

// Boot TiddlyWiki
$tw.boot.boot();

// Add some tiddlers
$tw.wiki.addTiddler({title: "TiddlerOne", text: "Text of tiddler one, incorporating the {{TiddlerTwo}}", tags: ["alpha", "beta"]});
$tw.wiki.addTiddler({title: "TiddlerTwo", text: "Text of tiddler two"});

// Render a tiddler as HTML
var html = $tw.wiki.renderTiddler("text/html","TiddlerOne");
console.log(html);



