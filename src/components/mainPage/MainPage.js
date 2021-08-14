import React from 'react';

import  './MainPage.scss';

class MainPage extends React.Component {

   constructor(props){
     super(props);
     this.handleClickPrev = this.handleClickPrev.bind(this);
     this.handleClickNow = this.handleClickNow.bind(this);
     this.handleClickNext = this.handleClickNext.bind(this);


     this.state = {
      monthControl: 1
     }
   }

  checkDate(i){
     
    const today = new Date();
    console.log('dzień tygodnia')
    const holiday= this.props.data[this.state.monthControl].czyswieto[i+1]
    const day = today.getDate()
      if(day === i+1 ){
        return (<tr className='day today'>{i+1}</tr>)
      } 
      else if( holiday === 1){
        return(<tr className='day holiday'>{i+1}</tr>)
      } else{
        return(<tr className='day'>{i+1}</tr>)
      } 

    
    }
    
  
 handleClickPrev(){
 
   this.setState({monthControl: 0})
 }
   
 handleClickNow(){
 
  this.setState({monthControl: 1})
}
   
 handleClickNext(){
 
   this.setState({monthControl: 2})
 }

    render(){
     
   
        
      
        const allDays = this.props.data.ile_dni;
        const allControllersData = this.props.data[this.state.monthControl].kontroler;
        const scheduleControllerDay = [];
      

      
       
       
        let numberDaysArray = []
        for(let i=1; i<=allDays; i++){
            numberDaysArray.push(i);
            
          
        }
        
        const allDaysNumber = numberDaysArray.map(element=>(<td key={element}>{element}</td>))


 
        
      console.log(allDaysNumber)
        let rowControllers = Object.values(allControllersData).map(controlerel=>(
            <tr key={Math.random()}>
                
                <td>
               
                    <span className='text__day'>DZIEŃ</span>
                    {controlerel.dane_kontrolera.imie} {controlerel.dane_kontrolera.nazwisko}<br/>
                    {controlerel.dane_kontrolera.funkcja}
                
                </td>
                
                    {Object.values(controlerel.obsady).map(( el, i)=>(
                  
                    <td >
                      {this.checkDate(i)}
                        {el.dzialka}<br/>
                      
                      {el.flaga}</td>
                        
                    
                    
                    ))}
               
            </tr>
        ))

       

        Object.values(allControllersData).map(controlerel=>(
          console.log(controlerel)
        ))

        console.log('tu powinna być tablica z grafikami', scheduleControllerDay)
             return(
                 <div className="container__table">
                   <div className="container__button">
                   <button className='button__month' onClick={this.handleClickPrev} >Wcześniejszy miesiąc</button>
                   <button className='button__month' onClick={this.handleClickNow} >Aktualny miesiąc </button>
                   <button className='button__month' onClick={this.handleClickNext} >Następny miesiąc </button>
                   </div>
                    
                        <table>
                         <thead>
                            <tr className="header__schedule">
                                <td >IMIĘ I NAZWISKO</td>
                                
                            </tr>
                          
                         </thead>
                         <tbody>
                            {rowControllers}
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                 </div>
             )     
      
       }
}

export default MainPage