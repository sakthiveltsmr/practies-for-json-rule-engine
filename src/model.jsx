import React from 'react'
import exitpopupt from './exitpopupt'

const Model = ({ popups }) => {
    


  const popupsview = () => {
    if(popups){
        return popups.map((item) => {
            switch (item) {
              case 'Exitintend':
                return <h1>{exitpopupt()}</h1>
      
              case 'Entryintend':
                return <h1>Entrypopup Activated</h1>
      
              case 'Addtocart':
                return <h1>Addtocartpopup Activated</h1>
      
              case 'Coupon':
                return <h1>Couponpopup Activated</h1>
              default:
                return <h1>No Active popups</h1>
            }
          })
    }
    
  }
  


  return (
    <div>
      model
      <div>{popupsview()}</div>
    </div>
  )
}

export default Model
