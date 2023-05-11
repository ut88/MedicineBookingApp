import React from "react";
import { useState } from "react";
export const Context=React.createContext({
  items:[],
  add:()=>{},
  remove:()=>{},
})

const ContextProvider=(props)=>{

  const [data,setData]=useState([]);

   const addHandler=(obj)=>{
       
       setData((Previous)=>{
        let isPresent=false;
        let newArray=Previous.map((item)=>{
              if(item.MedicineName===obj.MedicineName){
                item.Qty= item.Qty+1
                isPresent=true;
              }
              return item;
        })
        if(isPresent===false){
            return [...newArray,obj];
        }
        return newArray
       })
   }

  //  const removeHandler=(obj)=>{
  //   setData((Previous)=>{
  //     let isPresent=false;
  //     let newArray=Previous.map((item)=>{
  //           if(item.MedicineName===obj.MedicineName){
  //             item.Qty= item.Qty-1
  //             isPresent=true;
  //           }
  //           return item;
  //     })
  //     if(isPresent===false){
  //         return [...newArray,obj];
  //     }
  //     return newArray
  //    })
  //  }

  const CartContext={
     items:data,
     add:addHandler,
    //  remove:removeHandler
  };
    return(<Context.Provider value={CartContext}>
          {props.children}
          </Context.Provider>)
}

export default ContextProvider;