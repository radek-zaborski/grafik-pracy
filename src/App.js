import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import MainPage from './components/mainPage/MainPage';

class App extends Component {

  state = {
    dataEnter: '',
    data:'',
  }

  async componentDidMount(){
  
    await axios.get('http://testowo.elzonik.pl/frontest.php')
   
   
    .then(res=> this.setState({dataEnter: res.data}))
    
    const {dataEnter} = this.state;
  
    const newArrs = Object.entries(dataEnter)
    let renderarr = []

    newArrs.map(el=>renderarr.push(el[1]))
    
    this.setState({data: renderarr})
    const test = newArrs[0]
    const test2 = test[1]
    this.setState({data:test2})
     
  

   

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
 
   
    return (
      <div className="App">
         <Header/>

         <MainPage {...data}/>
      </div>
    );
  }
}
}

export default App;
