import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display';
import Controls from './Controls';

import {sendMessage, messageListener} from '../../api';

class Chat extends Component {
  constructor(){
    super();
    this.state = {
      userName:"",
      message: "",
      messages: [],
      date:""
    }
  }

  componentDidMount = () => {
    this.setState({userName: this.props.location.state.userName})
    axios.get('/api/getMsg').then(res=>{
      this.setState({messages:res.data});
    });

    messageListener((err, data) => {
      const newData = {...this.state};
      const message = {
        message: data.message,
        name: data.name,
        date: data.date
      };
      newData.messages.push(message);
      this.setState({messages: newData.messages});
    })
  }




  submitMessage = (data) => {
    const message = {
      message: data,
      name: this.state.userName,
      date: new Date()
    }

    axios.post('/api/saveChat',{
      message
    }).then( res => {
      sendMessage(res.data)
    })

  }

  render() {
    return (
      <div>
      <h5>Welcome {this.state.userName}</h5>
        <Display messages={this.state.messages}/>
        <Controls onSubmit={this.submitMessage}/>
      </div>
    );
  }
}

export default Chat;
