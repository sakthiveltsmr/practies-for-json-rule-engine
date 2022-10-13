import React from 'react'
//  import Model from './model'
import useStore from './store'
import EventRuels from './Rules/EventRuels.js'
const Popuprules =() => {
   const Exit=useStore((state)=>state.Exit)
   const Add=useStore((state)=>state.Addtocart)
   const Entry=useStore((state)=>state.Entry)
   const coupon=useStore((state)=>state.Coupon)
  

  const  facts={ 
    Exitintend:Exit,
    Entryintend:Entry,
    Addtocart:Add,
    Coupon:coupon
  }

 

  return (
    <>
    <EventRuels facts={facts}/>
    </>
  )
}

export default Popuprules