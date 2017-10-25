import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');



  
export const sendMessage = (data) => {
  socket.emit('sendMessage', data)
}
  
export const messageListener = (cb) => {
  socket.on('fromBackend', data => {
    return cb(null, data);
  });
};





