

const exitpopupt = () => {   
     
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
        }
    }
    

    const storageType = cookieStorage;
    const consentPropertyName = '1';



   const shouldShowPopup =()=>!storageType.getItem(consentPropertyName);

const saveToStorage = () => storageType.setItem(consentPropertyName,true);

    window.onmouseout=(event)=>{
       

        if(event.screenY<=180){
           
            const value=shouldShowPopup()
          
            if(value){
            
                saveToStorage(storageType);
            
            let main= document.getElementById('root')
            
            const data=document.createElement('div')
            data.innerHTML=(`<body id="iapg" style="box-sizing: border-box; margin: 0;">
            <div id="Template-One" class="freedownloads-popup-sec"
            style="background-color: rgb(142, 142, 65); font-family: 'Roboto Slab', serif; width: 700px; margin-top: 30px; margin-right: auto; margin-bottom: 30px; margin-left: auto; padding-top: 45px; padding-right: 65px; padding-bottom: 65px; padding-left: 65px; box-sizing: border-box; position: relative; box-shadow: rgba(50, 50, 50, 0.52) 0px 10px 20px 0px; background: #8E8E41 url(images/freedownloads.jpg) no-repeat center center; background-size: cover;">
            <h2 data-edit="text"
            style="box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 25px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 88px; font-family: 'Roboto Slab', serif; font-size: 82px; color: rgb(255, 255, 0); font-weight: normal;">
            Free Design Downloads</h2>
        <h4 data-edit="text"
        style="box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 30px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: 'Roboto Slab', serif; font-size: 20px; color: rgb(255, 255, 255); font-weight: normal;">
        Unlimited Free Downloads Of Brochures<br style="box-sizing: border-box;">
        Flyers, Postcards and much more...</h4>
        <div class="freedownloads-email-sec"
        style="box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; width: 100%; float: left; position: relative; box-shadow: rgba(0, 0, 0, 0.27) 5px 5px 5px 0px;">
        <input type="email" data-edit="placeholder" placeholder="Enter your email id"
        class="freedownloadsemail-input"
        style="width: 100%; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(0, 0, 0); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; height: 64px; float: left; padding-top: 16px; padding-right: 170px; padding-bottom: 16px; padding-left: 16px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; box-sizing: border-box; color: rgb(255, 255, 255);"><button
        type="submit" class="freedownloads-input-btn"
        style="outline-color: initial; outline-style: none; outline-width: initial; width: 160px; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 21); height: 64px; cursor: pointer; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 17px; padding-right: 16px; padding-bottom: 17px; padding-left: 16px; float: right; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; font-family: 'Roboto Slab', serif; font-size: 22px; text-transform: uppercase; color: rgb(0, 0, 0); box-sizing: border-box; font-weight: bold; transition-duration: 0.4s; transition-timing-function: ease; transition-delay: 0s; transition-property: all; position: absolute; top: 0px; right: 0px;">signup</button>
        </div>
        <h6 data-edit="text"
        style="box-sizing: border-box; font-family: 'Roboto Slab', serif; font-size: 14px; letter-spacing: 0.4px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; color: rgba(255, 255, 255, 0.6); font-weight: normal;">
        * Terms and Conditions Apply</h6><button class="freedownloads-cls-btn close-btn"
        style="box-sizing: border-box; outline-color: initial; outline-style: none; outline-width: initial; font-size: 14px; line-height: 18px; width: 28px; height: 28px; border-top-left-radius: 50%; border-top-right-radius: 50%; border-bottom-right-radius: 50%; border-bottom-left-radius: 50%; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); position: absolute; right: -14px; top: -14px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; box-shadow: rgba(0, 0, 0, 0.27) 0px 0px 2px 0px; cursor: pointer;">X</button>
        </div>
        </body>`)
        main.appendChild(data)
        return main
    }
    
    }
    }
        
}

  


export default exitpopupt