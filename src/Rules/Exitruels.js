import { Engine } from 'json-rules-engine'
import { useEffect } from 'react'
import  TimeRules from"../condition/Timerules.json"

import { CookiesFn } from '../settings/utils'
const Exitruels = ({rules}) => {
   
    let engine = new Engine()
   
    engine.addRule({
      conditions:TimeRules ,
      event: {
        type: 'showed',
         params: {
           message: 'show popups!',
           success:true
       
      },
    },
  })

  const Trigger=()=>{

    engine.run(rules).then(({events})=> {
      
        events.map((event)=>{if(event.params.success===true){
           
          CookiesFn.setCookie('showed',Date.now())

         }})
       
       })
       .catch((error) => {
         console.log(error)
       })
  }
  useEffect(()=>{
   
      Trigger()

  },[rules])
   
  return(
    <></>
  )
  
}

export default Exitruels