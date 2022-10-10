
import exitpopupt from '../../exitpopupt'
import Afterentrypopup from './Entry/After20'
import Entry from "./Entry/Entry"

export const Events = ({ trigger }) => {

  
    if(trigger){
        return trigger.map((item) => {
         console.log('item',item)
            switch (item) {
              default:
              case 'Exitintend':
                return exitpopupt()
      
              case 'visitafter5seconds':
                return Entry()
      
              case 'visitafter10seconds':
                return Afterentrypopup()
              
            }
          })
    }
}


