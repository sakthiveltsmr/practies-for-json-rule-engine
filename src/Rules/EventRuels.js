import { Engine } from 'json-rules-engine';
import React, { useEffect, useState } from 'react'
import Model from '../model';

const EventRuels = ({facts}) => {
  console.log(facts)
 const[popups,setPopups]=useState('')

  let engine=new Engine();

    engine.addRule({
      conditions: {
        any: [{
        
          fact: 'Exitintend',
          operator: 'equal',
          value: true
        }, 
        {
          fact: 'Entryintend',
          operator: 'equal',
          value: true
        },
        {
            fact:'Addtocart',
            operator:'equal',
            value:true
        },
        {
            fact:'Coupon',
            operator:'equal',
            value:true
        }
    ] 
    },
    event: {  // define the event to fire when the conditions evaluate truthy
      type:"popups",
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
    
  },[facts])

  return (
    <><Model popups={popups}/></>
  )
}

export default EventRuels