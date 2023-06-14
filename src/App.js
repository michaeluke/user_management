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

  // handleClick = () => {
  //   debugger
  //   this.setState({ isModalOpen: true });
  // };

  handleClick = () => {
    
    this.setState({ isModalOpen: true });
    debugger
  
  };


  render(){

    const { isModalOpen } = this.state; 

  return (
    <div className="App">
     
     


     {/* {this.state.isModalOpen && <Modal/>} */}
     {/* {this.state.isModalOpen && <MyDialog/>} */}
      {/* <Bar handleClick={this.handleClick} /> */}
      {/* <Bar/> */}
      {/* <img className='reno_image' src={reno} alt="Image Description" /> */}
     
      <Home
      
      
      
      />
      {/* <button>Add New</button> */}



     </div>

 
  )
}
}

export default App;

