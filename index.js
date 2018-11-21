const
    http = require('http'),
    fs = require('fs'),
    WebSocketServer = require('ws').Server,
    express = require('express'),
    expressApp = express(),
    url = require('url'),
    path = require('path'),
    cryptchat = require('cryptChat')

expressApp.use(express.static(__dirname + '/public'))
let httpServer = http.createServer((req, response)=>{
    let parsed = url.parse(req.url)
    let unitpath = path.normalize(parsed.path).substr(1)
    //if (req.url === '/') req.url = '/index.html'
    console.log(req.url+" ("+unitpath+")");
    return expressApp(req, response)
}).listen(process.env.PORT || 80)

// WebSocket-сервер на порту 8081
let webSocketServer = new WebSocketServer({
    server: httpServer,
    path: '/wsServer',
})
webSocketServer.on('connection', cryptchat.onConnection)