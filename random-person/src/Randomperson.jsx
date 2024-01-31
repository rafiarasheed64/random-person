import React, { useState } from 'react'
import Data from './Data'
import {BiEnvelope,BiLocationPlus,BiPhone,BiCalendar,BiLock} from 'react-icons/bi'

const Randomperson = () => {
    const [person,setPerson] = useState(Data[0])
    const [info,setInfo] =useState('')
    function random (){
        let rndmperson = Math.floor(Math.random()*Data.length)
        setPerson(Data[rndmperson])
        setInfo('')
    }
    function show (ele){
        setInfo(person[ele])
    }
  return (
    <>
    <div style={{height: 'auto',width: '50%',borderRadius: '15px',border: '2px solid',padding:'10px'}}>
        <h1>RANDOM PERSON</h1>
        <img style={{height: '100px',width: '100px',borderRadius: '50%'}} src={person.image} alt="" />
        <h3>{person.name}</h3>
        <p>{info}</p>
        <button onClick={random}>Random</button>
        <div style={{backgroundColor: 'grey',marginTop: '10px',color: 'white',fontSize: '25px',padding: '10px',display:'flex',justifyContent: 'space-around'}}>
            <BiEnvelope onMouseEnter={()=>show('mail')}/>
            <BiLocationPlus onMouseEnter={()=>show('address')}/>
            <BiPhone onMouseEnter={()=>show('phone')}/>
            <BiCalendar onMouseEnter={()=>show('age')}/>
            <BiLock onMouseEnter={()=>show('password')}/>
            

        </div>
    </div>

    </>
  )
}

export default Randomperson