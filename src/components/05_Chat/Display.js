import React from 'react';

class Display extends React.Component {




  render(){
    return(
      <div style={{overflowY: "scroll", height: "75vh", backgroundColor: "black", width: "100%", color: "white", padding: "10px"}}>
        {this.props.messages.map((d,i)=><div key={i}><h6 >{d.name}</h6><h3>{d.message}</h3><h6>{d.date.toString()}</h6></div>)}
      </div>
    );
  }
}

export default Display;
