var ws = new WebSocket('ws://localhost:8088/post');

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
		var json = {
    	"url": tab.url,
    	"Favicon": tab.favIconUrl	
    };
    console.log("payload : " + JSON.stringify(json));
		ws.send(JSON.stringify(json));
  }
});