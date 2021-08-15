import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import MainPage from './components/mainPage/MainPage';

class App extends Component {

  state = {
    data: '',
   
  }

  async componentDidMount(){
  
    await axios.get('https://testowo.elzonik.pl/frontest.php')
   
   
    .then(res=> this.setState({data: res.data}))
    
   
    
  
    
     
  

   

  }

  
  render() {
    const {data} = this.state;
 if(data === ''){
   console.log('wczytywanie')
  return (
    <div className="App">
      <Header/>
      <div className="container__image-waiting">
        <img className="image-waiting" src={require('./img/radar-wait.gif')} alt=''/>
        
      </div>
      <h2>Waiting for data</h2>
    </div>
  )
 } else {
   console.log('wczytano')
  console.log('state z App', this.state)
   
    return (
      <div className="App">
         <Header/>
     
      
         
     
       
       
       
       <MainPage {...this.state}/>
        
      </div>
    );
  }
}
}

export default App;
