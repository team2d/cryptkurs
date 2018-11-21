module.exports = (()=>{
    let clients = {}
    const aesjs = require('aes-js')
    
    return {
        onConnection(ws) {
            ws.on('message', function(message) {
                var query = JSON.parse(message)
                //comm.work(this,query);
            })
            ws.on('close', function() {
                //comm.close(this);
            })
        },
        collectEventsWithHashKey() {
            
        },
        getEventsByHashKey() {
            
        }
    }
})();