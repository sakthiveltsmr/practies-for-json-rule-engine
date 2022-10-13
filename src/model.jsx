import React from 'react'
import Exitpopuptrigger from './Exitpopuptrigger'


const Model = ({popups}) => {

 
    if(popups){
        return popups.map((item) => {
            switch (item) {
              case 'Exitintend':
                return Exitpopuptrigger()
      
              case 'Entryintend':
                return <>wellcome</>
      
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

export default Model
