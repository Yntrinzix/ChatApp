import React from 'react';

class Controls extends React.Component {
  constructor(){
    super();
    this.state={
      message:''
    }
  }


  change = e => this.setState({message: e.target.value})

  tae = e =>  {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({
      message:''
    })
  }




  render(){
    return(
      <form onSubmit={this.tae}>
        <input type="text" className="form-control" value={this.state.message} onChange={this.change} />
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    );
  }
}

export default Controls;
