
    let entrytime
    let exittime
    var locationentry
    var locationexit
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
        entrytime = new Date()
       locationentry=window.location.href
   
    }
    
    window.onmouseout=()=>{
     
      const storage=cookieStorage
      let exittime=new Date()
      locationexit=window.location.href
      const total=exittime-entrytime;
      const sec=Math.floor(total/1000)
      
      
       
      if(locationentry===locationexit){

          if(5<=sec){
              storage.setItem(`First_visit`,total); 
              storage.setItem('url',locationentry);
            }
            }
    
            
        }
    
    
    


