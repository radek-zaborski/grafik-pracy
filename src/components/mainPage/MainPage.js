import React from 'react';
import  './MainPage.scss';

class MainPage extends React.Component {

   



    render(){
       
        const data = this.props.data;
        
        const allDays = this.props.data.ile_dni;
        const allControllersData = this.props.data.kontroler;
        const numbersAllControllers =Object.keys(allControllersData).length
        console.log('data', data)
        console.log('dni miesiąca', allDays)
        console.log('dane wszystkich kontrolerów', allControllersData)
        let numberDaysArray = []
        for(let i=1; i<=allDays; i++){
            numberDaysArray.push(i)
        }

        const allDaysNumber = numberDaysArray.map(element=>(<td key={element}>{element}</td>))
        
      console.log(allDaysNumber)
        let rowControllers = Object.values(allControllersData).map(controlerel=>(
            <tr key={Math.random()}><td>{controlerel.dane_kontrolera.imie}{controlerel.dane_kontrolera.nazwisko}</td></tr>
        ))
             return(
                 <div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Imię i Nazwisko</td>
                                    {allDaysNumber}
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