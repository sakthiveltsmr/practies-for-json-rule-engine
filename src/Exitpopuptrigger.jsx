import React from 'react'
// import { cookieStorage } from './cookies/cookie'
import Exitruels from './Rules/Exitruels'
import useStore from './store'
import utill from"./settings/utils"
const Exitpopuptrigger = () => {
  const After10 = useStore((state) => state.After10)
  const setAfter10 = useStore((state) => state.setAfter10)
  const url=useStore((state)=>state.Url)
  const seturl=useStore((state)=>state.setUrl)

  
    setInterval(() => {
      const value=!!utill.getCookie('First_visit')
      console.log(value,"for cookies")
      // const value = !!cookieStorage.getItem('First_visit')
      if (value) {
        setAfter10(true)
        seturl(true) 
      }else{
        setAfter10(false)
        seturl(false)
      }
    }, 1000);


  const facts = {
    visitafter5seconds:After10,
    CurrentURL:url
  }

  return (
    <>
      <Exitruels facts={facts}/>
     
    </>
  )
}

export default Exitpopuptrigger
