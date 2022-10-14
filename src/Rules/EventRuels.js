import { Engine } from 'json-rules-engine';
import React, { useEffect, useState } from 'react'
import Model from '../model';
import  Event from "../condition/Event.json"
const EventRuels = ({rules}) => {

 const[popups,setPopups]=useState('')

  let engine=new Engine();
   
    
    engine.addRule({
      conditions:Event,
    event: { 
      type:"popups",
      params: {
        message: 'show popups!'

      }
    }
  })
  
  const Trigger=()=>{
    engine.run(rules).then(({results})=>{
        const data=results[0].conditions.any.filter((item)=>{
          return item.factResult===true  && item.result===true
        })
        const fact=data.map((i)=>{
          return i.fact
        })
      
        setPopups(fact)
       
       }).catch((error)=>{
        setPopups('')
        console.log(error)
       })
  }
  

  useEffect(()=>{
        
        Trigger()
    
  },[rules])



  return (
    <><Model popups={popups}/></>
  )
}

export default EventRuels