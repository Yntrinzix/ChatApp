import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display';
import Controls from './Controls';

import {sendMessage, sendHa} from '../../api';

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

  componentDidMount = () => this.setState({userName: this.props.location.state.userName})




  submitMessage = (e) => {
    let d = new Date();
    const newData = {...this.state};
    var message = {
      message: e,
      name: this.state.userName,
      date: d
    }

    newData.messages.push (message)
    this.setState({
      messages: newData.messages,
    });


  }

  render() {

    console.log(this.state.messages)

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
