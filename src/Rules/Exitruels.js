import { Engine } from 'json-rules-engine'
import { useEffect } from 'react'
import { cookieStorage } from '../cookies/cookie'
// import {Export} from"../settings/export"
import useStore from '../store'
const Exitruels = ({facts}) => {
    const setShow=useStore((state)=>state.setShow)
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
            setShow(true)
          cookieStorage.setItem('showed',true)
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