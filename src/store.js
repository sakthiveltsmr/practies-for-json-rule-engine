import create from "zustand";
 const useStore = create((set) => ({
  Exit:false,
  Entry:false,
  Addtocart:false,
  Coupon:false,
  After10:false,
  Url:false,
  show:false,
  setExit: (data) => {
    set({ Exit: data });
  },
  setEntry:(data)=>{
    set({ Entry:data}  
    )
  },
  setAddtocart:(data)=>{
    set({Addtocart:data})
  },
  setCoupon:(data)=>{
    set({Coupon:data})
  },
  setAfter10: (data)=>{
    set({After10:data});
},

setUrl:(data)=>{
    set({Url:data})
},
setShow:(data)=>{
    set({show:data})
}
}));

export default useStore