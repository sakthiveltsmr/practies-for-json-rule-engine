import React, { useEffect } from 'react'
//  import exitpopupt from './exitpopupt'
import { Engine } from 'json-rules-engine'
import useStore from './store'
// import { Events } from './component/Exit/Events'
const Exitpopuptrigger = () => {
  const After10 = useStore((state) => state.After10)
  const setAfter10 = useStore((state) => state.setAfter10)
  const url=useStore((state)=>state.Url)
  const seturl=useStore((state)=>state.setUrl)

  const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
      document.cookie = `${item}=${value};`
  }}
    setInterval(() => {
      const value = !!cookieStorage.getItem('First_visit') && !!cookieStorage.getItem('url')
    
      if (value) {
        setAfter10(true)
        seturl(true)
        // clearInterval(myinterval)
      }else{
        setAfter10(false)
        seturl(false)
      }
    }, 1000);


  const facts = {
    visitafter5seconds:After10,
    CurrentURL:url
  }

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
      // define the event to fire when the conditions evaluate truthy
      type: 'showed',
      params: {
        message: 'show popups!',
        success:true
       
      },
    },
  })
  const Trigger =  () => {
   engine.run(facts).then(({ events }) => {
       events.map((event)=>{if(event.params.success){
         cookieStorage.setItem('showed',true)
          // return exitpopupt()
          
        }})
      
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
  
    Trigger()
   
  
  }, [After10||url])

  return (
    <div>
      <h5>Add ExitPopup Trigger Rules</h5>

      {/* <Events trigger={popuprules} /> */}
    </div>
  )
}

export default Exitpopuptrigger
