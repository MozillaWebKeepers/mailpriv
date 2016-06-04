var self = require("sdk/self");
var contextMenu = require("sdk/context-menu");

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://www.saurabhbadhwar.xyz/");
}

var menuItem=contextMenu.Item({
  label: "Report link",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click",function(){'+
                 'var text = window.getSelection().toString();'+
                 'self.postMessage(text);'+
                 '});',
  onMessage: function(selectionText){
    console.log(selectionText);
  }
});

exports.dummy = dummy;
