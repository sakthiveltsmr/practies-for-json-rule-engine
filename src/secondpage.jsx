import React from 'react'
import Popuprules from './popuprules'
import useStore  from './store'
const Secondpage = () => {
    const setExit =useStore((state)=>state.setExit)
    const Exit=useStore((state)=>state.Exit)
    const setEntry =useStore((state)=>state.setEntry)
    const Entry=useStore((state)=>state.Entry)
    const setAddtocart =useStore((state)=>state.setAddtocart)
    const Addtocart=useStore((state)=>state.Addtocart)
    const setCoupon =useStore((state)=>state.setCoupon)
    const Coupon=useStore((state)=>state.Coupon)
  return (
    <div>
  
         <button onClick={()=>setExit(!Exit)}>Exitintent</button>{" "}{" "}<span>{Exit? "active":"disable"}</span><br/><br/>
        <button onClick={()=>setEntry(!Entry)}>Entry</button>{" "}<span>{Entry? "active":"disable"}</span><br/><br/>
        <button onClick={()=>setAddtocart(!Addtocart)}>Addtocart</button>{" "}<span>{Addtocart? "active":"disable"}</span><br/><br/>
        <button onClick={()=>setCoupon(!Coupon)}>Coupon</button>{" "}<span>{Coupon? "active":"disable"}</span><br/><br/> 

      <Popuprules/>
      
    </div>
  )
}

export default Secondpage