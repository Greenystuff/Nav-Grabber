const WebSocket = require('ws');
const url = require('url');
let payload = null;
const wss = new WebSocket.Server({ port: 8088 });

wss.on('connection', function connection(ws, request) {
  const pathname = url.parse(request.url).pathname;
  
  if (pathname === '/post') {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
      payload = message;
    });
  }

  if (pathname === '/get') {
    console.log('sending : %s', payload);   
      ws.send(payload);
  }
});