import React from 'react';
import  './MainPage.scss';

class MainPage extends React.Component {

state = {
    dats: this.props.data
}
   

    render(){
        const data = []
        const props =[]
        const kolejnaData = []
        let dataControler =''
        
        let controller = data.map(el =>(
          console.log('tutusiu', el)
        ))
        props.push(Object.entries(this.props))

     props[0].map(el=>data.push(el[1]))
        
      
         data.map(el=>kolejnaData.push(el.dane_kontrolera))
     
      console.log(kolejnaData)

      if(kolejnaData[0] !== undefined){
        dataControler = kolejnaData.map(el=>(
             <div key={[el.imie, el.nazwisko]}><h1>{el.nazwisko}</h1></div>
         ))
      } else 
      {
          console.log('nie działa')}


        
        return(
            <div>{dataControler}</div>
        )
    }
}

export default MainPage