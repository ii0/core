/**
 * Created by strawmanbobi
 * 2016-04-27
 */

var app = require('../yk_console.js');
var pushService = require('../services/push_service.js');

app.get('/irext/push/list_mobiles', pushService.listMobiles);
app.get('/irext/push/list_push_messages', pushService.listPushMessages);

app.post('/irext/push/push_to_peer', pushService.pushToPeer);
app.post('/irext/push/broadcast', pushService.broadcast);