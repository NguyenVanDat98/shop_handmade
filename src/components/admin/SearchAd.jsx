
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const SearchAd = props => {

    const [typing , setTyping ]=useState("");
const ALL_DATA = useSelector(_=>_.adminData)


const handleSearch =()=>{
    let outPut =[]
    const Check=()=>{
        return{
            validArr: ( _, keyy,key)=>{
                let temp= keyy && keyy.toString()                    
                    if( keyy&&temp.includes(typing)){
                        outPut.push({address: key,data: _})
                     return
                    }
            },

        }
    }
    if(typing.length){
      for (const key in ALL_DATA) {
    if (Object.hasOwnProperty.call(ALL_DATA, key)) {   
      const valueFinal = Array.isArray(ALL_DATA[key]) && ALL_DATA[key].filter((_,i)=>{
          for (const keyy in _) {
              if (Object.hasOwnProperty.call(_, keyy) && !keyy.includes("id") && !keyy.includes("img") ) {
                if(!Array.isArray(_[keyy])){
                    Check().validArr(_,_[keyy],key)
                }else{
                    for (const value of _[keyy]) {
                        for (const keyy in value) {
                            if (Object.hasOwnProperty.call(value, keyy) && !keyy.includes("id") && !keyy.includes("img")) {
                                if(!Array.isArray(value[keyy]) ){
                                    Check().validArr(value,_[keyy],key)
                                }
                            }
                        }
                    }
                }
            }
        }       
      })  
      if(!Array.isArray(ALL_DATA[key])){
        for (const key in ALL_DATA) {
            if (Object.hasOwnProperty.call(ALL_DATA, key) && !key.includes("id") && !key.includes("img")) {
                if(!Array.isArray(ALL_DATA[key])){
                    console.log(ALL_DATA[key])}
            }
        }
      }
    }
   }   
    }
  
   return outPut
   
}
    return (
        <div className='searchBox'>
            <input type="text" onChange={(e)=>setTyping(e.target.value)} placeholder='Search...' />
            <button onClick={()=>console.log(handleSearch())}>
              <i className="fa-solid fa-magnifying-glass"></i>  
            </button>
            
        </div>
    );
};



export default SearchAd;