

export const welcome = () => {
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
    
  
    document.onmouseenter=()=>{
        const storageType = cookieStorage;
        const consentPropertyName = '2';
        const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
        const saveToStorage = () => storageType.setItem(consentPropertyName, true);
    
        const value=shouldShowPopup()
        if(value){
               saveToStorage(storageType);
         setTimeout(()=>{
             let main= document.getElementById('root')
            
               const data=document.createElement('div')
               data.innerHTML=(`<div id="iapg" style="alignItem:center; top:50%; width:300px; height:100px; border:3px solid #00FF00; margin-left:40%;
               position: absolute">
               <h1 style="color:#30F;"align="center">Wellcome  popups</h1>
               <p style="font-family:Arial, Helvetica, sans-serif; align:left; color:#F00;">40% Diwali offer</p>
                </div>`)
           main.appendChild(data)
           return main
               
    
         },2000)
               
              }
}
}
