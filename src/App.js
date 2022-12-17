

import React from 'react';
import './App.css';
import Perso from './components/perso';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      show : false
    }
  }

  handleShow =()=> this.setState({show : !this.state.show})
  render()
  {
    return(
      <div className='form'>
        <button onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
        this.state.show  &&  <Perso/>
       }

      </div>
    )
  }
}

export default App;
