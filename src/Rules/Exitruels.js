import { Engine } from 'json-rules-engine'
import { useEffect } from 'react'
import { cookieStorage } from '../cookies/cookie'

const Exitruels = ({facts}) => {
   
    let engine = new Engine()

  engine.addRule({
    conditions: {
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
        ]
    
      
    },
    event: {
      type: 'showed',
      params: {
        message: 'show popups!',
        success:true
       
      },
    },
  })

  const Trigger=()=>{
    engine.run(facts).then(({ events }) => {
      
        events.map((event)=>{if(event.params.success){
           
          cookieStorage.setItem('showed',Date.now())

         }})
       
       })
       .catch((error) => {
         console.log(error)
       })
  }
  useEffect(()=>{
   
      Trigger()

  },[facts])
   
  return(
    <></>
  )
  
}

export default Exitruels