import React from 'react';
import  './MainPage.scss';

class MainPage extends React.Component {

   
  checkDate(i){
     
    const today = new Date();
    console.log('dzień tygodnia')
  
    const date = today.getDate()
      if(date === i ){
        return (<tr className='day today'>{i}</tr>)
      } 
      else {
        return(<tr className='day '>{i}</tr>)
      }
    }
  


    render(){
       
        const data = this.props.data;
        
        const allDays = this.props.data.ile_dni;
        const allControllersData = this.props.data.kontroler;
        const scheduleControllerDay = [];
       const today = new Date();

       const date = today.getDate()
       console.log('data', date)

        console.log('data', data);
        console.log('dni miesiąca', allDays);
        console.log('dane wszystkich kontrolerów', allControllersData);
       
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