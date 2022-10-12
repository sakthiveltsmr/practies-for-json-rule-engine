

const entrypopup = () => {   
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
    const consentPropertyName = 'entry';

   const shouldShowPopup =()=>!storageType.getItem(consentPropertyName);

   const saveToStorage = () => storageType.setItem(consentPropertyName,true);

    // document.onmouseenter=()=>{

            const value=shouldShowPopup()
            console.log(value)
           
            if(value){
                saveToStorage(storageType);
               setTimeout(()=>{
                let main= document.getElementById('root')
                
                const data=document.createElement('div')
                data.innerHTML=(`<body id="iapg" style="box-sizing: border-box; margin: 0;">
                <div id="iapg" style="alignItem:center; top:0px; width:300px; height:100px; border:3px solid #00FF00; margin-left: 1200px;
           position: absolute">
           <h1 style="color:#30F;"align="center">After 5 sec popups</h1>
           <p style="font-family:Arial, Helvetica, sans-serif; align:left; color:#F00;">40% Diwali offer</p>
            </div>
                </body>`)
            main.appendChild(data)
            return main

               },5000)

              
    }
    
    }
    // }
        


  


export default entrypopup;