import { Engine } from 'json-rules-engine'
import { useEffect } from 'react'
// import { cookieStorage } from '../cookies/cookie'
import { CookiesFn } from '../settings/utils'
const Exitruels = ({rules}) => {
   
    let engine = new Engine()
    let master=
        { 
        
            all: [
            {
              fact: 'visitafter5seconds',
              operator: 'equal',
              value: true,
            },
            {
              fact: 'CurrentURL',
              operator: 'equal',
              value: true,
            },
          ]}
    

  engine.addRule({
    conditions:master ,
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
      
        events.map((event)=>{if(event.params.success){
           
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