import React, { useEffect, useState } from 'react'
//  import Model from './model'
import {Engine}from "json-rules-engine"
import Model from './model'
import useStore from './store'
const Popuprules =() => {
   const Exit=useStore((state)=>state.Exit)
   const Add=useStore((state)=>state.Addtocart)
   const Entry=useStore((state)=>state.Entry)
   const coupon=useStore((state)=>state.Coupon)
    const [popups,setPopups]=useState()
  const  facts={ 
    Exitintend:Exit,
    Entryintend:Entry,
    Addtocart:Add,
    Coupon:coupon}

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
  const getRules=()=>{
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
useEffect(() => {
  getRules()
}, [Exit,Entry,Add,coupon])

 

  return (
    <div>
      <Model popups={popups} />
    </div>
  )
}

export default Popuprules