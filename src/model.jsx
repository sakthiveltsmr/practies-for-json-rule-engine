import React from 'react'
// import exitpopupt from './exitpopupt'
import Exitpopuptrigger from './Exitpopuptrigger'
import { welcome } from './component/Welcome/welcome'

const Model = ({ popups }) => {

  // const popupsview = () => {
    if(popups){
        return popups.map((item) => {
            switch (item) {
              case 'Exitintend':
                return Exitpopuptrigger()
      
              case 'Entryintend':
                return welcome()
      
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
