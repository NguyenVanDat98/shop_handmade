
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const SearchAd = props => {

    const [typing , setTyping ]=useState("");
const ALL_DATA = useSelector(_=>_.adminData)


const handleSearch =()=>{
    let outPut =[]
    if(typing.length){
      for (const key in ALL_DATA) {
    if (Object.hasOwnProperty.call(ALL_DATA, key)) {   
      const valueFinal = Array.isArray(ALL_DATA[key]) && ALL_DATA[key].filter((_,i)=>{
          for (const keyy in _) {
              if (Object.hasOwnProperty.call(_, keyy) && !keyy.includes("id") && !keyy.includes("img") ) {
                //   console.log(keyy);
                if(!Array.isArray(_[keyy])){
                    let temp= _[keyy].toString()                    
                    if(temp.includes(typing)){
                        outPut.push({address: key,data: _})
                     return
                    }
                }else{
                    for (const value of _[keyy]) {
                        for (const keyy in value) {
                            if (Object.hasOwnProperty.call(value, keyy) && !keyy.includes("id") && !keyy.includes("img")) {
                                // console.log(keyy);
                                if(!Array.isArray(value[keyy]) ){
                                    let temp= value[keyy].toString()    
                                    if(temp.includes(typing)){
                                        // console.log(value)
                                        outPut.push({address: key,data: value})
                                     return
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }       
      })     
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