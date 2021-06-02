var ws = new WebSocket('ws://localhost:8088/post');

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    ws.send(tab.url);
  }
});