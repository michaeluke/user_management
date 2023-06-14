import './App.css';
import React from 'react';
import Home from './components/Drawer'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from './components/modal';
import Bar from './components/bar';




class App extends React.Component {

  

  constructor(){
    super();
    this.state = {
      isModalOpen: false,
    }
  }

 

  handleClick = () => {
    
    this.setState({ isModalOpen: true });
    debugger
  
  };


  render(){

    const { isModalOpen } = this.state; 

  return (
    <div className="App">
     
     



      <Home
      
      
      
      />
    



     </div>

 
  )
}
}

export default App;

