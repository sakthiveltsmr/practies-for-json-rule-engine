import React, { useEffect, useState } from 'react'
//  import Model from './model'
import {Engine}from "json-rules-engine"
import Model from './model'
const Popuprules =() => {
    const [popups,setPopups]=useState()
  const  facts={ 
    Exitintend: false,
    Entryintend:false,
    Addtocart:false,
    Coupon:false}

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
      type:"Exitintend",
      params: {
        message: 'show popups!'

      }
    }
  })
  const Main=()=>{
    engine.run(facts).then(({results})=>{
      console.log(results)
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
useEffect(() => {
  Main()
}, [])

 

  return (
    <div>Popuplist
      <Model popups={popups} />
    </div>
  )
}

export default Popuprules