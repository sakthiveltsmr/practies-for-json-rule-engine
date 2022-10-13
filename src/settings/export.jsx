import React, { useEffect } from 'react'

export const Export = () => {
  useEffect(()=>{
    const script = document.createElement("script");
    script.src = "./script.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();

    document.body.appendChild(script);
  },[])
  return (
    <div>
     
    </div>
  )
}
