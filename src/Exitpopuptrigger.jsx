import React, { useEffect, useState } from 'react'

import {Engine}from "json-rules-engine"
 import useStore from './store'
import { Events } from './component/Exit/Events'
const Exitpopuptrigger =() => {

    const setExitintent=useStore((state)=>state.setExitintent)
    const Exitintent=useStore((state)=>state.Exitintent)
    const After10=useStore((state)=>state.After10)
    const setAfter10=useStore((state)=>state.setAfter10)
    const After20=useStore((state)=>state.After20)
    const setAfter20=useStore((state)=>state.setAfter20)

    const[popuprules,setPopupsrules]=useState()

    
  const  facts={ 
    Exitintend:Exitintent,
    visitafter10seconds:After10,
    visitafter20seconds:After20,
   }

  let engine=new Engine();

  engine.addRule({
    conditions: {
      any: [{
        
          fact: 'Exitintend',
          operator: 'equal',
          value: true
        }, 
        {
          fact: 'visitafter10seconds',
          operator: 'equal',
          value: true
        },
        {
            fact:'visitafter20seconds',
            operator:'equal',
            value:true
        }
    ] 
    },
    event: {  // define the event to fire when the conditions evaluate truthy
      type:"Exitintend",
      params: {
        message: 'show popups!'

      }
    }
  })
  const Trigger=()=>{
    engine.run(facts).then(({results})=>{
      const data=results[0].conditions.any.filter((item)=>{
        return item.factResult===true  && item.result===true
      })
      console.log(data)
      const fact=data.map((i)=>{
        return i.fact
      })
     
      setPopupsrules(fact)
     
     }).catch((error)=>{
      setPopupsrules('')
      console.log(error)
     })

  }
useEffect(() => {
  Trigger()
}, [Exitintent,After10,After20])

 

  return (
    <div>
        <h5>Add ExitPopup Trigger Rules</h5>
        <button onClick={()=>setExitintent(!Exitintent)}>Exitintent</button>{" "}{" "}<span>{Exitintent? "active":"disable"}</span><br/><br/>
        <button onClick={()=>setAfter10(!After10)}>page visit After10 seconds</button>{" "}<span>{After10? "active":"disable"}</span><br/><br/>
        <button onClick={()=>setAfter20(!After20)}>page visit After20 seconds</button>{" "}<span>{After20? "active":"disable"}</span><br/><br/>
        <div>
        <Events trigger={popuprules}/></div>
      
    </div>
  )
}

export default Exitpopuptrigger