import React from 'react'
// import { cookieStorage } from './cookies/cookie'
import Exitruels from './Rules/Exitruels'
import useStore from './store'

import { CookiesFn } from './settings/utils'

const Exitpopuptrigger = () => {
  const After10 = useStore((state) => state.After10)
  const setAfter10 = useStore((state) => state.setAfter10)
  const url=useStore((state)=>state.Url)
  const seturl=useStore((state)=>state.setUrl)

  
    setInterval(() => {
      const value= !! CookiesFn.getCookie('First_visit')
      console.log(value,"for cookies")
      // const value = !!cookieStorage.getItem('First_visit')
      if (value) {
        setAfter10(5)
        seturl(5) 
      }else{
        setAfter10(0)
        seturl(0)
      }
    }, 1000);


  const rules = {
    stay5secondonpage:After10,
    currentUrl:url
  }

  return (
    <>
      <Exitruels rules={rules}/>
     
    </>
  )
}

export default Exitpopuptrigger
