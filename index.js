const
    aesjs = require('aes-js')
    http = require('http')
    https = require('https')
    fs = require('fs')
    WebSocketServer = require('ws').Server
    express = require('express')
    expressApp = express()
    url = require('url')
    path = require('path')

expressApp.use(express.static(__dirname + '/public'))
let httpServer = http.createServer((req, response)=>{
    let parsed = url.parse(req.url)
    let unitpath = path.normalize(parsed.path).substr(1)
    //if (req.url === '/') req.url = '/index.html'
    console.log(req.url);
    return expressApp(req, response)
}).listen(80)

var clients = {}
// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer({
    server: httpServer,
    path: '/wsServer',
})
webSocketServer.on('connection', function(ws) {
    ws.on('message', function(message) {
        var query = JSON.parse(message)
        comm.work(this,query);
    })
    ws.on('close', function() {
        comm.close(this);
    })
})



