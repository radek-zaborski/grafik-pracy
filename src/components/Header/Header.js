import React from 'react';
import  './Header.scss';
// import headerimage from '../../img/radar-wait.gif'
const Header = () => (
    <div className='header'>
       <img className='img-1' src={require('../../img/header.jpg')} alt=''/>
       <h1>controller work schedule</h1>
       <img className='img-2' src={require('../../img/header2.jpg')} alt=''/>
    </div>
)

export default Header;