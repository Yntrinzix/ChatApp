const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const io = require('socket.io')();
const cloudDB = 'mongodb://admin:admin@ds129315.mlab.com:29315/react';
const User = require('./server/models/user');
const Chat = require('./server/models/chat');
const Routes = require('./server/routes/routes');

mongoose.connect(cloudDB, () => {
  console.log('DB Connected')
})

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api',Routes);



io.on('connection', (client) => {

  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('sendMessage', (data) => {
    console.log(`Message from the frontend: ${data}`)
  });

});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
app.listen(3001, () => {
  console.log('Server started at port 3001')
})
